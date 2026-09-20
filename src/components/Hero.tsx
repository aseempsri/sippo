import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import TypewriterTitle from './TypewriterTitle';
import { company, heroBadges, stats } from '../data/content';
import './Hero.css';

interface HeroProps {
  isMobileReady?: boolean;
}

export default function Hero({ isMobileReady = false }: HeroProps) {
  return (
    <section className={`hero hero--elevest${isMobileReady ? ' hero--mobile' : ''}`} id="home">
      <div className="hero__gradient" aria-hidden="true" />
      <div className="hero__pattern" aria-hidden="true" />
      <Scene3D />

      <div className="hero__content container">
        <div className="hero__main">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="section-label hero__eyebrow">Elevest Franchise Partner · {company.domain}</p>
            <TypewriterTitle />
            <motion.div
              className="hero__badges"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              {heroBadges.map((badge) => (
                <span key={badge} className="hero__badge">
                  {badge}
                </span>
              ))}
            </motion.div>
            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.8 }}
            >
              Distribute Mutual Funds, FDs, Bonds, and Loans while managing clients effortlessly —
              the Elevest experience, delivered locally by Finocube.
            </motion.p>
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3.1 }}
            >
              <a href="#contact" className="btn-primary">
                Get Started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#products" className="btn-secondary hero__btn-secondary">
                Explore Products
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__card glass-strong"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <div className="hero__card-top">
              <h2>Start in 2 minutes</h2>
              <span className="hero__card-badge">★ Free To Join</span>
            </div>
            <p className="hero__card-copy">
              Reach out with your mobile number — we&apos;ll help you onboard on the Elevest-powered
              Finocube platform.
            </p>
            <a href="#contact" className="btn-primary hero__card-cta">
              Start Selling →
            </a>
            <ul className="hero__card-checks">
              <li>AMFI-compliant network</li>
              <li>Elevest franchise partner</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="hero__stats glass liquid-glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="hero__stats-inner">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="hero__stat"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
