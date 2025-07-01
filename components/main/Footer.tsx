"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube, FaHeart, FaRocket, FaCode, FaEnvelope, FaPhone } from "react-icons/fa";
import { slideInFromBottom, fadeIn, staggerContainer } from "@/utils/motion";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const socialLinks = [
    { icon: RxGithubLogo, label: "GitHub", href: "#", color: "hover:text-gray-300" },
    { icon: RxLinkedinLogo, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
    { icon: RxTwitterLogo, label: "Twitter", href: "#", color: "hover:text-blue-400" },
    { icon: RxInstagramLogo, label: "Instagram", href: "#", color: "hover:text-pink-400" },
    { icon: FaYoutube, label: "YouTube", href: "#", color: "hover:text-red-400" },
    { icon: RxDiscordLogo, label: "Discord", href: "#", color: "hover:text-indigo-400" },
  ];

  const quickLinks = [
    { label: "About Me", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ];

  const services = [
    { icon: FaCode, label: "Web Development" },
    { icon: FaRocket, label: "App Development" },
    { label: "UI/UX Design" },
    { label: "Consulting" },
  ];

  return (
    <>
      <motion.footer
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative w-full bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 text-gray-200 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        
        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <motion.div
              variants={fadeIn(0.2)}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  S. PRIYA
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Full-stack developer passionate about creating innovative digital experiences 
                  and bringing ideas to life through code.
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                <FaEnvelope className="w-4 h-4" />
                <a 
                  href="mailto:priyaspriyas18@gmail.com"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  priyaspriyas18@gmail.com
                </a>
              </div>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center">
                  Get In Touch
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </span>
              </button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={fadeIn(0.4)}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    variants={fadeIn(0.1 * index)}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={fadeIn(0.6)}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.label}
                    variants={fadeIn(0.1 * index)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    {service.icon && (
                      <service.icon className="w-4 h-4 mr-3 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    )}
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.label}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeIn(0.8)}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Connect With Me
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    variants={fadeIn(0.1 * index)}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 group ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Let&#39;s build something amazing together!</p>
                <div className="flex items-center text-purple-400">
                  <FaHeart className="w-4 h-4 mr-2 animate-pulse" />
                  <span className="text-sm">Available for freelance work</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={fadeIn(1.0)}
            className="mt-16 pt-8 border-t border-gray-700/50"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>&copy; 2024 S. PRIYA.</span>
                <span>Made with</span>
                <FaHeart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>All rights reserved.</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 opacity-50" />
      </motion.footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Footer