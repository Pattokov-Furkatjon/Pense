import React from 'react';

function CTA() {
  return (
    <section className="section cta" id="cta">
      <div className="container cta__inner">
        <div className="cta__copy">
          <h2 className="section-title">
            Start managing your finances with more confidence today.
          </h2>
          <p className="section-subtitle">
            Create a free account in minutes and see how much you could save this
            month.
          </p>
        </div>
        <div className="cta__actions">
          <button type="button" className="btn btn--primary btn--large">
            Get started for free
          </button>
          <button type="button" className="btn btn--ghost">
            Talk to sales
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;

