const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  fileId: {
    type: String,
    required: true,
    unique: true
  },
  userKey: {
    type: String,
    required: true
  },
  originalFilename: {
    type: String,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  createdAt: { 
    type: Date, 
    expires: "1h",
    default: Date.now
  }
});

module.exports = mongoose.model('File', fileSchema);