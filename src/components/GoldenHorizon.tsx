import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { goldenHorizon, goldenHorizonProducts } from '../data/content';
import './GoldenHorizon.css';

export default function GoldenHorizon() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="gh" id="retirement" ref={ref}>
      <div className="container">
        <motion.div
          className="gh__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">{goldenHorizon.brand}</p>
          <h2 className="section-title">{goldenHorizon.suiteName}</h2>
          <p className="section-subtitle">{goldenHorizon.tagline}</p>
        </motion.div>

        <div className="gh__grid">
          {goldenHorizonProducts.map((product, i) => (
            <motion.article
              key={product.id}
              className={`gh__card glass liquid-glass gh__card--${product.id}`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="gh__card-top">
                <span className="gh__tag">{product.tag}</span>
                <span className="gh__theme">{product.theme}</span>
              </div>
              <h3>{product.title}</h3>
              <p className="gh__desc">{product.description}</p>
              <ul className="gh__highlights">
                {product.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={product.href}
                className="btn-primary gh__cta"
                target="_blank"
                rel="noreferrer"
              >
                Open {product.title}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="gh__footer glass"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
        >
          <p>{goldenHorizon.note}</p>
          <div className="gh__links">
            <a href={goldenHorizon.url} target="_blank" rel="noreferrer">
              Launch suite →
            </a>
            <a href={goldenHorizon.guideUrl} target="_blank" rel="noreferrer">
              User guide
            </a>
            <a href={goldenHorizon.repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
