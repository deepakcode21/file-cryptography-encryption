import { useState } from 'react';
import axios from 'axios';
import { FiUpload, FiLock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export default function EncryptForm() {
  const [file, setFile] = useState(null);
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !key) return;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userKey', key);
      formData.append('originalFilename', file.name);
      formData.append('mimeType', file.type);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/encrypt`,
        formData,
        {
          responseType: 'blob',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'encrypted.bin');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError('Encryption failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const fileUploadVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center px-4 py-10"
    >
      <motion.div 
        variants={itemVariants}
        className="bg-[#1E222D] text-white w-full max-w-3xl rounded-2xl shadow-xl p-6 sm:p-8"
      >
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-r from-purple-600 to-indigo-500 p-5 sm:p-6 rounded-xl text-white text-lg font-bold"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Encrypt Your File
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-normal mt-1"
          >
            Upload your file and provide a secret key to encrypt it securely
          </motion.p>
        </motion.div>

        <motion.form 
          variants={containerVariants}
          className="mt-6 space-y-6" 
          onSubmit={handleSubmit}
        >
          <motion.div variants={itemVariants}>
            <label className="text-sm font-medium">Upload File</label>
            <motion.div 
              variants={fileUploadVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="mt-2 border-2 border-dashed border-gray-600 rounded-lg h-40 flex items-center justify-center relative cursor-pointer hover:border-purple-400"
            >
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
              <div className="flex flex-col items-center p-4 text-center">
                <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-400">
                  {file ? (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="truncate max-w-xs"
                    >
                      {file.name}
                    </motion.span>
                  ) : (
                    <>
                      {isMobile ? 'Tap to select file' : 'Drag & drop your file or click to browse'}
                    </>
                  )}
                </p>
                {file && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-purple-400 mt-1"
                  >
                    File ready for encryption
                  </motion.p>
                )}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="text-sm font-medium">Encryption Key</label>
            <motion.input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="mt-2 w-full px-4 py-2 rounded-lg bg-[#2A2F3A] border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter secret key"
              required
              whileFocus={{
                scale: 1.01,
                boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.5)"
              }}
            />
          </motion.div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-3 bg-red-100 text-red-700 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-semibold"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="rounded-full h-5 w-5 border-b-2 border-white"
                ></motion.div>
              ) : (
                <>
                  <FiLock className="w-5 h-5" />
                  Encrypt File
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>

        <motion.div 
          variants={itemVariants}
          className="mt-8 p-4 bg-[#151920] rounded-xl text-sm text-gray-300"
        >
          <h3 className="text-white font-semibold mb-2">How to encrypt your file</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <motion.li 
              custom={0}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              Upload your file using the upload area above
            </motion.li>
            <motion.li 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              Enter your custom encryption key
            </motion.li>
            <motion.li 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              Click "Encrypt File" and download will begin automatically
            </motion.li>
            <motion.li 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              Save your encryption key securely — you'll need it to decrypt
            </motion.li>
          </ol>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}