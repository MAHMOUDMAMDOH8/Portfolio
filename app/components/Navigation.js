'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaMapMarkerAlt,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes
} from 'react-icons/fa'

export default function Navigation({ isDarkMode, toggleTheme, activeSection, smoothScroll, isMenuOpen, setIsMenuOpen }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 w-full z-50 nav-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold gradient-text"
            >
              Mahmoud Mamdoh Soliman
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScroll(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id 
                      ? 'text-red-600' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/case-studies"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
              >
                Case Studies
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-sm">
              <FaMapMarkerAlt className="text-red-600" />
              <span>Cairo, Egypt</span>
            </div>
            
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </motion.button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => smoothScroll(item.id)}
              className="block w-full text-left px-6 py-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/case-studies"
            className="block w-full text-left px-6 py-4 text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
          >
            Case Studies
          </a>
        </motion.div>
      )}
    </nav>
  )
} 