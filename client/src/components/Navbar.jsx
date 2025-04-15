"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FiLock, FiMenu, FiX } from "react-icons/fi"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FiLock className="h-8 w-8 text-indigo-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">SecureVault</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/encrypt"
              className="text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Encrypt
            </Link>
            <Link
              to="/decrypt"
              className="text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Decrypt
            </Link>
            <Link
              to="/get-started"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/encrypt"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Encrypt
          </Link>
          <Link
            to="/decrypt"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Decrypt
          </Link>
          <Link
            to="/get-started"
            className="block w-full text-center mt-4 px-4 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}
