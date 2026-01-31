import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const expertiseItems = [
  { label: 'Meta Ads', emoji: '📣' },
  { label: 'TikTok Ads', emoji: '🎵' },
  { label: 'Shopify Stores', emoji: '🛒' },
  { label: 'WordPress', emoji: '🌐' },
  { label: 'UI/UX Design', emoji: '🎨' },
  { label: 'Logo Design', emoji: '✒️' },
  { label: 'Graphics', emoji: '🖼️' },
  { label: 'Web Apps', emoji: '💻' },
  { label: 'Software', emoji: '⚙️' },
  { label: 'Application Builds', emoji: '📱' }
];

const Tools = () => {
  const { ref, isInView } = useInViewMotion();

  return (
    <section id="tools" ref={ref} aria-label="What we work on" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">What we work on</h2>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">
              Platforms, ads and design work at a glance
            </p>
          </div>
          <p className="hidden sm:block max-w-sm text-xs text-slate-400">
            A horizontal flow of the work we do across marketing, design, and tech. These icons move continuously to
            reflect how our team works together.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mt-2 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 px-3 py-3 sm:px-4 sm:py-4 shadow-soft"
        >
          <div className="icon-marquee-container">
            <div className="icon-marquee">
              {[...expertiseItems, ...expertiseItems].map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-200 shadow-soft"
                >
                  <span aria-hidden="true" className="text-base sm:text-lg">{item.emoji}</span>
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
