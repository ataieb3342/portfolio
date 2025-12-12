'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { data } from '@/lib/data';
import { fadeIn, staggerContainer } from '@/lib/animations';

export const ExperienceHighlight: React.FC = () => (
    <section className="px-6 py-20 bg-gray-800 text-gray-200">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 text-white"
        >
            Expérience Clé
        </motion.h2>
        <motion.div
          className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 p-10 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
              ACTUEL
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-white">
                {data.experience.title}
              </h3>
              <p className="text-xl text-blue-400 font-medium">
                {data.experience.company} • {data.experience.period}
              </p>
            </div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-10 border-t border-gray-700 pt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
                <span className="text-3xl text-blue-400">⚡</span> Applications métier full-stack
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {data.experience.appHighlights}
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
                <span className="text-3xl text-blue-400">📊</span> Data & MLOps
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {data.experience.dataHighlights}
              </p>
            </motion.div>
          </motion.div>

          {/* Testimonial */}
          {data.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 pt-8 border-t border-gray-700"
            >
              <div className="relative bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-l-4 border-blue-500 rounded-r-2xl p-6">
                <svg className="absolute top-4 left-4 w-8 h-8 text-blue-500/20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"/>
                </svg>
                <blockquote className="relative z-10 ml-6">
                  <p className="text-gray-300 leading-relaxed italic mb-4">
                    "{data.testimonial.quote}"
                  </p>
                  <footer className="text-sm">
                    <div className="font-semibold text-blue-400">{data.testimonial.author}</div>
                    <div className="text-gray-500">{data.testimonial.role} • {data.testimonial.company}</div>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
);
