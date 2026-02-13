import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const teamMembers = [
  {
    id: 'abdullah',
    name: 'Muhammad Abdullah',
    role: 'Marketing & E‑commerce Lead',
    specialty: 'Meta ads, TikTok ads, Shopify, WordPress – in short, performance marketing.',
    photo: '/Team/abdullah.jpg',
    portfolioHref: '#portfolio-abdullah'
  },
  {
    id: 'hammad',
    name: 'Hammad Ahmad',
    role: 'UI/UX & Visual Designer',
    specialty: 'Graphic design, UI/UX design, and logo design for brands that want to stand out.',
    photo: '/Team/hammad.jpg',
    portfolioHref: '#portfolio-hammad'
  },
  {
    id: 'saad',
    name: 'Muhammad Saad',
    role: 'Tech & Development Specialist',
    specialty: 'Website building, software and application development, and full technical setup.',
    photo: '/Team/saad.jpg',
    portfolioHref: '#portfolio-saad'
  }
];

const Services = () => {
  const { ref, isInView } = useInViewMotion();

  return (
    <section id="team" ref={ref} aria-label="Meet the EcomAbdullah team" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Team</h2>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">
              Meet the people behind EcomAbdullah
            </p>
          </div>
          <p className="hidden sm:block max-w-sm text-xs text-slate-400">
            Three specialists, one unified brand: marketing, UI/UX & graphics, and tech development working together
            on every project.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 sm:p-5 shadow-soft"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-accent.blue/15 via-transparent to-accent.purple/15" />
              <div className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-900/80 border border-slate-700/80 overflow-hidden flex items-center justify-center">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">{member.name}</h3>
                    <p className="text-[11px] text-slate-400">{member.role}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed flex-1">{member.specialty}</p>
                <a
                  href={member.portfolioHref}
                  className="mt-2 inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 hover:border-accent.blue/80 hover:text-white transition-colors"
                >
                  View {member.name.split(' ')[1]}'s portfolio
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
