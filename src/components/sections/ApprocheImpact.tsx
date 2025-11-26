'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { data } from '@/lib/data';
import { fadeIn, staggerContainer } from '@/lib/animations';

export const ApprocheImpact: React.FC = () => (
    <section className="px-6 py-20 bg-gray-800 text-gray-200">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-white"
        >
          Approche & Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Ma valeur ajoutée : transformer un besoin métier en solution complète et opérationnelle.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {data.impacts.map((impact, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-gray-900 p-8 rounded-2xl border-2 border-blue-600/30 shadow-xl hover:border-blue-600/60 transition"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl">{impact.icon}</span>
              </div>
              <h3 className="font-bold text-2xl mb-3 text-white">{impact.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
);
