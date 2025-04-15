# 🔐 Encoder-Decoder File (SecureVault)

Welcome to **Encoder-Decoder File**, a lightweight and secure web application that allows users to **encrypt** and **decrypt** any file using a **custom key**. This app ensures your sensitive data remains protected – whether it's for local use or cloud storage. Built using modern web technologies with simplicity and speed in mind.
</br>
</br>
[Live Preview💻](https://file-cryptography-encryption.vercel.app/)

## 🚀 Features

- 🔑 **Custom Key Encryption** – Encrypt your file using your own secret key.
- 🔓 **Optional Decryption Without Key** – You can decrypt files even if you skip the key (if allowed).
- 💡 **Client-side Encryption** – All processes happen in the browser. Your file never leaves your device!
- 🧠 **Simple UI/UX** – Minimalist interface for quick and easy usage.
- 📂 Supports all file types – PDF, DOCX, TXT, MP4, PNG, and more.

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwindcss
- **Backend**: Node.js, Express.js
- **Crypto**: Web Crypto API for secure encryption algorithms

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

## 🔐 Security Note

This app uses **AES-GCM** via the **Web Crypto API** and works entirely client-side – your files never leave your device. 

⚠️ **Important**: Always test encryption thoroughly before using for critical data. Not responsible for data loss.

## 🤝 Contributing

Pull requests are welcome! If you have suggestions for improvements or want to add new features (drag & drop, file history, etc.), feel free to open an issue or PR.

## 📄 License

This project is licensed under the **MIT License**.

Made with ❤️ by [Deepak (ArrowMax)](https://github.com/deepakcode21)
