import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const About = () => {
  const { ref, isInView } = useInViewMotion();

  return (
    <section id="about" ref={ref} aria-label="About EcomAbdullah" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">About</h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300"
            >
              EcomAbdullah is a small, focused team that brings marketing, design, and development together under one
              roof. We build ecommerce experiences that feel premium, load fast, and are engineered from day one to
              convert consistently.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.22, duration: 0.45 }}
              className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300"
            >
              Together we cover the full funnel: performance marketing and strategy, UI/UX and brand visuals, and the
              technical builds that keep everything stable. Our job is to understand your numbers, simplify your
              stack, and focus on a small set of needle‑moving experiments—better product pages, cleaner tracking,
              higher‑quality traffic, and strong email flows.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="mt-4 space-y-2 text-xs text-slate-300"
            >
              <li>• Clear communication and weekly update check‑ins with the team</li>
              <li>• Transparent reporting and dashboards you actually use</li>
              <li>• Clean builds, minimal bloat, and fast load times</li>
              <li>• Long‑term partnerships, not one‑off projects</li>
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mt-3 lg:mt-5 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 sm:p-5 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              How we&apos;ll work together
            </p>
            <ol className="mt-3 space-y-2 text-[11px] text-slate-300">
              <li>
                <span className="font-medium text-slate-100">1. Free consultation</span> – we discuss your store,
                numbers, and goals together.
              </li>
              <li>
                <span className="font-medium text-slate-100">2. Roadmap</span> – we send a clear, scoped plan with
                timelines and pricing so you know exactly what will happen.
              </li>
              <li>
                <span className="font-medium text-slate-100">3. Build & launch</span> – store, tracking, and campaigns
                set up with weekly progress updates.
              </li>
              <li>
                <span className="font-medium text-slate-100">4. Optimize</span> – continuous CRO and campaign
                improvements based on real data.
              </li>
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
