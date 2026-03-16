import React from 'react';
import surat from '../comm/pol.png';

function DashboardPreview() {
  return (
    <section className="section dashboard" id="dashboard">
      <div className="container dashboard__inner">
        <div className="dashboard__copy">
          <p className="section-eyebrow">Interactive dashboard</p>
          <h2 className="section-title">
            See every transaction in one clean view.
          </h2>
          <p className="section-subtitle">
            Always online, always in sync. Connect your bank accounts and cards
            to get a real-time overview of cash flow, subscriptions, and
            savings.
          </p>
        </div>
        <div className="dashboard__preview-wrapper">
          <div className="dashboard__preview">
            <img src={surat} alt="Pense dashboard preview" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;

