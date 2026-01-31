import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const projects = [
  {
    name: 'Muhammad Abdullah',
    title: 'LuxCove – Premium Cosmetics Shopify Store',
    tech: 'Shopify + Meta & TikTok Ads',
    images: ['/Results/l1.png', '/Results/l2.png', '/Results/l3.png', '/Results/l4.png'],
    description:
      'LuxCove cosmetics store build and paid traffic setup: clean product pages, trust signals, and campaign structure that turned a new brand into a ready-to-scale storefront.',
  },
  {
    name: 'Hammad Ahmad',
    title: 'EcomAbdullah – Instagram Visual System',
    tech: 'Canva + Social Design',
    images: ['/Results/SM1.png', '/Results/SM2.png'],
    description:
      'A set of Instagram posts for EcomAbdullah with consistent typography, spacing, and highlight blocks so case studies and offers look sharp in the feed.',
  },
  {
    name: 'Muhammad Saad',
    title: 'Nexwear – Clothing Brand Frontend',
    tech: 'React + Vite + Tailwind CSS',
    images: ['/Results/1.png', '/Results/2.png', '/Results/3.png'],
    description:
      'Frontend build for Nexwear, a clothing brand site: responsive layout, product-first sections, and clean code structure ready for a future backend.',
  }
];

const Results = () => {
  const { ref, isInView } = useInViewMotion();
  const [imageStep, setImageStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageStep((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="results" ref={ref} aria-label="Results and metrics" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Results</h2>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">
              One standout project from each specialist
            </p>
          </div>
          <p className="hidden sm:block max-w-sm text-xs text-slate-400">
            A quick look at how each team member contributes: one key project for marketing, design, and tech with the
            main tools they used.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/60 shadow-soft flex flex-col"
            >
              <div className="relative h-40 sm:h-52 overflow-hidden border-b border-slate-800/70 bg-slate-950/80">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={project.images[imageStep % project.images.length]}
                    src={project.images[imageStep % project.images.length]}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -40, opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
                <span className="absolute left-3 top-3 rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] text-slate-200">
                  {project.tech}
                </span>
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <h3 className="text-sm font-semibold text-slate-50">{project.title}</h3>
                <p className="mt-1 text-[11px] text-slate-400">By {project.name}</p>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed flex-1">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
