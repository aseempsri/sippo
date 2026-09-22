import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RunningBoldText from './RunningBoldText';
import {
  aboutStory,
  approachPoints,
  company,
  goal,
  missionPillars,
  openingQuote,
  philosophyBlend,
  stats,
  vision,
} from '../data/content';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.header
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">About Sippo</p>
          <h2 className="section-title">One-stop growth. Built around you.</h2>
          <blockquote className="about__pull-quote">
            &ldquo;{openingQuote}&rdquo;
          </blockquote>
        </motion.header>

        <div className="about__intro about__intro--solo">
          <RunningBoldText
            active={inView}
            className="about__story"
            paragraphs={[
              aboutStory.intro,
              aboutStory.origin,
              aboutStory.today,
            ]}
          />

          <motion.aside
            className="about__partner glass liquid-glass"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="about__partner-badge">For Clients</span>
            <h3>{company.name}</h3>
            <p className="about__partner-of">Expert-led · Smart · Swift · Secure</p>
            <p className="about__partner-bio">
              One platform for Mutual Funds, FDs, Bonds, and Loans — with digital onboarding,
              clear portfolios, and personalised guidance for every household.
            </p>
            <div className="about__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about__stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <motion.div
          className="about__purpose glass-strong liquid-glass"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="about__purpose-inner">
            <div className="about__philosophy">
              <p className="section-label">Our Philosophy</p>
              <h3>Two strengths, one approach</h3>
              <ul>
                {philosophyBlend.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about__vision-row">
              <div className="about__vision-card">
                <span className="about__vision-label">Vision</span>
                <p>{vision}</p>
              </div>
              <div className="about__vision-card">
                <span className="about__vision-label">Goal</span>
                <p>{goal}</p>
              </div>
            </div>
            <p className="about__closing">{aboutStory.closing}</p>
          </div>
        </motion.div>

        <motion.div
          className="about__block"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
        >
          <div className="about__block-header about__block-header--center">
            <p className="section-label">Our Approach</p>
            <h3 className="about__block-title">Discipline. Clarity. Confidence.</h3>
          </div>
          <div className="about__approach-grid">
            {approachPoints.map((item, i) => (
              <motion.div
                key={item.title}
                className="about__approach-card glass"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <span className="about__approach-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about__block about__block--last"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
        >
          <div className="about__block-header about__block-header--center">
            <p className="section-label">Our Mission</p>
            <h3 className="about__block-title">Five pillars of everything we do</h3>
          </div>
          <div className="about__pillars-grid">
            {missionPillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                className="about__pillar glass"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <span className="about__pillar-number">{pillar.number}</span>
                <h4>{pillar.title}</h4>
                <p>{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
