const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { 
  encryptFile, 
  decryptFile 
} = require('../controllers/fileController');

router.post('/encrypt', upload.single('file'), encryptFile);
router.post('/decrypt', upload.single('file'), decryptFile);

module.exports = router;