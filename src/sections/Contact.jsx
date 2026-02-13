import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const Contact = () => {
  const { ref, isInView } = useInViewMotion();

  const handleSubmitClick = () => {
    const whatsappNumber = '923206844757';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="contact" ref={ref} aria-label="Contact EcomAbdullah" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.05fr)] items-start">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Contact</h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-50"
            >
              Let&apos;s plan your next launch together
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl"
            >
              Share your brand, current performance, and where you want to be in the next 3–6 months. Our team reviews
              every brief and replies within 24 hours with next steps, a rough roadmap, and potential timelines.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.26, duration: 0.45 }}
              className="mt-2 text-xs sm:text-[13px] text-slate-400 max-w-xl"
            >
              Best fit if you&apos;re serious about growing an existing store or launching one with a real budget for
              creative, ads, and development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-4 flex flex-wrap items-center gap-3 text-xs"
            >
              <a
                href="mailto:info.ecomabdullah@gmail.com"
                 className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 px-4 py-2 text-xs sm:text-sm font-medium text-slate-50 border border-slate-600/70 shadow-soft transition transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span>✉️</span>
                <span>Email</span>
              </a>
              <a
                href="https://wa.me/923206844757"
                target="_blank"
                rel="noreferrer"
                 className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs sm:text-sm font-medium text-emerald-50 shadow-soft border border-emerald-500/80 transition transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
              <span className="inline-flex items-center rounded-full border border-slate-800/80 bg-slate-950/80 px-3 py-1 text-[11px] text-slate-400">
                ⏱️ Typical response time: &lt; 24 hours • Limited new projects per month
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.24, duration: 0.45 }}
            className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 sm:p-5 shadow-soft"
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-4 text-xs sm:text-sm"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human:
                  <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <label htmlFor="name" className="block text-[11px] font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 outline-none ring-0 transition focus:border-accent.blue/80 focus:ring-2 focus:ring-accent.blue/40"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label htmlFor="email" className="block text-[11px] font-medium text-slate-300">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 outline-none ring-0 transition focus:border-accent.blue/80 focus:ring-2 focus:ring-accent.blue/40"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label htmlFor="budget" className="block text-[11px] font-medium text-slate-300">
                  Approximate budget (optional)
                </label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 outline-none ring-0 transition focus:border-accent.blue/80 focus:ring-2 focus:ring-accent.blue/40"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-medium text-slate-300">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 outline-none ring-0 transition focus:border-accent.blue/80 focus:ring-2 focus:ring-accent.blue/40"
                  placeholder="Tell us about your store, current performance, and what success looks like."
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmitClick}
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-50 shadow-soft border border-slate-600/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Submit inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
