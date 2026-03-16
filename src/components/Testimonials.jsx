import React from 'react';
import sur from '../comm/photoone.png';
import suu from '../comm/phototwo.png';
import srr from '../comm/photothri.png';

const TESTIMONIALS = [
  {
    name: 'Cameron Williamson',
    role: 'Founder, Finch Studio',
    avatar: sur,
    quote:
      'Pense turned a messy spreadsheet habit into a simple, beautiful workflow. Our team finally knows where money is going.',
  },
  {
    name: 'Savannah Nguyen',
    role: 'Product Lead, NeonBank',
    avatar: suu,
    quote:
      'The real‑time insights and budgeting alerts helped me cut 18% of unnecessary spend in the first month.',
  },
  {
    name: 'Jacob Jones',
    role: 'Freelance Designer',
    avatar: srr,
    quote:
      'I check Pense every morning. It keeps my invoices, expenses, and savings all in one calm dashboard.',
  },
];

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <p className="section-eyebrow">Testimonials</p>
        <h2 className="section-title">Loved by modern teams and solo founders.</h2>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((item) => (
            <article key={item.name} className="card testimonial-card">
              <p className="testimonial-card__quote">“{item.quote}”</p>
              <div className="testimonial-card__footer">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonial-card__avatar"
                />
                <div>
                  <div className="testimonial-card__name">{item.name}</div>
                  <div className="testimonial-card__role">{item.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

