import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const teamMembers = [
  {
    id: 'abdullah',
    name: 'Muhammad Abdullah',
    role: 'E-commerce & Marketing',
    specialty: 'Meta Ads, TikTok Ads, Shopify stores, WordPress funnels',
    bio: 'Leads performance marketing and store strategy — turning traffic into sales across Shopify, TikTok, and Meta.',
    portfolioHref: '/portfolio/abdullah',
    imageSrc: '/Abdullah.jpeg'
  },
  {
    id: 'hammad',
    name: 'Hammad Ahmad',
    role: 'UI/UX & Graphic Design',
    specialty: 'Graphic design, UI/UX, logo design, brand assets',
    bio: 'Designs clean, conversion-focused interfaces and brand systems for stores, landing pages, and social content.',
    portfolioHref: '/portfolio/hammad',
    imageSrc: '/Hammad.jpeg'
  },
  {
    id: 'saad',
    name: 'Muhammad Saad',
    role: 'Tech & Development',
    specialty: 'Website building, software & application development',
    bio: 'Builds and maintains the tech: fast websites, internal tools, and apps using modern front-end and .NET back-end stacks.',
    portfolioHref: '/portfolio/saad',
    imageSrc: '/Saad.jpeg'
  }
];

const Team = () => {
  const { ref, isInView } = useInViewMotion();

  return (
    <section id="team" ref={ref} aria-label="Meet the team" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Team</h2>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">
              The people behind EcomAbdullah
            </p>
          </div>
          <p className="hidden sm:block max-w-sm text-xs text-slate-400">
            A small team covering marketing, design, and development so every project has a specialist for each part of
            the funnel.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 sm:p-5 shadow-soft"
            >
              <div className="relative flex items-center gap-3">
                <div className="h-12 w-12 rounded-full border border-slate-800/80 bg-slate-900/80 overflow-hidden flex items-center justify-center">
                  <img
                    src={member.imageSrc}
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

              <p className="mt-3 text-xs text-slate-300 leading-relaxed flex-1">{member.bio}</p>
              <p className="mt-2 text-[11px] text-slate-400">Speciality: {member.specialty}</p>

              <div className="mt-4">
                <Link
                  to={member.portfolioHref}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 px-4 py-2 text-xs sm:text-sm font-medium text-slate-50 border border-slate-600/70 shadow-soft transition transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  View portfolio
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
