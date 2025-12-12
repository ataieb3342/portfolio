'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { data } from '@/lib/data';
import { fadeIn, staggerContainer } from '@/lib/animations';

export const EducationSection: React.FC = () => (
  <section className="px-6 py-20 bg-gray-900 text-gray-200">
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-4 text-white"
      >
        Formation
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
      >
        Cursus universitaire en informatique avec spécialisation en systèmes distribués et IA
      </motion.p>

      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {data.education.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="bg-gray-800 p-8 rounded-2xl border-2 border-blue-600/20 shadow-xl hover:border-blue-600/40 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-2xl mb-2 text-white">{edu.degree}</h3>
                <p className="text-blue-400 text-lg mb-3">{edu.school}</p>
                {edu.details && (
                  <p className="text-gray-400 leading-relaxed">{edu.details}</p>
                )}
              </div>
              <div className="md:text-right">
                <span className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full font-semibold border border-blue-600/30">
                  {edu.period}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
