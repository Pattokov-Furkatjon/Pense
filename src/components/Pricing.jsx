import React from 'react';
import { IoCheckmark } from 'react-icons/io5';
import ScrollReveal from './ScrollReveal';

const PLANS = [
  {
    name: 'Starter',
    price: '$9',
    cadence: '/month',
    popular: false,
    features: ['Up to 3 accounts', 'Basic expense categories', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$19',
    cadence: '/month',
    popular: true,
    features: ['Unlimited accounts', 'Smart budgeting & alerts', 'Priority support'],
  },
  {
    name: 'Business',
    price: '$39',
    cadence: '/month',
    popular: false,
    features: ['Team workspaces', 'Advanced reporting', 'Dedicated manager'],
  },
];

function Pricing() {
  return (
    <section className="section section--muted" id="pricing">
      <div className="container">
        <ScrollReveal>
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-title">Choose a flexible plan that scales with you.</h2>
        </ScrollReveal>
        <div className="pricing__grid">
          {PLANS.map((plan, idx) => (
            <ScrollReveal
              key={plan.name}
              as="article"
              className={`card pricing-card${plan.popular ? ' pricing-card--popular' : ''}`}
              delay={idx * 0.06}
            >
              {plan.popular && <div className="pricing-card__badge">Most popular</div>}
              <h3 className="pricing-card__name">{plan.name}</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__price-main">{plan.price}</span>
                <span className="pricing-card__price-cadence">{plan.cadence}</span>
              </div>
              <ul className="pricing-card__features">
                {plan.features.map((item) => (
                  <li key={item}>
                    <IoCheckmark />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button type="button" className="btn btn--outline">
                Get started
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

