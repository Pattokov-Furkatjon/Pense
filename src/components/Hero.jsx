import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 },
  },
};

function Hero() {
  return (
    <motion.section
      className="section hero"
      id="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Smart finance, zero friction</p>
          <h1 className="hero__title">
            Track your expenses
            <br />
            &amp; save more money.
          </h1>
          <p className="hero__subtitle">
            Pense helps you organize income, control spending, and get
            real-time visibility across all your accounts.
          </p>
          <div className="hero__actions">
            <button type="button" className="btn btn--primary">
              Try free demo
            </button>
            <span className="hero__note">Available on Web, iOS &amp; Android</span>
          </div>
        </div>
        <motion.div
          className="hero__illustration"
          variants={cardVariants}
          initial="initial"
          animate="visible"
        >
          <motion.div
            className="hero__card hero__card--primary"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="hero__metric">
              <span className="hero__metric-label">Monthly spend</span>
              <span className="hero__metric-value">$4,320</span>
            </div>
            <div className="hero__metric hero__metric--secondary">
              <span className="hero__metric-label">Savings this month</span>
              <span className="hero__metric-value">+$540</span>
            </div>
            <div className="hero__chart" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;

