import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { company } from '../data/content';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact__layout">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Let&apos;s Connect</p>
            <h2 className="section-title">Ready to grow with Sippo?</h2>
            <p className="section-subtitle">
              Book a complimentary conversation about your goals, risk profile, and the right
              product mix for your household.
            </p>

            <div className="contact__details">
              <div className="contact__details-row">
                <div className="contact__detail glass">
                  <span className="contact__detail-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>{company.phone}</p>
                  </div>
                </div>
                <div className="contact__detail glass">
                  <span className="contact__detail-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>{company.email}</p>
                  </div>
                </div>
              </div>
              <div className="contact__detail glass">
                <span className="contact__detail-icon">🛡️</span>
                <div>
                  <strong>How we help</strong>
                  <p>
                    Expert-led, smart, swift, and secure guidance across Mutual Funds, FDs, Bonds,
                    and Loans.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-strong liquid-glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">🎉</span>
                <h3>Wonderful — we can&apos;t wait to meet you!</h3>
                <p>
                  We&apos;ll reach out shortly to schedule your conversation. Your Sippo journey
                  begins here.
                </p>
                <p className="contact__privacy">{company.privacyNote}</p>
              </div>
            ) : (
              <>
                <h3>Get in Touch</h3>
                <p className="contact__privacy">{company.privacyNote}</p>
                <div className="contact__form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" />
                <select defaultValue="">
                  <option value="" disabled>What brings you here?</option>
                  <option>Mutual Funds / SIP</option>
                  <option>Fixed Deposits</option>
                  <option>Bonds</option>
                  <option>Personal Loans</option>
                  <option>Retirement Planning</option>
                  <option>Portfolio Review</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Tell us about your goals..." rows={4} />
                <button type="submit" className="btn-primary contact__submit">
                  Let&apos;s Begin →
                </button>
                <p className="contact__privacy contact__privacy--footer">{company.privacyNote}</p>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
