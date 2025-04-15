const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const File = require('../models/File');

// Encryption constants
const ALGORITHM = 'aes-256-cbc';
const ITERATIONS = 10000;
const KEY_LENGTH = 32;
const DIGEST = 'sha512';

exports.encryptFile = async (req, res) => {
  try {
    const { userKey, originalFilename, mimeType } = req.body;
    const file = req.file;

    // Generate cryptographic values
    const fileId = uuidv4();
    const salt = crypto.randomBytes(16);
    const iv = crypto.randomBytes(16);

    // Key derivation
    const key = crypto.pbkdf2Sync(
      userKey,
      salt,
      ITERATIONS,
      KEY_LENGTH,
      DIGEST
    );

    // Encryption
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
    const encryptedData = Buffer.concat([
      cipher.update(file.buffer),
      cipher.final()
    ]);

    // Create header
    const header = Buffer.concat([
      Buffer.from(fileId),
      salt,
      iv
    ]);

    // Combine header + encrypted data
    const finalBuffer = Buffer.concat([header, encryptedData]);

    // Save to database
    await File.create({
      fileId,
      userKey,
      originalFilename,
      mimeType
    });

    // Send response
    res.setHeader('Content-Type', 'application/octet-stream');
    res.send(finalBuffer);

  } catch (error) {
    console.error('Encryption error:', error);
    res.status(500).json({ error: 'File encryption failed' });
  }
};

exports.decryptFile = async (req, res) => {
  try {
    const encryptedFile = req.file;
    const encryptedBuffer = encryptedFile.buffer;

    // Extract header components
    const fileId = encryptedBuffer.slice(0, 36).toString();
    const salt = encryptedBuffer.slice(36, 52);
    const iv = encryptedBuffer.slice(52, 68);
    const encryptedData = encryptedBuffer.slice(68);

    // Get file data from DB
    const fileData = await File.findOne({ fileId });
    if (!fileData) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Derive key
    const key = crypto.pbkdf2Sync(
      fileData.userKey,
      salt,
      ITERATIONS,
      KEY_LENGTH,
      DIGEST
    );

    // Decryption
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
    const decryptedData = Buffer.concat([
      decipher.update(encryptedData),
      decipher.final()
    ]);

    // Set response headers
    res.setHeader('Content-Type', fileData.mimeType);
    res.setHeader('X-User-Key', fileData.userKey);
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${fileData.originalFilename}"`
    );

    res.send(decryptedData);

  } catch (error) {
    console.error('Decryption error:', error);
    res.status(500).json({ error: 'File decryption failed' });
  }
};