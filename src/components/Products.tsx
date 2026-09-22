import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { products } from '../data/content';
import './Products.css';

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="products" id="products" ref={ref}>
      <div className="container">
        <motion.div
          className="products__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Products for you</p>
          <h2 className="section-title">One Platform. Four Ways to Grow.</h2>
          <p className="section-subtitle">
            Mutual Funds, Bonds, Fixed Deposits, and Personal Loans — everything you need in one
            place, guided by Sippo.
          </p>
        </motion.div>

        <div className="products__grid">
          {products.map((product, i) => (
            <motion.article
              key={product.title}
              className="products__card glass liquid-glass"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <span className="products__tag">{product.tag}</span>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <a href="#contact" className="products__cta">
                Get Started →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
