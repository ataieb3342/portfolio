'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { data } from '@/lib/data';
import { fadeIn, staggerContainer} from '@/lib/animations';

export const HeroSection: React.FC = () => (
  <section className="relative px-6 py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    
    <div className="container mx-auto max-w-6xl text-white relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeIn} 
            className="inline-block mb-8 md:mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-blue-500/25 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              Disponible • En recherche active
            </span>
          </motion.div>

          {/* Mobile Image */}
          <div className="md:hidden flex justify-center mb-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="w-48 h-48 border-4 border-blue-400/80 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 backdrop-blur-sm">
                <Image
                  src="/profil.jpg"
                  width={192}
                  height={192}
                  alt={data.name}
                  className="object-cover w-full h-full"
                  priority
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/192x192/1f2937/ffffff?text=Adam+Taïeb";
                    e.currentTarget.className = "object-contain w-full h-full p-8";
                  }}
                />
              </div>
            </motion.div>
          </div>

          <motion.h1 
            variants={fadeIn} 
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            {data.name}
          </motion.h1>
          
          <motion.p 
            variants={fadeIn} 
            className="text-2xl md:text-3xl text-blue-300 font-light mb-6 flex items-center gap-3"
          >
            <motion.span
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👋
            </motion.span>
            {data.title}
          </motion.p>
          
          <motion.p 
            variants={fadeIn} 
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl border-l-4 border-blue-500 pl-4 bg-blue-500/5 py-2 rounded-r-lg"
          >
            {data.profile}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4" 
            variants={staggerContainer}
          >
            {/* Bouton Email - Version Premium */}
            <motion.a
              variants={fadeIn}
              href={`mailto:${data.contact.email}`}
              className="group relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white px-12 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-500/40 overflow-hidden flex items-center gap-3 border border-blue-400/30"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.98, y: 0 }}
            >
              {/* Effets de lumière */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-transparent opacity-50" />
              
              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="p-2 bg-white/20 rounded-xl backdrop-blur-sm border border-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div className="text-left">
                  <div className="text-lg font-bold">Me contacter</div>
                  <div className="text-blue-100 text-sm font-normal opacity-80">Réponse sous 24h</div>
                </div>
              </div>
            </motion.a>

            {/* Bouton CV - Version Premium */}
            <motion.a
              variants={fadeIn}
              href="/cv.pdf"
              download={`CV_${data.name.replace(' ', '_')}.pdf`}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 px-12 py-5 rounded-2xl font-semibold shadow-2xl border border-gray-600/50 overflow-hidden flex items-center gap-3 hover:border-blue-400/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)",
                background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)"
              }}
              whileTap={{ scale: 0.98, y: 0 }}
            >
              {/* Effet de surbrillance au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-2 bg-gray-700/50 rounded-xl group-hover:bg-blue-500/20 transition-colors duration-300 border border-gray-600/50 group-hover:border-blue-400/30"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.div>
                <div className="text-left">
                  <div className="text-lg font-bold group-hover:text-white transition-colors">Télécharger mon CV</div>
                  <div className="text-gray-400 text-sm font-normal">PDF - {new Date().getFullYear()}</div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Desktop Image - Version épurée */}
        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="relative">
            {/* Photo principale avec effet de brillance */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10"
            >
              <div className="w-96 h-96 border-4 border-blue-400/80 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 backdrop-blur-sm">
                <Image
                  src="/profil.jpg"
                  width={384}
                  height={384}
                  alt={data.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  priority
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/384x384/1f2937/ffffff?text=Adam+Taïeb";
                    e.currentTarget.className = "object-contain w-full h-full p-12";
                  }}
                />
              </div>
            </motion.div>

            {/* Effet de halo subtil */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10"
            />

            {/* Points décoratifs animés en cercle */}
            <motion.div
              className="absolute -inset-4 -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateX(220px) rotate(-${i * 45}deg)`
                  }}
                  animate={{ 
                    scale: [0.5, 1, 0.5],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-3 bg-white/50 rounded-full mt-2"
        />
      </motion.div>
    </motion.div>
  </section>
);