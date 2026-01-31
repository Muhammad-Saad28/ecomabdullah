import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="top" className="pt-2 sm:pt-4">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-300 shadow-soft"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent.blue to-accent.purple" />
            EcomAbdullah • E‑commerce, Design & Tech Studio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-semibold tracking-tight text-slate-50"
          >
            A unified team for <br className="hidden sm:block" />
            <span className="text-sky-300">
              e‑commerce growth, design & tech
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300"
          >
            EcomAbdullah is a three-person studio that covers the full ecommerce stack for brands: strategy and paid
            ads, UI/UX and visuals, and the technical builds that keep everything running fast. You work with one
            unified team, not separate freelancers, so every campaign, layout, and feature pulls in the same direction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#team"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-50 shadow-soft border border-slate-600/80 transition transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Meet the team
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 text-xs text-slate-300"
          >
            <div>
              <dt className="text-slate-400">Projects shipped</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-50">40+ stores & sites</dd>
            </div>
            <div>
              <dt className="text-slate-400">Core specialties</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-50">Marketing • UI/UX • Tech</dd>
            </div>
            <div>
              <dt className="text-slate-400">Team focus</dt>
              <dd className="mt-1 text-lg font-semibold text-emerald-400">End‑to‑end ecommerce</dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 shadow-soft">
            <img
              src="/main.png"
              alt="Abdullah Khalid working on Shopify and ads dashboards"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between text-[11px] text-slate-200">
              <span className="rounded-full bg-slate-950/70 px-3 py-1">
                Real Shopify & ad account results
              </span>
              <span className="hidden sm:inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">
                Proof‑driven, not guesswork
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
