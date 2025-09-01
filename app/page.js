'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaPhone,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaChartLine,
  FaCloud,
  FaDownload,
  FaCheckCircle,
  FaCertificate,
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaTerminal,
  FaServer,
  FaCodeBranch,
  FaAward,
  FaTools,
  FaProjectDiagram,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaTrophy,
  FaSun,
  FaMoon,
  FaPython,
  FaDocker,
  FaLinux,
  FaWindows,
  FaGitAlt,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaComment,
  FaPaperPlane,
  FaChartBar,
  FaClock,
  FaExclamationTriangle
} from 'react-icons/fa'

// Floating Numbers Background Component
const FloatingNumbers = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  const techNumbers = [
    // Data Engineering Numbers
    '01', '10', '11', '100', '101', '110', '111', '1000',
    // Tech Stack Numbers
    '3.9', '4.0', '5.0', '8.0', '11', '14', '16', '18', '20',
    // Analytics Numbers
    '99.9%', '24/7', '1M+', '500K', '10TB', '50GB', '∞',
    // Programming Numbers
    'SQL', 'ETL', 'API', 'AWS', 'GCP', 'ML', 'AI', 'BI',
    // Binary aesthetic
    '0101', '1010', '1100', '0011', '1111', '0000',
    // Tech symbols
    '{', '}', '[', ']', '<', '>', '/', '\\', '*', '#',
    // Mathematical symbols
    'Σ', 'π', 'λ', 'Δ', '∑', '∏', '∫', '√', '∝', '≈',
    // Currency and metrics
    '$', '€', '¥', '₿', '%', '±', '×', '÷', '=', '≠'
  ];

  const generateRandomNumber = () => {
    return techNumbers[Math.floor(Math.random() * techNumbers.length)];
  };

  // Only render after component is mounted to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const FloatingNumber = ({ index }) => {
    const [number, setNumber] = useState(() => generateRandomNumber());
    
    // Change number periodically
    useEffect(() => {
      if (!isMounted) return;
      
      const interval = setInterval(() => {
        setNumber(generateRandomNumber());
      }, Math.random() * 8000 + 5000); // Random interval between 5-13 seconds
      
      return () => clearInterval(interval);
    }, [isMounted]);

    return (
      <motion.div
        key={`${number}-${index}`}
        className="absolute text-gray-300/10 dark:text-gray-500/10 font-mono font-bold pointer-events-none select-none"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          fontSize: `${Math.random() * 2 + 0.8}rem`,
        }}
        initial={{ 
          opacity: 0, 
          scale: 0.5,
          y: 50 
        }}
        animate={{ 
          opacity: [0, 0.7, 0.3, 0.8, 0],
          scale: [0.5, 1.2, 0.9, 1.1, 0.4],
          y: [50, -20, -100, -200, -300],
          x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
          rotate: [0, Math.random() * 20 - 10, Math.random() * 30 - 15]
        }}
        transition={{
          duration: Math.random() * 15 + 10, // 10-25 seconds
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 5
        }}
        whileHover={{
          scale: 1.5,
          opacity: 0.9,
          color: "#3b82f6",
          transition: { duration: 0.3 }
        }}
      >
        {number}
      </motion.div>
    );
  };

  // Don't render anything until component is mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Generate floating numbers */}
      {Array.from({ length: 25 }, (_, i) => (
        <FloatingNumber key={i} index={i} />
      ))}
      
      {/* Gradient overlay to blend with background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-gray-900/30 dark:via-transparent dark:to-gray-900/20" />
      
      {/* Additional animated particles */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#10b981' : '#f59e0b',
            opacity: 0.1 + Math.random() * 0.2
          }}
          animate={{
            y: [0, -150, -300, -500],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.6, 0.9, 0],
            scale: [0.3, 1.8, 1.2, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: Math.random() * 25 + 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 15
          }}
        />
      ))}
      
      {/* Matrix rain effect */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`matrix-${i}`}
          className="absolute font-mono text-green-500/20 font-bold pointer-events-none select-none"
          style={{
            left: `${10 + i * 12}%`,
            top: '-10%',
            fontSize: '0.75rem'
          }}
          animate={{
            y: ['-10vh', '110vh'],
            opacity: [0, 0.8, 0.8, 0]
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        >
          {Array.from({ length: 20 }, (_, j) => (
            <div key={j} className="mb-1">
              {j % 2 === 0 ? '1' : '0'}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// Professional Loading Component
const LoadingScreen = ({ isLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${isLoading ? 'pointer-events-auto' : 'pointer-events-none'}`}
      style={{ display: isLoading ? 'flex' : 'none' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Main Logo/Icon Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative w-24 h-24 mx-auto">
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-red-500/30 border-t-red-600 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border-2 border-blue-500/30 border-r-blue-600 rounded-full"
            />
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center text-white shadow-lg"
              >
                <FaDatabase size={16} />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">
              Mahmoud Mamdoh
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Data Engineer
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 w-64 mx-auto"
        >
          <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-red-600 to-red-700 rounded-full"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-sm text-gray-500 dark:text-gray-400 mt-2"
          >
            Loading portfolio...
          </motion.p>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-1/4 left-1/4"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 180, 360] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-600"
            >
              <FaCode size={16} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute top-1/3 right-1/4"
          >
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -180, -360] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-600"
            >
              <FaChartLine size={16} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="absolute bottom-1/3 left-1/3"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 90, 180] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-600"
            >
              <FaCloud size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Certificate Modal Component
const CertificateModal = ({ isOpen, onClose, certificate }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  if (!isOpen || !certificate) return null;

  const handleImageError = () => {
    console.error('Failed to load certificate image:', certificate.imagePath);
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    console.log('Certificate image loaded successfully:', certificate.imagePath);
    setImageLoading(false);
    setImageError(false);
  };

  // URL encode the image path to handle spaces and special characters
  const encodedImagePath = certificate.imagePath.split('/').map(segment => 
    segment === '' ? segment : encodeURIComponent(segment)
  ).join('/');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{certificate.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{certificate.issuer} • {certificate.year}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <FaTimes className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Certificate Image */}
        <div className="relative bg-gray-50 dark:bg-gray-900 flex items-center justify-center min-h-[400px] max-h-[70vh] overflow-auto">
          {imageLoading && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
          )}
          
          {imageError ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <FaExclamationTriangle className="w-16 h-16 text-gray-400 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Image not available</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Unable to load certificate image
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Original path: {certificate.imagePath}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Encoded path: {encodedImagePath}
              </p>
            </div>
          ) : (
            <>
              {/* Try Next.js Image component first */}
              <Image
                src={encodedImagePath}
                alt={`${certificate.title} Certificate`}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
                onError={handleImageError}
                onLoad={handleImageLoad}
                priority
                unoptimized
              />
              
              {/* Fallback: Regular img tag if Next.js Image fails */}
              {imageError && (
                <img
                  src={encodedImagePath}
                  alt={`${certificate.title} Certificate`}
                  className="max-w-full max-h-full object-contain"
                  onError={() => {
                    console.error('Both Image and img failed for:', encodedImagePath);
                    setImageError(true);
                    setImageLoading(false);
                  }}
                  onLoad={() => {
                    console.log('Fallback img loaded:', encodedImagePath);
                    setImageError(false);
                    setImageLoading(false);
                  }}
                />
              )}
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {certificate.skills.slice(0, 4).map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs rounded-full font-medium">
                  {skill}
                </span>
              ))}
              {certificate.skills.length > 4 && (
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
                  +{certificate.skills.length - 4} more
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced card wrapper with floating elements
const EnhancedCard = ({ children, className = "", delay = 0, floatingElements = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={`relative group enhanced-card ${className}`}
  >
    {/* Floating background elements */}
    {floatingElements && (
      <>
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full floating-element"
          animate={{ 
            y: [0, -8, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: delay * 0.5
          }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full floating-element"
          animate={{ 
            y: [0, 8, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: delay * 0.7
          }}
        />
      </>
    )}
    
    {/* Enhanced glow effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/0 to-blue-600/0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10" />
    
    {children}
  </motion.div>
 );

// ProjectCard component to handle individual project display with proper state management
const ProjectCard = ({ project, index, getProjectCategory, getCategoryColor, getProjectImage }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  const category = getProjectCategory(project.title, project.description);
  const { color, borderColor } = getCategoryColor(category);
  const projectImage = getProjectImage(project.title);

  // Helper function to get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Data Engineer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        );
      case 'Analytics Engineer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
            <path d="M3 3v18h18"></path>
            <path d="M18 17V9"></path>
            <path d="M13 17V5"></path>
            <path d="M8 17v-3"></path>
          </svg>
        );
      case 'BI Engineer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
            <path d="M3 12A9 3 0 0 0 21 12"></path>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        );
    }
  };

  return (
    <EnhancedCard 
      delay={index * 0.1}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
    >
      {/* Header with Gradient Background */}
      <div className={`bg-gradient-to-r ${color} p-6 text-white`}>
        <div className="flex items-center justify-between mb-4">
          {getCategoryIcon(category)}
          <div className="flex items-center space-x-2">
            {project.featured ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span className="text-sm font-medium">Featured</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-sm font-medium">Active</span>
              </>
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm opacity-90">{category}</p>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span className="text-sm">{project.date}</span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">ID: PRJ-{index + 1}-2024</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 6).map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                {tech}
              </span>
            ))}
            {project.tech.length > 6 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                +{project.tech.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>View Code</span>
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </EnhancedCard>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false)

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      // Default to dark mode
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Update document class and save preference
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'dashboards', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Show back to top button when scrolled down
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('mobile-nav-open')
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('mobile-nav-open')
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('mobile-nav-open')
    }
  }, [isMenuOpen])

  const smoothScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const downloadResume = () => {
    window.open('https://drive.google.com/drive/folders/1r_W7J5KxBZpHfO5mf29G9qRon9PtXeZA', '_blank');
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'dashboards', label: 'Dashboards' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  const skills = [
    {
      category: 'Programming Languages',
      icon: 'code',
      items: [
        { name: 'Python', level: 95, color: 'from-green-400 to-green-600' },
        { name: 'SQL', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Linux', level: 80, color: 'from-gray-400 to-gray-600' },
        { name: 'Bash', level: 60, color: 'from-yellow-400 to-yellow-600' }
      ]
    },
    {
      category: 'Big Data & Processing',
      icon: 'database',
      items: [
        { name: 'Apache Spark', level: 60, color: 'from-orange-400 to-orange-600' },
        { name: 'Hadoop', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Airflow', level: 90, color: 'from-teal-400 to-teal-600' },
        { name: 'Hive', level: 75, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Kafka', level: 50, color: 'from-gray-400 to-gray-600' }
      ]
    },
    {
    category: 'ETL Tools',
      icon: 'code',
      items: [
        { name: 'dbt', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Airflow', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'MAGE', level: 70, color: 'from-red-400 to-red-600' },
        { name: 'SSIS', level: 80, color: 'from-gray-400 to-gray-600' },
        { name: 'SSAS', level: 60, color: 'from-yellow-400 to-yellow-600' }
      ]
    },
    {
      category: 'Real-Time Technologies',
      icon: 'zap',
      items: [
        { name: 'Spark Streaming', level: 40, color: 'from-orange-400 to-orange-600' },
        { name: 'Kafka Streams', level: 30, color: 'from-purple-400 to-purple-600' }
      ]
    },
    {
      category: 'Analytics & Visualization',
      icon: 'chart',
      items: [
        { name: 'Jupyter', level: 92, color: 'from-orange-400 to-orange-600' },
        { name: 'Power BI', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'tableau', level: 60, color: 'from-blue-400 to-blue-600' }
      ]
    },
    {
      category: 'Cloud & Containerization',
      icon: 'cloud',
      items: [
        { name: 'Docker', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'Azure', level: 40, color: 'from-blue-400 to-blue-600' }
      ]
    },
    {
      category: 'Analytics engineering ',
      icon: 'brain',
      items: [
        { name: 'dbt ', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Snowflake', level: 85, color: 'from-orange-400 to-orange-600' }
      ]
    },
    {
      category: 'Databases',
      icon: 'server',
      items: [
        { name: 'PostgreSQL', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'MySQL', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'sql server', level: 70, color: 'from-green-400 to-green-600' },
        { name: 'MongoDB', level: 40, color: 'from-yellow-400 to-yellow-600' }

      ]
    }
  ]

  // Helper function to render skill icons
  const renderSkillIcon = (iconType) => {
    switch (iconType) {
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case 'database':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
            <path d="M3 12A9 3 0 0 0 21 12"></path>
          </svg>
        );
      case 'zap':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        );
      case 'chart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M3 3v18h18"></path>
            <path d="M18 17V9"></path>
            <path d="M13 17V5"></path>
            <path d="M8 17v-3"></path>
          </svg>
        );
      case 'cloud':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          </svg>
        );
      case 'brain':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
          </svg>
        );
      case 'server':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
            <line x1="6" x2="6.01" y1="6" y2="6"></line>
            <line x1="6" x2="6.01" y1="18" y2="18"></line>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        );
    }
  }

  const projects = [
    {
      title: 'End-to-End Big Data Pipeline for E-commerce Event Logs',
      description: 'Comprehensive big data pipeline for processing, storing, and analyzing e-commerce event logs. Features Kafka for high-throughput streaming ingestion, HDFS for robust raw storage, Spark processing with PostgreSQL for analytics, Apache Airflow orchestration, dbt models for dimensional schema, Streamlit for real-time monitoring, and Power BI for comprehensive business insights.',
      tech: ['Kafka', 'HDFS', 'Spark', 'PostgreSQL', 'Apache Airflow', 'dbt', 'Streamlit', 'Power BI', 'Docker', 'Python'],
      tools: ['Apache Kafka', 'Apache Spark', 'Apache Airflow', 'dbt (Data Build Tool)', 'PostgreSQL', 'HDFS', 'Streamlit', 'Power BI', 'Docker', 'Python', 'SQL', 'Jupyter Notebooks', 'Git', 'GitHub Actions'],
      concepts: ['Real-time Data Streaming', 'Event-Driven Architecture', 'Data Lake Design', 'Medallion Architecture', 'Dimensional Modeling', 'Data Quality Management', 'CI/CD for Data', 'Monitoring & Alerting', 'Business Intelligence', 'Data Visualization'],
      github: 'https://github.com/MAHMOUDMAMDOH8/end-to-end-log-processing',
      demo: 'https://mahmoud-ecommerce-dashboard.streamlit.app',
      featured: true,
      date: 'Aug 2025'
    },
    {
      title: 'Telecom Streaming Pipeline',
      description: 'Near real-time streaming data pipeline for telecom events (calls, SMS). Kafka and HDFS for data ingestion, Spark processing with Snowflake storage, Medallion Architecture implementation, Apache Airflow orchestration, dbt models with SCD Type 2 logic, Power BI dashboards for user activity, cell site performance, and regional trends.',
      tech: ['Kafka', 'HDFS', 'Spark', 'Snowflake', 'dbt', 'Docker', 'Apache Airflow', 'Python', 'Power BI'],
      tools: ['Apache Kafka', 'Apache Spark', 'Apache Airflow', 'Snowflake', 'dbt', 'Docker', 'Python', 'Power BI', 'SQL', 'Git', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana'],
      concepts: ['Streaming Data Architecture', 'Medallion Architecture', 'SCD Type 2 Implementation', 'Real-time Analytics', 'Data Pipeline Orchestration', 'Cloud Data Warehouse', 'Data Modeling', 'Business Intelligence', 'Operational Monitoring'],
      github: 'https://github.com/MAHMOUDMAMDOH8/telecom-streaming-pipeline',
      demo: '',
      featured: false,
      date: 'May 2025'
    },
    {
      title: 'ELT-Engine',
      description: 'Scalable ELT pipeline leveraging Apache Airflow for orchestration and dbt for data transformations in Snowflake. Implements Medallion Architecture (Bronze, Silver, Gold layers) to optimize data processing workflows for advanced analytics, featuring interactive Power BI dashboards for comprehensive business insights visualization.',
      tech: ['SQL', 'dbt', 'Snowflake', 'Docker', 'Apache Airflow', 'Python', 'Power BI'],
      tools: ['Apache Airflow', 'dbt', 'Snowflake', 'Docker', 'Python', 'Power BI', 'SQL', 'Git', 'Terraform', 'Azure DevOps', 'Data Vault', 'Star Schema'],
      concepts: ['ELT Architecture', 'Medallion Architecture', 'Data Vault Modeling', 'Cloud Data Engineering', 'Data Pipeline Design', 'Business Intelligence', 'Data Governance', 'Performance Optimization', 'Scalable Architecture'],
      github: 'https://github.com/MAHMOUDMAMDOH8/elt-engine',
      demo: '',
      featured: false,
      date: 'Mar 2025'
    },
    {
      title: 'E2E-ELT-Data-Pipeline',
      description: 'End-to-end data-aware ELT pipeline engineered with Apache Airflow orchestration and Python automation. Features dbt transformations for data modeling, PostgreSQL as the primary data warehouse, and interactive Power BI dashboards delivering actionable business intelligence and data-driven insights.',
      tech: ['SQL', 'Python', 'dbt', 'Apache Airflow', 'PostgreSQL', 'Power BI'],
      github: 'https://github.com/MAHMOUDMAMDOH8/e2e-elt-data-pipeline',
      demo: '',
      featured: false,
      date: '2025'
    },
    {
      title: 'OLAP Dimensional Modeling for Advanced Analytics',
      description: 'Comprehensive OLAP data warehouse solution implementing dimensional modeling techniques for advanced analytics. Features Docker containerization for scalable deployment, Apache Airflow for ETL orchestration, and customized visualization components tracking key business performance metrics and operational KPIs.',
      tech: ['Python', 'SQL', 'Docker', 'Apache Airflow', 'PostgreSQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/OLAP_Dimensional_Modeling_for_Advanced_Analytics',
      demo: '',
      featured: false,
      date: '2025'
    },
    {
      title: 'DBT-Orchestrator',
      description: 'Data transformation orchestration platform leveraging dbt for SQL-based transformations and Apache Airflow for workflow management. Implements automated testing, documentation generation, and lineage tracking for maintainable data transformation pipelines.',
      tech: ['Python', 'dbt', 'Apache Airflow', 'SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/DBT-Orchestrator',
      demo: '',
      featured: false,
      date: 'Mar 2025'
    },
    {
      title: 'OLAPify',
      description: 'OLAP data warehouse solution implementing dimensional modeling for advanced analytics. Features star schema design, aggregated data marts, automated cube processing, and optimized query performance for business intelligence and reporting applications.',
      tech: ['Python', 'SQL', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/MAHMOUDMAMDOH8/OLAPify',
      demo: '',
      featured: false,
      date: 'Dec 2024'
    },
    {
      title: 'Northwind Project (ETL & Building DWH & Data Analysis)',
      description: 'Enterprise-grade data warehouse solution extracting data from operational systems using SSIS ETL workflows. Implements SQL Server Analysis Services (SSAS) cubes for multidimensional data analysis, star schema design with SCD Type 2 logic, and interactive Power BI dashboards for comprehensive sales, customer, and product analytics.',
      tech: ['SSIS', 'SSAS', 'SQL Server', 'Power BI'],
      github: 'https://github.com/MAHMOUDMAMDOH8/northwind-project',
      demo: '',
      featured: false,
      date: '2023'
    },
    {
      title: 'E2E-ELT-pipeline',
      description: 'End-to-end ELT pipeline with data-aware orchestration using Apache Airflow. Implements PostgreSQL data warehouse, automated data quality validation, error handling, and monitoring for reliable data integration and transformation workflows.',
      tech: ['Python', 'SQL', 'Apache Airflow', 'PostgreSQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/E2E-ELT-pipeline',
      demo: '',
      featured: false,
      date: 'Oct 2024'
    },
    {
      title: 'E2E E-commerce Data Pipeline',
      description: 'Complete e-commerce data pipeline processing customer transactions, inventory, and sales data. Implements automated ETL workflows, dimensional modeling for analytics, real-time inventory tracking, and business intelligence dashboards for retail performance optimization.',
      tech: ['Python', 'Apache Airflow', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/MAHMOUDMAMDOH8/E2E-e-commerce-data-pipeline',
      demo: '',
      featured: false,
      date: 'Jun 2024'
    },
    {
      title: 'E-commerce Data Analysis Pipeline',
      description: 'Data analysis pipeline for e-commerce business intelligence focusing on customer behavior, sales trends, and market insights. Features statistical analysis, data visualization, customer segmentation, and predictive analytics for data-driven business decision making.',
      tech: ['Python', 'Pandas', 'SQL', 'Jupyter Notebook'],
      github: 'https://github.com/MAHMOUDMAMDOH8/ecommerce-data-analysis-pipeline',
      demo: '',
      featured: false,
      date: 'Apr 2024'
    },
    {
      title: 'E-commerce DWH',
      description: 'Enterprise data warehouse solution for e-commerce analytics using Microsoft SQL Server stack. Features SSIS ETL processes, dimensional modeling, automated data integration from multiple sources, and Power BI reporting for comprehensive business intelligence.',
      tech: ['T-SQL', 'SQL Server', 'SSIS', 'Power BI'],
      github: 'https://github.com/MAHMOUDMAMDOH8/ecommerce-dwh',
      demo: '',
      featured: false,
      date: 'Apr 2024'
    },
    {
      title: 'TLC Trip Pipeline Data Engineering',
      description: 'NYC Taxi and Limousine Commission trip data engineering project analyzing transportation patterns and operational metrics. Implements data cleaning, transformation, statistical analysis, and visualization for urban transportation insights and trend analysis.',
      tech: ['Jupyter Notebook', 'Python', 'Pandas', 'SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/tlc-trip-pipeline-data-engineering',
      demo: '',
      featured: false,
      date: 'Apr 2024'
    },
    {
      title: 'TLC Trip Data Pipeline Project',
      description: 'Automated data pipeline for TLC trip data processing with Apache Airflow orchestration. Features containerized deployment, PostgreSQL data warehouse, automated data quality checks, and scheduled processing for continuous transportation analytics.',
      tech: ['Python', 'Apache Airflow', 'Docker', 'PostgreSQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/tlc-trip-data-pipeline-project',
      demo: '',
      featured: false,
      date: 'Apr 2024'
    },
    {
      title: 'Uber Data Pipeline',
      description: 'Real-time ride-sharing data pipeline processing trip information, driver analytics, and operational metrics. Implements streaming data architecture with Kafka ingestion, Spark processing, GCP cloud storage, and real-time dashboards for operational intelligence.',
      tech: ['Python', 'Apache Kafka', 'Spark', 'Google Cloud Platform'],
      github: 'https://github.com/MAHMOUDMAMDOH8/uber-data-pipeline',
      demo: '',
      featured: false,
      date: '2024'
    },
    {
      title: 'Bike Store Analytics',
      description: 'Retail analytics solution for bike store operations analyzing sales performance, inventory management, and customer insights. Features comprehensive data modeling, automated reporting, and business intelligence dashboards for retail optimization.',
      tech: ['SQL Server', 'Power BI', 'T-SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/bike-store',
      demo: '',
      featured: false,
      date: 'Nov 2023'
    },
    {
      title: 'ETL Telecom',
      description: 'Telecommunications data integration solution implementing ETL processes for customer data, call records, and network analytics. Features automated data extraction, transformation workflows, and data quality validation for telecom business intelligence.',
      tech: ['T-SQL', 'SSIS', 'SQL Server'],
      github: 'https://github.com/MAHMOUDMAMDOH8/etl-telecom',
      demo: '',
      featured: false,
      date: 'Sep 2023'
    },
    {
      title: 'AdventureWorks Analysis',
      description: 'Comprehensive business analysis of AdventureWorks sample database focusing on sales performance, product analytics, and customer segmentation. Features advanced SQL queries, data visualization, and business intelligence reporting for enterprise insights.',
      tech: ['SQL Server', 'Power BI', 'T-SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/adventureworks-analysis',
      demo: '',
      featured: false,
      date: 'Aug 2023'
    },
    {
      title: 'Northwind Traders Analysis',
      description: 'Business intelligence analysis of Northwind Traders database examining sales trends, customer behavior, and operational efficiency. Features interactive dashboards, KPI tracking, and comprehensive reporting for data-driven business insights.',
      tech: ['Power BI', 'SQL', 'Excel'],
      github: 'https://github.com/MAHMOUDMAMDOH8/northwind-traders-analysis',
      demo: '',
      featured: false,
      date: 'Aug 2023'
    },
    {
      title: 'DataCamp Project',
      description: 'Data science and analysis projects from DataCamp certification coursework. Features statistical analysis, data manipulation, visualization techniques, and machine learning fundamentals for comprehensive data science skill development.',
      tech: ['Jupyter Notebook', 'Python', 'Pandas'],
      github: 'https://github.com/MAHMOUDMAMDOH8/datacamp-project',
      demo: '',
      featured: false,
      date: 'Jul 2023'
    },
    {
      title: 'Adidas Market Analysis',
      description: 'Market analysis of Adidas sales data examining regional performance, product trends, and market penetration. Features comprehensive data visualization, trend analysis, and business intelligence reporting for strategic market insights.',
      tech: ['Power BI', 'Excel', 'SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/adidas-market-analysis',
      demo: '',
      featured: false,
      date: 'Jul 2023'
    },
    {
      title: 'HR Analysis',
      description: 'Human resources analytics solution analyzing employee performance, retention patterns, and organizational metrics. Features workforce analytics, predictive modeling for turnover, and comprehensive HR dashboards for strategic workforce management.',
      tech: ['Power BI', 'Excel', 'SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/hr-analysis',
      demo: '',
      featured: false,
      date: 'Jul 2023'
    }
  ]

  const experiences = [
    {
      title: 'Business Intelligence Analyst',
      company: 'Addiction Treatment Center',
      period: 'Jul 2024 - Oct 2024',
      duration: '4 months',
      type: 'Internship',
      location: 'Cairo, Egypt',
      description: 'Gained hands-on experience in Power BI dashboard development and data visualization for healthcare operations monitoring.',
      skills: ['Dashboard Design', 'Data Visualization', 'Business Analysis', 'KPI Development'],
      technologies: ['Power BI', 'SQL Server', 'DAX', 'M Query', 'Excel']
    },
    {
      title: 'Data Analysis Professional Internship',
      company: 'ASDC (All SERVICE DATA CONTROL)',
      period: 'Nov 2023 - Jan 2024',
      duration: '3 months',
      type: 'Internship',
      location: 'October, Cairo',
      description: 'Learned data analysis fundamentals and business intelligence solutions using Power BI for visualizing business metrics.',
      skills: ['ETL Development', 'Data Modeling', 'Statistical Analysis', 'Requirements Gathering'],
      technologies: ['Power BI', 'SQL Server', 'SSIS', 'Excel', 'Python', 'DAX']
    }
  ]

  const certifications = [
    {
      title: 'Data Engineering Zoomcamp',
      issuer: 'DataTalks Club',
      year: 'April 2025',
      summary: 'Comprehensive program covering modern data engineering technologies including data ingestion, orchestration with Airflow, transformation with dbt, Docker containerization, and cloud deployment on GCP.',
      skills: ['Apache Airflow', 'dbt', 'Docker', 'GCP', 'Medallion Architecture', 'ELT Pipelines'],
      icon: FaDatabase,
      color: 'from-blue-600 to-blue-700',
      imagePath: '/Certifications/dezoomcamp.png'
    },
    {
      title: 'Business Intelligence Train ITI',
      issuer: 'Information Technology Institute (ITI)',
      year: 'July 2023',
      summary: 'Intensive training program focused on BI tools and data visualization techniques for business intelligence and analytics.',
      skills: ['Power BI', 'Data Modeling', 'ETL Pipelines', 'Data Visualization', 'Business Analytics'],
      icon: FaChartLine,
      color: 'from-green-600 to-green-700',
      imagePath: '/Certifications/iti.jpeg'
    },
    {
      title: 'Data Engineering Foundations',
      issuer: 'IBM',
      year: 'November 2023',
      summary: 'Foundational course covering core data engineering concepts, big data technologies, and data pipeline development.',
      skills: ['Big Data', 'Hadoop', 'Spark', 'Data Pipelines', 'Data Architecture'],
      icon: FaCloud,
      color: 'from-purple-600 to-purple-700',
      imagePath: '/Certifications/Data Engineering ibm.png'
    },
    {
      title: 'Data Engineer Using Python',
      issuer: 'DataCamp',
      year: 'October 2023',
      summary: 'Comprehensive data engineering certification covering Python, SQL, and data processing techniques for building scalable data solutions.',
      skills: ['Python', 'SQL', 'Data Processing', 'ETL', 'Data Analysis'],
      icon: FaAward,
      color: 'from-orange-600 to-orange-700',
      imagePath: '/Certifications/data enginer using python data camp.png'
    },
    {
      title: 'Google Business Intelligence',
      issuer: 'Google',
      year: 'May 2023',
      summary: 'Google-certified program focusing on business intelligence tools, data analysis, and creating actionable insights for business decision-making.',
      skills: ['Google Analytics', 'Data Analysis', 'Business Intelligence', 'Reporting', 'Data Visualization'],
      icon: FaChartLine,
      color: 'from-red-600 to-red-700',
      imagePath: '/Certifications/Google Business Intelligence.jpeg'
    },
    {
      title: 'Associate Data Analyst in SQL',
      issuer: 'DataCamp',
      year: '2023',
      summary: 'Advanced SQL certification demonstrating expertise in data analysis, complex queries, and database management.',
      skills: ['Advanced SQL', 'Data Analysis', 'Database Management', 'Query Optimization'],
      icon: FaDatabase,
      color: 'from-blue-600 to-blue-700',
      imagePath: '/Certifications/Associate Data Analyst in SQL datacamp.png'
    },
    {
      title: 'Power BI Fundamentals',
      issuer: 'DataCamp',
      year: '2023',
      summary: 'Comprehensive Power BI training covering dashboard creation, data modeling, and business intelligence visualization.',
      skills: ['Power BI', 'DAX', 'Data Modeling', 'Dashboard Design', 'Business Intelligence'],
      icon: FaChartBar,
      color: 'from-yellow-600 to-yellow-700',
      imagePath: '/Certifications/Power BI Fundamentals datacamp.png'
    },
    {
      title: 'SQL Fundamentals',
      issuer: 'DataCamp',
      year: '2023',
      summary: 'Foundation SQL course covering database querying, data manipulation, and essential SQL concepts.',
      skills: ['SQL Basics', 'Database Queries', 'Data Manipulation', 'Joins', 'Aggregations'],
      icon: FaDatabase,
      color: 'from-indigo-600 to-indigo-700',
      imagePath: '/Certifications/SQL Fundamentals datacamp.png'
    },
    {
      title: 'SQL for Business Analysts',
      issuer: 'DataCamp',
      year: '2023',
      summary: 'Specialized SQL training focused on business analysis, reporting, and data-driven decision making.',
      skills: ['Business SQL', 'Reporting', 'Data Analysis', 'Business Intelligence', 'KPI Analysis'],
      icon: FaChartLine,
      color: 'from-teal-600 to-teal-700',
      imagePath: '/Certifications/SQL for Business Analysts datacamp.png'
    },
    {
      title: 'Excel Fundamentals',
      issuer: 'DataCamp',
      year: '2023',
      summary: 'Comprehensive Excel training covering data analysis, formulas, pivot tables, and business reporting.',
      skills: ['Excel Advanced', 'Pivot Tables', 'Data Analysis', 'Formulas', 'Business Reporting'],
      icon: FaChartBar,
      color: 'from-green-600 to-green-700',
      imagePath: '/Certifications/Excel Fundamentals datacamp.png'
    },
    {
      title: 'Data Analysis Challenger',
      issuer: 'Udacity',
      year: '2023',
      summary: 'Intensive data analysis program covering statistical analysis, data visualization, and insights generation.',
      skills: ['Statistical Analysis', 'Data Visualization', 'Python', 'Pandas', 'Data Insights'],
      icon: FaChartLine,
      color: 'from-purple-600 to-purple-700',
      imagePath: '/Certifications/data analysis challenger udacity.png'
    }
  ]

  // Helper function to determine project category
  const getProjectCategory = (title, description) => {
    const titleLower = title.toLowerCase();
    
    // Manual mapping for specific projects
    if (titleLower.includes('dbt-orchestrator') || titleLower.includes('elt-engine') ||
        titleLower.includes('olap dimensional modeling for advanced analytics') || titleLower.includes('olapify')) {
      return 'Analytics Engineer';
    }
    
    if (titleLower.includes('e-commerce dwh') || titleLower.includes('bike store analytics') ||
        titleLower.includes('adventureworks analysis') || titleLower.includes('hr analysis') ||
        titleLower.includes('northwind project (etl & building dwh & data analysis)') || 
        titleLower.includes('northwind traders analysis') || titleLower.includes('adidas market analysis')) {
      return 'BI Engineer';
    }
    
    // Default to Data Engineer for all other projects
    return 'Data Engineer';
  };

  // Helper function to get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Data Engineer':
        return { color: 'from-red-600 to-red-700', borderColor: 'border-red-600' };
      case 'Analytics Engineer':
        return { color: 'from-blue-600 to-blue-700', borderColor: 'border-blue-600' };
      case 'BI Engineer':
        return { color: 'from-green-600 to-green-700', borderColor: 'border-green-600' };
      default:
        return { color: 'from-red-600 to-red-700', borderColor: 'border-red-600' };
    }
  };

  // Enhanced animations and effects
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const slideInFromLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInFromRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  // Enhanced card animations
  const cardHoverAnimation = {
    whileHover: { 
      y: -8, 
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    whileTap: { scale: 0.98 }
  };

  const cardStaggerAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  };

  // Enhanced background patterns
  const BackgroundPattern = ({ className = "", children }) => (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-10">
        <motion.div 
          className="absolute top-10 left-10 w-24 h-24 border border-red-300/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-20 right-20 w-16 h-16 border border-blue-300/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-20 h-20 border border-green-300/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-12 h-12 border border-purple-300/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {children}
    </div>
  );



  // Helper function to get project image
  const getProjectImage = (title) => {
    const titleLower = title.toLowerCase();
    
    // Map project titles to image files with exact matching
    const imageMap = {
      'end-to-end big data pipeline for e-commerce event logs': '/project_image/End-to-End Big Data Pipeline for E-commerce Event Logs.jpeg',
      'telecom streaming pipeline': '/project_image/Telecom Streaming Pipeline.png',
      'elt-engine': '/project_image/ELT-Engine.png',
      'e2e-elt-data-pipeline': '/project_image/E2E-ELT-Data-Pipeline.png',
      'dbt-orchestrator': '/project_image/DBT-Orchestrator.png',
      'olap dimensional modeling for advanced analytics': '/project_image/olapify.png',
      'olapify': '/project_image/olapify.png',
      'e2e-elt-pipeline': '/project_image/E2E-ELT-pipeline.png',
      'tlc trip pipeline data engineering': '/project_image/TLC Trip Pipeline Data Engineering.jpeg',
      'tlc trip data pipeline project': '/project_image/TLC Trip Data Pipeline Project.jpeg'
    };
    
    // Try exact match first
    if (imageMap[titleLower]) {
      return imageMap[titleLower];
    }
    
    // Try partial matching as fallback
    for (const [key, value] of Object.entries(imageMap)) {
      if (titleLower.includes(key) || key.includes(titleLower.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase())) {
        return value;
      }
    }
    
    // Return null if no image found
    return null;
  };

  // Helper function to get certification image
  const getCertificationImage = (title, issuer) => {
    const titleLower = title.toLowerCase();
    const issuerLower = issuer.toLowerCase();
    
    let imagePath = null;
    
    // Map certifications to image files
    if (titleLower.includes('data engineering zoomcamp') || issuerLower.includes('datatalks')) {
      imagePath = '/project_image/datatalksclup.jpeg';
    } else if (titleLower.includes('business intelligence train') || issuerLower.includes('iti')) {
      imagePath = '/project_image/iti.png';
    } else if (titleLower.includes('data engineer') && issuerLower.includes('datacamp')) {
      imagePath = '/project_image/datacamp.png';
    } else if (titleLower.includes('google') || issuerLower.includes('google')) {
      imagePath = '/project_image/google.png';
    } else if (issuerLower.includes('ibm')) {
      imagePath = '/project_image/ipm.jpeg';
    }
    
    // Debug logging
    console.log(`Certification: ${title} | Issuer: ${issuer} | Image: ${imagePath}`);
    
    return imagePath;
  };

  // Certificate modal handlers
  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate)
    setIsCertificateModalOpen(true)
  }

  const closeCertificateModal = () => {
    setIsCertificateModalOpen(false)
    setSelectedCertificate(null)
  }

  return (
    <div className="min-h-screen transition-colors duration-300 relative">
      {/* Floating Numbers Background */}
      <FloatingNumbers />
      
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Certificate Modal */}
      <CertificateModal 
        isOpen={isCertificateModalOpen}
        onClose={closeCertificateModal}
        certificate={selectedCertificate}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-glass">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Particles */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-4 left-1/4 w-2 h-2 bg-red-400/30 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-blue-400/30 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute top-6 left-2/3 w-1 h-1 bg-green-400/30 rounded-full"
          />
          
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <Link
                  href="/case-studies"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
                >
                  Case Studies
                </Link>
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
                className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white z-50 relative"
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
            className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 shadow-lg absolute top-full left-0 right-0 z-40"
          >
            <div className="px-4 py-2 max-h-screen overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Navigation</span>
              <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                  <FaTimes size={16} />
              </button>
              </div>
              
              <div className="space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      smoothScroll(item.id)
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-200 rounded-lg active:bg-gray-200 dark:active:bg-gray-600"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      )}
                    </div>
                  </motion.button>
                ))}
                <Link
                  href="/case-studies"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-red-600 transition-all duration-200 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/50 active:bg-gray-200 dark:active:bg-gray-600"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Case Studies</span>
                    <FaExternalLinkAlt size={12} />
                  </div>
                </Link>
              </div>
              
              {/* Mobile Contact Info */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <FaMapMarkerAlt className="text-red-600" />
                  <span>Cairo, Egypt</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                  <FaEnvelope className="text-red-600" />
                  <a href="mailto:mahmoud.mamdoh0812@gmail.com" className="hover:text-red-600 transition-colors">
                    mahmoud.mamdoh0812@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content Container */}
      <main className="content-container relative z-10">
        {/* Back to Top Button - Mobile Optimized */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: showBackToTop ? 1 : 0, 
            scale: showBackToTop ? 1 : 0 
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-30 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 md:hidden"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>

        {/* Hero Section - Big Text Left, Photo Right, Timeline Bottom */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative">
          {/* Clean Background */}
          <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center">
            
            {/* Top Section - Text Left, Photo Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              
              {/* Left Column - Big Text */}
              <div className="text-left">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Greeting */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-3xl md:text-4xl mb-8 text-gray-600 dark:text-gray-400 font-medium"
                  >
                    <Typewriter
                      words={['Hallo!']}
                      loop={false}
                      cursor
                      cursorStyle='|'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </motion.h3>

                  {/* Main Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 text-gray-900 dark:text-white leading-tight"
                  >
                    I'm <span className="text-red-600 dark:text-red-500">Mahmoud.</span>
                  </motion.h1>
                      
                                    {/* Subtitle */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-red-600 dark:text-red-500">
                          <Typewriter
                        words={['I\'m a Data Engineer', 'I\'m a Big Data Engineer', 'I\'m a BI Engineer', 'I\'m a Pipeline Architect', 'I\'m a ETL Developer']}
                        loop={true}
                            cursor
                            cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                          />
                        </span>
                  </motion.h2>
                  </motion.div>
              </div>

              {/* Right Column - Profile Photo in Frame */}
              <div className="flex justify-center lg:justify-end">
                  <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                  className="relative group"
                >
                  <div className="w-96 h-96 relative">
                    {/* Frame with gradient effect */}
                    <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-red-500 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                      <Image
                        src="/images/profile-photo.jpg"
                        alt="Mahmoud Mamdoh - Data Engineer"
                        width={384}
                        height={384}
                        className="w-full h-full object-cover"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                    </div>
                  </motion.div>
              </div>
            </div>

            {/* Bottom Section - Timeline and Social Icons */}
            <div className="text-center">
              
              {/* Social Links - Bigger */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex justify-center space-x-8 mb-12"
                  >
                      <motion.a 
                  href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/"
                        target="_blank" 
                        rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-16 h-16 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-lg"
                      >
                  <FaLinkedin size={28} />
                      </motion.a>
          
                      <motion.a 
                  href="https://github.com/MAHMOUDMAMDOH8"
                        target="_blank" 
                        rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-16 h-16 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 shadow-lg"
                      >
                  <FaGithub size={28} />
                      </motion.a>
          
                      <motion.a 
                        href="mailto:mahmoud.mamdoh0812@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-16 h-16 bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 shadow-lg"
                      >
                  <FaEnvelope size={24} />
                      </motion.a>
                  </motion.div>
                  
              {/* Experience Timeline - Bigger Font */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="max-w-6xl mx-auto"
              >
                {/* Desktop Timeline */}
                <div className="hidden lg:block">
                  <svg width="100%" height="160" viewBox="0 0 1000 160" className="w-full">
                    {/* Timeline Line */}
                    <line 
                      x1="50" y1="80" x2="950" y2="80" 
                      stroke="#dc2626" 
                      strokeWidth="4"
                    />
                    
                    {/* Jul 2023 - ITI BI Track */}
                    <circle cx="170" cy="80" r="12" fill="#dc2626" />
                    <circle cx="170" cy="80" r="8" fill="#ffffff" />
                    <text x="170" y="105" textAnchor="middle" className="fill-gray-900 dark:fill-white text-lg font-bold">Jul 2023</text>
                    <text x="170" y="50" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-lg font-semibold">ITI BI Track</text>
                    
                    {/* Nov 2023 - ASDC Internship */}
                    <circle cx="370" cy="80" r="12" fill="#dc2626" />
                    <circle cx="370" cy="80" r="8" fill="#ffffff" />
                    <text x="370" y="105" textAnchor="middle" className="fill-gray-900 dark:fill-white text-lg font-bold">Nov 2023</text>
                    <text x="370" y="50" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-lg font-semibold">ASDC Internship</text>
                    
                    {/* Jul 2024 - BI Analyst */}
                    <circle cx="570" cy="80" r="12" fill="#dc2626" />
                    <circle cx="570" cy="80" r="8" fill="#ffffff" />
                    <text x="570" y="105" textAnchor="middle" className="fill-gray-900 dark:fill-white text-lg font-bold">Jul 2024</text>
                    <text x="570" y="50" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-lg font-semibold">BI Analyst</text>
                    
                    {/* Jan 2025 - DE Zoomcamp */}
                    <circle cx="770" cy="80" r="12" fill="#dc2626" />
                    <circle cx="770" cy="80" r="8" fill="#ffffff" />
                    <text x="770" y="105" textAnchor="middle" className="fill-gray-900 dark:fill-white text-lg font-bold">Jan 2025</text>
                    <text x="770" y="50" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-lg font-semibold">DE Zoomcamp</text>
                  </svg>
                      </div>
                
                {/* Mobile Timeline */}
                <div className="block lg:hidden">
                  <svg width="100%" height="320" viewBox="0 0 350 320" className="w-full">
                    {/* Vertical Timeline Line */}
                    <line 
                      x1="150" y1="40" x2="150" y2="280" 
                      stroke="#dc2626" 
                      strokeWidth="4"
                    />
                    
                    {/* Jul 2023 */}
                    <circle cx="150" cy="80" r="10" fill="#dc2626" />
                    <circle cx="150" cy="80" r="6" fill="#ffffff" />
                    <text x="100" y="85" textAnchor="middle" className="fill-gray-900 dark:fill-white text-base font-bold">Jul 2023</text>
                    <text x="200" y="85" textAnchor="start" className="fill-red-600 dark:fill-red-400 text-base font-semibold">ITI BI Track</text>
                    
                    {/* Nov 2023 */}
                    <circle cx="150" cy="140" r="10" fill="#dc2626" />
                    <circle cx="150" cy="140" r="6" fill="#ffffff" />
                    <text x="100" y="145" textAnchor="middle" className="fill-gray-900 dark:fill-white text-base font-bold">Nov 2023</text>
                    <text x="200" y="145" textAnchor="start" className="fill-red-600 dark:fill-red-400 text-base font-semibold">ASDC Internship</text>
                    
                    {/* Jul 2024 */}
                    <circle cx="150" cy="200" r="10" fill="#dc2626" />
                    <circle cx="150" cy="200" r="6" fill="#ffffff" />
                    <text x="100" y="205" textAnchor="middle" className="fill-gray-900 dark:fill-white text-base font-bold">Jul 2024</text>
                    <text x="200" y="205" textAnchor="start" className="fill-red-600 dark:fill-red-400 text-base font-semibold">BI Analyst</text>
                    
                    {/* Jan 2025 */}
                    <circle cx="150" cy="260" r="10" fill="#dc2626" />
                    <circle cx="150" cy="260" r="6" fill="#ffffff" />
                    <text x="100" y="265" textAnchor="middle" className="fill-gray-900 dark:fill-white text-base font-bold">Jan 2025</text>
                    <text x="200" y="265" textAnchor="start" className="fill-red-600 dark:fill-red-400 text-base font-semibold">DE Zoomcamp</text>
                  </svg>
                  </div>
                </motion.div>
            </div>

          </div>
          </section>

        {/* About Section - Clean & Simple like Zyad's */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              </div>
              
              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Profile Image */}
                <div className="flex justify-center lg:justify-start">
                  <div className="w-80 h-80 relative">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-red-500">
                      <Image
                        src="/images/profile-photo.jpg"
                        alt="Mahmoud Mamdoh - Data Engineer"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                          </div>
                              </div>
                            </div>
                            
                {/* Right Side - About Text */}
                <div className="text-center lg:text-left">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    As a <span className="font-semibold text-red-600 dark:text-red-400">Computer Science</span> graduate specializing in 
                    <span className="font-semibold text-red-600 dark:text-red-400"> data engineering</span>, I have a strong foundation in 
                    <span className="font-semibold text-red-600 dark:text-red-400">database systems</span>, 
                    <span className="font-semibold text-red-600 dark:text-red-400">data structures</span>, and 
                    <span className="font-semibold text-red-600 dark:text-red-400">algorithms</span>. My expertise spans across 
                    <span className="font-semibold text-red-600 dark:text-red-400">software engineering principles</span>, with hands-on experience in 
                    designing scalable data pipelines, optimizing database performance, and implementing efficient algorithms for 
                    large-scale data processing. I'm passionate about building robust, maintainable systems that transform raw data 
                    into actionable insights through clean code and architectural best practices.
                  </p>
                            </div>
                    </div>
                    
              {/* Education Timeline - Simple SVG like Zyad's */}
              <div className="mt-20">
                {/* Desktop Timeline */}
                <div className="hidden md:block">
                  <svg width="100%" height="120" viewBox="0 0 800 120" className="w-full">
                    {/* Timeline Line */}
                    <line 
                      x1="50" y1="60" x2="750" y2="60" 
                      stroke="#dc2626" 
                      strokeWidth="2"
                    />
                    
                    {/* 2021 - Start University */}
                    <circle cx="200" cy="60" r="8" fill="#dc2626" />
                    <text x="200" y="85" textAnchor="middle" className="fill-gray-900 dark:fill-white text-sm font-semibold">2021</text>
                    <text x="200" y="35" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">Started CS</text>
                    <text x="200" y="100" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">Menofia University</text>
                    
                    {/* 2023 - Data Focus */}
                    <circle cx="400" cy="60" r="8" fill="#dc2626" />
                    <text x="400" y="85" textAnchor="middle" className="fill-gray-900 dark:fill-white text-sm font-semibold">2023</text>
                    <text x="400" y="35" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">Data Engineering</text>
                    <text x="400" y="100" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">Specialization</text>
                    
                    {/* 2025 - Graduation */}
                    <circle cx="600" cy="60" r="8" fill="#dc2626" />
                    <text x="600" y="85" textAnchor="middle" className="fill-gray-900 dark:fill-white text-sm font-semibold">2025</text>
                    <text x="600" y="35" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">Graduation</text>
                    <text x="600" y="100" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">CS Degree</text>
                                </svg>
                            </div>
                            
                {/* Mobile Timeline */}
                <div className="block md:hidden">
                  <svg width="100%" height="280" viewBox="0 0 300 280" className="w-full">
                    {/* Vertical Timeline Line */}
                    <line 
                      x1="150" y1="40" x2="150" y2="240" 
                      stroke="#dc2626" 
                      strokeWidth="2"
                    />
                    
                    {/* 2021 */}
                    <circle cx="150" cy="80" r="6" fill="#dc2626" />
                    <text x="110" y="85" textAnchor="middle" className="fill-gray-900 dark:fill-white text-sm font-semibold">2021</text>
                    <text x="200" y="70" textAnchor="start" className="fill-gray-700 dark:fill-gray-300 text-xs">Started CS</text>
                    <text x="200" y="85" textAnchor="start" className="fill-gray-700 dark:fill-gray-300 text-xs">Menofia University</text>
                    
                    {/* 2023 */}
                    <circle cx="150" cy="160" r="6" fill="#dc2626" />
                    <text x="110" y="165" textAnchor="middle" className="fill-gray-900 dark:fill-white text-sm font-semibold">2023</text>
                    <text x="200" y="150" textAnchor="start" className="fill-gray-700 dark:fill-gray-300 text-xs">Data Engineering</text>
                    <text x="200" y="165" textAnchor="start" className="fill-gray-700 dark:fill-gray-300 text-xs">Specialization</text>
                    
                    {/* 2025 */}
                    <circle cx="150" cy="220" r="6" fill="#dc2626" />
                    <text x="110" y="225" textAnchor="middle" className="fill-gray-900 dark:fill-white text-sm font-semibold">2025</text>
                    <text x="200" y="210" textAnchor="start" className="fill-gray-700 dark:fill-gray-300 text-xs">Graduation</text>
                    <text x="200" y="225" textAnchor="start" className="fill-gray-700 dark:fill-gray-300 text-xs">CS Degree</text>
                                </svg>
                              </div>
                            </div>
                            
              {/* Simplified Role Cards - Compact & Easy to Read */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Professional Roles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Data Engineer Card */}
                  <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-4 border border-gray-200/30 dark:border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-white text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path>
                                </svg>
                              </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">Data Engineer</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 leading-tight">Building scalable ETL pipelines & data warehouses</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/40 dark:to-orange-900/40 text-red-700 dark:text-red-300 rounded-md text-xs font-medium border border-red-200/50 dark:border-red-700/50">Spark</span>
                          <span className="px-2 py-1 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/40 dark:to-orange-900/40 text-red-700 dark:text-red-300 rounded-md text-xs font-medium border border-red-200/50 dark:border-red-700/50">Hadoop</span>
                          <span className="px-2 py-1 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/40 dark:to-orange-900/40 text-red-700 dark:text-red-300 rounded-md text-xs font-medium border border-red-200/50 dark:border-red-700/50">Kafka</span>
                            </div>
                          </div>
                            </div>
                    </div>
                    
                  {/* Analytics Engineer Card */}
                  <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-4 border border-gray-200/30 dark:border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-white text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
                                </svg>
                              </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Analytics Engineer</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 leading-tight">Designing data models for advanced analytics</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-700 dark:text-green-300 rounded-md text-xs font-medium border border-green-200/50 dark:border-green-700/50">dbt</span>
                          <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-700 dark:text-green-300 rounded-md text-xs font-medium border border-green-200/50 dark:border-green-700/50">Snowflake</span>
                          <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-700 dark:text-green-300 rounded-md text-xs font-medium border border-green-200/50 dark:border-green-700/50">SQL</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                  {/* BI Developer Card */}
                  <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-4 border border-gray-200/30 dark:border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" className="text-white text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
                                </svg>
                              </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">BI Developer</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 leading-tight">Creating interactive dashboards & reports</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/40 dark:to-violet-900/40 text-purple-700 dark:text-purple-300 rounded-md text-xs font-medium border border-purple-200/50 dark:border-purple-700/50">Power BI</span>
                          <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/40 dark:to-violet-900/40 text-purple-700 dark:text-purple-300 rounded-md text-xs font-medium border border-purple-200/50 dark:border-purple-700/50">Tableau</span>
                          <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/40 dark:to-violet-900/40 text-purple-700 dark:text-purple-300 rounded-md text-xs font-medium border border-purple-200/50 dark:border-purple-700/50">DAX</span>
                            </div>
                          </div>
                    </div>
                  </div>

                  {/* Data Analyst Card */}
                  <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-4 border border-gray-200/30 dark:border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-white text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                                </svg>
                              </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">Data Analyst</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 leading-tight">Transforming data into actionable insights</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 text-orange-700 dark:text-orange-300 rounded-md text-xs font-medium border border-orange-200/50 dark:border-orange-700/50">Python</span>
                          <span className="px-2 py-1 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 text-orange-700 dark:text-orange-300 rounded-md text-xs font-medium border border-orange-200/50 dark:border-orange-700/50">Pandas</span>
                          <span className="px-2 py-1 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 text-orange-700 dark:text-orange-300 rounded-md text-xs font-medium border border-orange-200/50 dark:border-orange-700/50">SQL</span>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                              </div>
            </motion.div>
                            </div>
        </section>
      {/* Projects Section */}
      <section id="projects" className="section-padding relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
                          </div>
                          
        {/* Floating Elements for Projects */}
        <div className="absolute inset-0 pointer-events-none">
                      <motion.div 
                        animate={{ 
              y: [0, -15, 0],
              rotate: [0, 3, 0]
                        }}
                        transition={{ 
              duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
            className="absolute top-32 left-12 w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-indigo-200/30 dark:border-indigo-700/30"
                      >
            <FaProjectDiagram className="text-indigo-600 dark:text-indigo-400 text-xl" />
                      </motion.div>
                      
                      <motion.div 
                        animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
                        }}
                        transition={{ 
              duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
              delay: 2
                        }}
            className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-200/30 dark:border-green-700/30"
                      >
            <FaRocket className="text-green-600 dark:text-green-400" />
                      </motion.div>
                      
                      <motion.div 
                        animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.1, 1]
                        }}
                        transition={{ 
              duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
              delay: 4
                        }}
            className="absolute bottom-32 left-16 w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-orange-200/30 dark:border-orange-700/30"
                      >
            <FaTools className="text-orange-600 dark:text-orange-400" />
                </motion.div>
              </div>

        <div className="content-width-1750 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full text-sm font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-200/20 dark:border-indigo-500/20 backdrop-blur-sm">
                  <FaProjectDiagram className="inline mr-2" />
                  Portfolio Showcase
                </span>
                </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Featured <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-green-600 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
                Showcase of data engineering projects demonstrating modern data stack expertise and scalable solutions
              </p>
            </div>

            {/* Enhanced Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
              className="flex justify-center mb-16"
            >
              <div className="flex flex-wrap gap-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-3 border border-gray-200/30 dark:border-gray-700/40 shadow-lg">
                {[
                  { name: 'All', icon: FaProjectDiagram, color: 'from-gray-500 to-gray-600' },
                  { name: 'Data Engineer', icon: FaDatabase, color: 'from-blue-500 to-cyan-500' },
                  { name: 'Analytics Engineer', icon: FaChartLine, color: 'from-green-500 to-emerald-500' },
                  { name: 'BI Engineer', icon: FaLightbulb, color: 'from-purple-500 to-violet-500' }
                ].map((category) => (
                  <motion.button
                    key={category.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`relative flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category.name
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-black/20`
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-700/60'
                    }`}
                  >
                    {selectedCategory === category.name && (
                      <motion.div
                        layoutId="activeCategory"
                        className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl`}
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <category.icon className={`relative z-10 ${selectedCategory === category.name ? 'text-white' : ''}`} />
                    <span className="relative z-10">{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(() => {
                const filteredProjects = projects.filter(project => {
                  if (selectedCategory === 'All') return true;
                  return getProjectCategory(project.title, project.description) === selectedCategory;
                });

                if (filteredProjects.length === 0) {
                  return (
                    <div className="col-span-full text-center py-12">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                      >
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          No projects found for "{selectedCategory}"
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                          Try selecting a different category or check back later for new projects.
                        </p>
                        <button
                          onClick={() => setSelectedCategory('All')}
                          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                        >
                          View All Projects
                        </button>
                      </motion.div>
                    </div>
                  );
                }

                  return filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      index={index}
                      getProjectCategory={getProjectCategory}
                      getCategoryColor={getCategoryColor}
                      getProjectImage={getProjectImage}
                    />
                  ));
              })()}
            </div>
          </motion.div>
        </div>
      </section>

              {/* Skills Section */}
        <section id="skills" className="section-padding relative overflow-hidden">
          {/* Clean Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gray-50/50 dark:bg-slate-800/80"></div>
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-24 left-8 w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30"
            >
              <FaPython className="text-emerald-600 dark:text-emerald-400 text-xl" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-40 right-12 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-200/30 dark:border-cyan-700/30"
            >
              <FaDatabase className="text-cyan-600 dark:text-cyan-400" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -12, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
              className="absolute bottom-32 left-20 w-14 h-14 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-orange-200/30 dark:border-orange-700/30"
            >
              <FaDocker className="text-orange-600 dark:text-orange-400" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 18, 0],
                rotate: [0, -8, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-20 right-16 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-200/30 dark:border-purple-700/30"
            >
              <FaGitAlt className="text-purple-600 dark:text-purple-400 text-sm" />
            </motion.div>
          </div>

        <div className="content-width-1750 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 dark:from-emerald-500/20 dark:to-cyan-500/20 rounded-full text-sm font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-200/20 dark:border-emerald-500/20 backdrop-blur-sm">
                  <FaTools className="inline mr-2" />
                  Technical Expertise
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Professional <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
                Expertise across the full data engineering and analytics stack with hands-on experience in modern technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((category, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="enhanced-card p-6 rounded-xl"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-red-600 text-white rounded-lg rotate-slow">
                      {renderSkillIcon(category.icon)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.items.map((skill, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {/* Skill Name and Percentage */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Skill Bar */}
                        <div className="skill-bar-enhanced">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`skill-progress-enhanced bg-gradient-to-r ${skill.color}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently Learning Section */}
            <div className="mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Currently Learning & Willing to Learn
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    'GitHub Actions',
                    'Snowflake',
                    'Flink',
                    'kafka',
                    'Spark',
                    'AWS',
                    'Kubernetes'
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 px-6 py-3 rounded-full text-red-700 dark:text-red-300 font-medium border border-red-300 dark:border-red-700 hover-lift pulse-glow"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Dashboards Section */}
      <section id="dashboards" className="section-padding">
        <div className="content-width-1750">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Interactive <span className="gradient-text">Dashboards</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Published interactive dashboards on NovyPro showcasing data visualization and business intelligence expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Order Analysis Dashboard',
                  description: 'Comprehensive order analytics with sales performance, customer insights, and trend analysis',
                  url: 'https://project.novypro.com/1Qxh8Y',
                  category: 'E-commerce',
                  icon: '📊',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: 'Store Analysis Dashboard',
                  description: 'Store performance metrics, geographic analysis, and operational insights',
                  url: 'https://project.novypro.com/1Qxh8Y',
                  category: 'Retail',
                  icon: '🏪',
                  color: 'from-green-500 to-green-600'
                },
                {
                  title: 'E-commerce Dashboard',
                  description: 'Complete e-commerce analytics with product performance, customer behavior, and sales trends',
                  url: 'https://project.novypro.com/Huo1Ep',
                  category: 'E-commerce',
                  icon: '🛒',
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  title: 'Bike Store Dashboard',
                  description: 'Bicycle retail analytics with inventory management, sales performance, and customer insights',
                  url: 'https://project.novypro.com/OlOb72',
                  category: 'Retail',
                  icon: '🚲',
                  color: 'from-orange-500 to-orange-600'
                },
                {
                  title: 'Northwind Dashboard',
                  description: 'Classic Northwind database analytics with comprehensive business intelligence insights',
                  url: 'https://project.novypro.com/tVmUo1',
                  category: 'Business Intelligence',
                  icon: '📈',
                  color: 'from-red-500 to-red-600'
                },
                {
                  title: 'HR Analysis Dashboard',
                  description: 'Human resources analytics with employee performance, recruitment metrics, and workforce insights',
                  url: 'https://project.novypro.com/UfeUUu',
                  category: 'Human Resources',
                  icon: '👥',
                  color: 'from-indigo-500 to-indigo-600'
                }
              ].map((dashboard, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="enhanced-card rounded-xl overflow-hidden hover-lift"
                >
                  <div className={`bg-gradient-to-r ${dashboard.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl bounce-gentle">
                        {dashboard.icon}
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" x2="21" y1="14" y2="3"></line>
                        </svg>
                        <span className="text-sm font-medium">Live</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{dashboard.title}</h3>
                    <p className="text-sm opacity-90">{dashboard.category}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M3 3v18h18"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path>
                        </svg>
                        <span className="text-sm">Power BI</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">ID: NP-{index + 1}-2024</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {dashboard.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Interactive Filters</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Real-time Data</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Mobile Responsive</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">KPI Tracking</span>
                      </div>
                    </div>
                    <a
                      href={dashboard.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" x2="21" y1="14" y2="3"></line>
                      </svg>
                      <span>View Dashboard</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Certifications & <span className="gradient-text">Achievements</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Continuously learning and validating expertise in cutting-edge technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => openCertificateModal(cert)}
                >
                  <div className={`bg-gradient-to-r ${cert.color} p-4 text-white relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 right-2 w-12 h-12 border border-white rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-8 h-8 border border-white rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                          <cert.icon className="w-5 h-5" />
                        </div>
                        <div className="flex items-center space-x-2 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                          <FaCertificate className="w-3 h-3" />
                          <span className="text-xs font-medium">Certified</span>
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-sm mb-1 leading-tight line-clamp-2">{cert.title}</h3>
                      <p className="text-xs opacity-90">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span className="text-xs font-medium">{cert.year}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Click to view</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-xs mb-4 leading-relaxed line-clamp-3">
                      {cert.summary}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Certificate #{index + 1}</span>
                      <div className="flex items-center space-x-1 text-red-600 group-hover:text-red-700 transition-colors duration-200">
                        <FaExternalLinkAlt className="w-3 h-3" />
                        <span className="font-medium">View Certificate</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Continuous Learning Section */}
            <div className="mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 mx-auto mb-4">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
                </svg>
                <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-lg text-red-100 max-w-3xl mx-auto">
                  Staying current with emerging technologies and best practices in data engineering, 
                  machine learning, and cloud computing through continuous professional development.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
        </div>

        {/* Floating Contact Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-32 left-12 w-16 h-16 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-red-200/30 dark:border-red-700/30"
          >
            <FaEnvelope className="text-red-600 dark:text-red-400 text-xl" />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-24 right-16 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30"
          >
            <FaLinkedin className="text-blue-600 dark:text-blue-400" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -12, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute bottom-32 left-20 w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-green-200/30 dark:border-green-700/30"
          >
            <FaPhone className="text-green-600 dark:text-green-400" />
          </motion.div>
        </div>

        <div className="content-width-1750 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-3 bg-gradient-to-r from-red-500/10 to-pink-500/10 dark:from-red-500/20 dark:to-pink-500/20 rounded-full text-sm font-semibold text-red-600 dark:text-red-400 border border-red-200/20 dark:border-red-500/20 backdrop-blur-sm">
                  <FaPaperPlane className="inline mr-2" />
                  Let's Connect
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Get in <span className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
                Open to relocate for the right opportunity. Let's discuss how I can contribute to your data engineering initiatives
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Email</p>
                      <a href="mailto:mahmoud.mamdoh0812@gmail.com" className="text-red-600 hover:text-red-500 transition-colors">
                        mahmoud.mamdoh0812@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Phone</p>
                      <a href="tel:+201102007021" className="text-red-600 hover:text-red-500 transition-colors">
                        +(20) 1102007021
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                      <FaLinkedin className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">LinkedIn</p>
                      <a href="https://linkedin.com/in/mahmoud-mamdoh-47a68a203/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition-colors">
                        /in/mahmoud-mamdoh-47a68a203
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                      <FaGithub className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">GitHub</p>
                      <a href="https://github.com/MAHMOUDMAMDOH8" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition-colors">
                        @MAHMOUDMAMDOH8
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">Cairo, Egypt (open to relocate)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Send Message</h3>
                <form className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-gray-900 dark:text-white font-medium mb-2 flex items-center space-x-2">
                      <FaUser className="text-red-600" />
                      <span>Name</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 enhanced-card border-2 border-gray-200/80 dark:border-gray-700/50 rounded-xl text-gray-900 dark:text-white focus:border-red-600 focus:outline-none transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg focus:shadow-red-600/20 transform hover:-translate-y-1 focus:-translate-y-1"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-gray-900 dark:text-white font-medium mb-2 flex items-center space-x-2">
                      <FaEnvelope className="text-red-600" />
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 enhanced-card border-2 border-gray-200/80 dark:border-gray-700/50 rounded-xl text-gray-900 dark:text-white focus:border-red-600 focus:outline-none transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg focus:shadow-red-600/20 transform hover:-translate-y-1 focus:-translate-y-1"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="block text-gray-900 dark:text-white font-medium mb-2 flex items-center space-x-2">
                      <FaTag className="text-red-600" />
                      <span>Subject</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 enhanced-card border-2 border-gray-200/80 dark:border-gray-700/50 rounded-xl text-gray-900 dark:text-white focus:border-red-600 focus:outline-none transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg focus:shadow-red-600/20 transform hover:-translate-y-1 focus:-translate-y-1"
                      placeholder="What's this about?"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-gray-900 dark:text-white font-medium mb-2 flex items-center space-x-2">
                      <FaComment className="text-red-600" />
                      <span>Message</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 enhanced-card border-2 border-gray-200/80 dark:border-gray-700/50 rounded-xl text-gray-900 dark:text-white focus:border-red-600 focus:outline-none transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg focus:shadow-red-600/20 transform hover:-translate-y-1 focus:-translate-y-1 resize-none"
                      placeholder="Your message..."
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="pt-4"
                  >
                    <motion.button 
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full btn-enhanced font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform border-0 relative overflow-hidden group"
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-red-700/50 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                      
                      {/* Button Content */}
                      <div className="relative z-10 flex items-center justify-center space-x-3">
                        <FaPaperPlane className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-lg font-bold">Send Message</span>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                      
                      {/* Border Glow */}
                      <div className="absolute inset-0 rounded-xl border-2 border-red-400/50 group-hover:border-red-300 transition-colors duration-300"></div>
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-light dark:from-gray-900/80 dark:via-gray-900/90 dark:to-gray-900/80 backdrop-blur-md border-t border-gray-200/80 dark:border-gray-700/50 py-8 shadow-sm">
        <div className="content-width-1750 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 hover-lift"
          >
            © 2024 <span className="gradient-text-enhanced">Mahmoud Mamdoh Soliman</span>. All rights reserved.
          </motion.p>
        </div>
      </footer>
      </main>
    </div>
  )
} 