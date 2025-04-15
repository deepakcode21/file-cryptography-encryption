"use client"

import { Link } from "react-router-dom"
import {
  FiShield,
  FiDownloadCloud,
  FiKey,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiLock,
  FiUnlock,
  FiLayers,
  FiCode,
  FiCpu,
} from "react-icons/fi"
import { motion } from "framer-motion"

export default function Landing() {
  const features = [
    {
      icon: <FiShield className="h-10 w-10" />,
      title: "Military-Grade Encryption",
      desc: "Protect your files with AES-256 encryption, the same standard used by governments and security experts worldwide",
    },
    {
      icon: <FiDownloadCloud className="h-10 w-10" />,
      title: "Cross-Format Support",
      desc: "Secure any file type including documents (PDF, DOCX), images (JPG, PNG), audio (MP3, WAV), and videos (MP4, MOV)",
    },
    {
      icon: <FiKey className="h-10 w-10" />,
      title: "Key Management",
      desc: "Full control over your encryption keys with automatic key retrieval during decryption process",
    },
  ]

  const team = [
    {
      name: "Deepak",
      role: "BlockChain & Full Stack Developer",
      bio: "Security enthusiast with 2+ years experience in cryptography and secure system design. Open source contributor and cybersecurity researcher.",
      social: {
        github: "deepakcode21",
        linkedin: "deepakcode21",
        email: "deepakcode21@gmail.com",
      },
    },
  ]

  const workflow = [
    {
      step: 1,
      title: "Upload File",
      desc: "Select any file from your device",
    },
    {
      step: 2,
      title: "Set Encryption Key",
      desc: "Create your secret password (minimum 12 characters)",
    },
    {
      step: 3,
      title: "Download Protected File",
      desc: "Get your encrypted .bin file instantly",
    },
  ]

  const techStack = [
    {
      name: "MERN Stack",
      icon: <FiLayers className="h-12 w-12" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      name: "AES-256",
      icon: <FiLock className="h-12 w-12" />,
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      name: "Tailwind CSS",
      icon: <FiCode className="h-12 w-12" />,
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    },
    {
      name: "Node Crypto",
      icon: <FiCpu className="h-12 w-12" />,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70"></div>
        <div className="absolute right-0 top-0 -mr-40 -mt-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100"></div>
        <div className="absolute left-0 bottom-0 -ml-40 -mb-40 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Secure Your Digital Assets with
              <span className="text-indigo-600"> End-to-End</span> Encryption
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Protect your sensitive files with zero-knowledge encryption. Perfect for confidential documents, personal
              media, and business assets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/encrypt"
                className="border-2 border-violet-500 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg hover:bg-violet-500 hover:text-white flex items-center justify-center gap-2 text-lg font-medium"
              >
                <FiLock className="h-5 w-5" />
                Start Encrypting
              </Link>
              <Link
                to="/decrypt"
                className="border-2 border-violet-500 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg hover:bg-violet-500 hover:text-white flex items-center justify-center gap-2 text-lg font-medium"
              >
                <FiUnlock className="h-5 w-5" />
                Decrypt Files
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why SecureVault?</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-indigo-100"
                whileHover={{ y: -8 }}
              >
                <div className="text-indigo-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Secure your files in three simple steps</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-indigo-200 transform -translate-y-1/2 z-0"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-3 gap-10 relative z-10"
            >
              {workflow.map((item) => (
                <motion.div key={item.step} variants={itemVariants} className="text-center relative">
                  <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg border-4 border-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Developer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Developer</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-1 gap-8 justify-center"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 border border-gray-100"
              >
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-lg text-indigo-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex gap-6 justify-center md:justify-start">
                    <a
                      href={`https://github.com/${member.social.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                      aria-label="GitHub Profile"
                    >
                      <FiGithub className="h-6 w-6" />
                    </a>
                    <a
                      href={`https://linkedin.com/in/${member.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                      aria-label="LinkedIn Profile"
                    >
                      <FiLinkedin className="h-6 w-6" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                      aria-label="Email Contact"
                    >
                      <FiMail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built With</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`${tech.color} p-6 flex items-center justify-center text-white`}>{tech.icon}</div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900">{tech.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Files?</h2>
          <p className="text-lg md:text-xl mb-10 text-indigo-100 max-w-3xl mx-auto">
            Start protecting your sensitive information today with our military-grade encryption technology.
          </p>
          <Link
            to="/encrypt"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 text-lg font-medium"
          >
            <FiLock className="h-5 w-5" />
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-8 pb-8">
      <div className="border-t border-gray-800 pt-4 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} SecureVault. All rights reserved.</p>
          </div>
      </footer>
    </div>
  )
}
