import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { platformFeatures } from '../data/content';
import './Platform.css';

export default function Platform() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="platform" id="platform" ref={ref}>
      <div className="container">
        <motion.div
          className="platform__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Your entire business, in one app</p>
          <h2 className="section-title">Complete Distribution Platform</h2>
          <p className="section-subtitle">
            Manage clients, products, and payouts with Elevest’s modern dashboard — built for
            India’s distributors, available through Finocube.
          </p>
        </motion.div>

        <div className="platform__grid">
          {platformFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="platform__card glass liquid-glass"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <span className="platform__index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
