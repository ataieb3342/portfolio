'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { data } from '@/lib/data';
import { fadeIn, staggerContainer } from '@/lib/animations';

export const SkillsSection: React.FC = () => (
    <section className="px-6 py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Stack Technique Complète
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeIn}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-blue-600/50 transition"
          >
            <h3 className="font-extrabold text-2xl mb-5 text-blue-400 border-b pb-3 border-gray-700">Data & ML</h3>
            <div className="flex flex-wrap gap-3">
              {data.skills.data.map((skill: string) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-blue-600/50 transition"
          >
            <h3 className="font-extrabold text-2xl mb-5 text-blue-400 border-b pb-3 border-gray-700">Développement</h3>
            <div className="flex flex-wrap gap-3">
              {data.skills.dev.map((skill: string) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-blue-600/50 transition"
          >
            <h3 className="font-extrabold text-2xl mb-5 text-blue-400 border-b pb-3 border-gray-700">Outils & DevOps</h3>
            <div className="flex flex-wrap gap-3">
              {data.skills.tools.map((skill: string) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
);
