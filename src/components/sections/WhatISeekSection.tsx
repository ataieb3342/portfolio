'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { data } from '@/lib/data';
import { fadeIn, staggerContainer } from '@/lib/animations';

export const WhatISeekSection: React.FC = () => (
  <section className="relative px-6 py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

    <div className="container mx-auto max-w-5xl relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {data.whatISeek.title}
        </h2>
        <p className="text-xl md:text-2xl text-blue-200 font-medium max-w-4xl mx-auto leading-tight">
          {data.whatISeek.shortVersion}
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div
        className="grid lg:grid-cols-2 gap-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Left: Criteria */}
        <motion.div
          variants={fadeIn}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-blue-400">💼</span>
            {data.whatISeek.subtitle}
          </h3>
          <div className="space-y-4">
            {data.whatISeek.criteria.map((criterion, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <span className="text-blue-400 font-bold mt-1 group-hover:scale-110 transition-transform">→</span>
                <span className="flex-1 text-gray-200 leading-relaxed">{criterion}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Motivators & Limits Grid */}
        <motion.div variants={fadeIn} className="grid gap-6">
          {/* Motivators */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300">
            <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
              <span>⚡</span>
              {data.whatISeek.motivators.title}
            </h3>
            <ul className="space-y-3">
              {data.whatISeek.motivators.items.map((item, index) => (
                <li key={index} className="text-gray-200 flex items-start gap-3 group">
                  <span className="text-green-400 font-bold group-hover:scale-110 transition-transform">✓</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Limits */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">
            <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
              <span>🎯</span>
              {data.whatISeek.limits.title}
            </h3>
            <ul className="space-y-3">
              {data.whatISeek.limits.items.map((item, index) => (
                <li key={index} className="text-gray-200 flex items-start gap-3 group">
                  <span className="text-blue-400 font-bold group-hover:scale-110 transition-transform">✓</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Closing + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-gray-700 pt-8"
      >
        <p className="text-center text-gray-300 text-lg leading-relaxed mb-8 italic max-w-3xl mx-auto">
          {data.whatISeek.closingStatement}
        </p>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <motion.a
            href={`mailto:${data.contact.email}`}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{data.contact.email}</span>
          </motion.a>

          <motion.a
            href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="bg-gray-800 text-white px-8 py-4 rounded-xl font-bold border border-gray-700 hover:border-blue-500/50 transition-all flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{data.contact.phone}</span>
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <motion.a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>

          <motion.a
            href={data.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>

          <motion.a
            href={data.contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);
