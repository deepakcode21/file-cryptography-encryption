# 🔐 Encoder-Decoder File (SecureVault)

A lightweight and secure web application that allows users to encrypt and decrypt **any file** using a custom key. All operations are done **client-side (in browser)** or securely handled on the **backend**, ensuring your sensitive data remains protected.

[Live Preview💻](https://file-cryptography-encryption.vercel.app/)

## 🖼️ UI Preview

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/1bace2fc-cb2a-490d-87d7-4807ff5a88b8" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/a781abde-3fdc-4f19-a85f-2c421ac57251" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/0cef8a34-566a-4ea1-ac86-290d76647cbb" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/152261d2-cb47-48a9-aedd-4139cc3dd80d" width="100%"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/f7d22f04-be41-42af-a456-ea24fb5d0ade" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/34419f47-2803-4955-a990-a56cd1739e6d" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/c8ca6fbc-55d1-4abb-983c-c085513e2f12" width="100%"/></td>
  </tr>
</table>

## 🚀 Features

- 🔑 **Custom Key Encryption** – Encrypt your file using your own secret key.
- 🔓 **Decryption with or without key** – If encryption was done without a key, decryption won't require one.
- 🧠 **Simple UI/UX** – Built for speed and usability.
- 📂 **Supports All File Types** – PDF, DOCX, MP4, PNG, TXT, etc.
- 🔐 **AES-256-CBC Encryption** – Strong and secure industry-standard encryption.
- 💻 **Backend-Powered Security** – Secure operations handled using Node.js & Crypto module.

## 🛠️ Tech Stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| Frontend  | React.js, Tailwind CSS             |
| Backend   | Node.js, Express.js                |
| Database  | MongoDB (via Mongoose)             |
| Crypto    | AES-256-CBC via Node.js `crypto`   |
| UUID      | `uuid` for file identifiers        |

## 📥 How to Use

### 🔧 Step 1: Clone the Repository
```bash
// Step 1:
git clone https://github.com/deepakcode21/file-cryptography-encryption.git
cd encoder-decoder-file

// Step 2:
cd server
node server.js

// Step 3:
cd client
npm run dev
```

### 🔐 Step 3: Encrypt a File
- Upload your file
- Enter a custom key (or skip if you want non-key encryption)
- Click **Encrypt**
- Your encrypted file will be ready for download

### 🔓 Step 4: Decrypt a File
- Upload an encrypted file
- Enter the same key used during encryption (or skip if it was encrypted without key)
- Click **Decrypt**
- The original file will be available for download

## 🚀 Deployment

Host instantly on:
[Deploy on Vercel](https://file-cryptography-encryption.vercel.app/)

## 🛡️ Security Note

Uses AES-256-CBC with secure key derivation (PBKDF2 + salt + IV)
- Files are encrypted with a combination of:
- Random salt (to derive the key)
-- Random iv (for cipher variation)
-- Only encrypted data + metadata is stored. Your actual file is never exposed.
- Files are never shared publicly or stored insecurely 

⚠️ **Important**: Always test the encryption/decryption process with dummy data before using it for critical files. The author is not responsible for any data loss.

## 🤝 Contributing

Pull requests are welcome! If you have suggestions for improvements or want to add new features (drag & drop, file history, etc.), feel free to open an issue or PR.

## 📄 License

This project is licensed under the **MIT License**.

Made with ❤️ by [Deepak (ArrowMax)](https://github.com/deepakcode21)
