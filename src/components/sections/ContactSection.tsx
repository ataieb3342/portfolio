'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { data } from '@/lib/data';
import { fadeIn, staggerContainer} from '@/lib/animations';

export const ContactSection: React.FC = () => (
  <section className="relative px-6 pt-18 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
    
    <div className="container mx-auto max-w-4xl text-center relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Discutons de votre projet
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Vous cherchez un profil polyvalent capable de prendre en charge des projets
          de bout en bout ? Contactez-moi.
        </motion.p>
      </motion.div>

      {/* Main Contact Buttons */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Email Button */}
        <motion.a
          variants={fadeIn}
          href={`mailto:${data.contact.email}`}
          className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 rounded-2xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300 font-bold shadow-2xl shadow-blue-500/25 border border-blue-400/20 flex flex-col items-center gap-4"
          whileHover={{ 
            scale: 1.02,
            y: -5,
            boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-lg">Envoyer un email</span>
          <span className="text-blue-100 text-sm font-normal">{data.contact.email}</span>
        </motion.a>

        {/* Phone Button */}
        <motion.a
          variants={fadeIn}
          href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`}
          className="group bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-2xl hover:from-gray-700 hover:to-gray-600 transition-all duration-300 font-bold shadow-2xl border border-gray-600/20 flex flex-col items-center gap-4"
          whileHover={{ 
            scale: 1.02,
            y: -5,
            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span className="text-lg">Appeler maintenant</span>
          <span className="text-gray-300 text-sm font-normal">{data.contact.phone}</span>
        </motion.a>
      </motion.div>

      {/* Social Links with Icons */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >

        <motion.div
          className="flex justify-center gap-8"
          variants={staggerContainer}
        >
          {/* LinkedIn */}
          <motion.a
            variants={fadeIn}
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800/50 hover:bg-blue-600/20 p-5 rounded-2xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-gray-300 group-hover:text-white font-medium">LinkedIn</span>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            variants={fadeIn}
            href={data.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800/50 hover:bg-gray-700/50 p-5 rounded-2xl border border-gray-700 hover:border-gray-500/30 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-gray-300 group-hover:text-white font-medium">GitHub</span>
            </div>
          </motion.a>

          {/* Portfolio */}
          <motion.a
            variants={fadeIn}
            href={data.contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800/50 hover:bg-green-600/20 p-5 rounded-2xl border border-gray-700 hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
              </svg>
              <span className="text-gray-300 group-hover:text-white font-medium">Portfolio</span>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);