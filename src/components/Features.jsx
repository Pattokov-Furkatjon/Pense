import React from 'react';
import { MdOutlineInsights, MdSecurity, MdSavings } from 'react-icons/md';
import { RiFundsLine } from 'react-icons/ri';
import ScrollReveal from './ScrollReveal';

const FEATURES = [
  {
    icon: <RiFundsLine />,
    title: 'Expense Tracking',
    description: 'Automatically categorize every transaction across cards and accounts.',
  },
  {
    icon: <MdSavings />,
    title: 'Smart Budgeting',
    description: 'Create flexible budgets and get alerts before you overspend.',
  },
  {
    icon: <MdOutlineInsights />,
    title: 'Financial Insights',
    description: 'Spot trends, recurring charges, and saving opportunities instantly.',
  },
  {
    icon: <MdSecurity />,
    title: 'Secure Data',
    description: 'Bank‑grade encryption and read‑only connections keep money safe.',
  },
];

function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <ScrollReveal>
          <p className="section-eyebrow">Powerful features</p>
          <h2 className="section-title">Everything you need to stay in control.</h2>
          <p className="section-subtitle">
            From everyday expenses to long‑term goals, Pense keeps your finances clear,
            organized, and easy to act on.
          </p>
        </ScrollReveal>

        <div className="features__grid">
          {FEATURES.map((feature, idx) => (
            <ScrollReveal key={feature.title} as="article" className="card feature-card" delay={idx * 0.05}>
              <div className="feature-card__icon">{feature.icon}</div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

