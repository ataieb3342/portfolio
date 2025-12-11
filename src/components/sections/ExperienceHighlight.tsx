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
        </motion.div>
      </div>
    </section>
);
