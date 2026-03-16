import React from 'react';
import { FiLink2, FiTrendingUp, FiPieChart } from 'react-icons/fi';

const STEPS = [
  {
    icon: <FiLink2 />,
    label: 'Connect your accounts',
    text: 'Securely link your bank accounts and cards in minutes.',
  },
  {
    icon: <FiPieChart />,
    label: 'Track automatically',
    text: 'Every transaction is categorized and synced in real time.',
  },
  {
    icon: <FiTrendingUp />,
    label: 'Analyze & save',
    text: 'See insights, cut wasteful spend, and grow your savings.',
  },
];

function HowItWorks() {
  return (
    <section className="section section--muted" id="how-it-works">
      <div className="container">
        <p className="section-eyebrow">How it works</p>
        <h2 className="section-title">From chaos to clarity in three steps.</h2>
        <div className="how__grid">
          {STEPS.map((step, index) => (
            <article key={step.label} className="card how-card">
              <div className="how-card__step">0{index + 1}</div>
              <div className="how-card__icon">{step.icon}</div>
              <h3 className="how-card__title">{step.label}</h3>
              <p className="how-card__text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

