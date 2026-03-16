import React from 'react';
import face from '../comm/fece.png';
import gogg from '../comm/gogg.png';
import cola from '../comm/cola.png';
import lin from '../comm/in.png';
import sung from '../comm/sumg.png';

const INTEGRATIONS = [
  { name: 'Google', logo: gogg },
  { name: 'Stripe', logo: cola },
  { name: 'Slack', logo: sung },
  { name: 'PayPal', logo: face },
  { name: 'LinkedIn', logo: lin },
];

function Integrations() {
  return (
    <section className="section section--muted" id="integrations">
      <div className="container integrations">
        <div className="integrations__intro">
          <p className="section-eyebrow">Integrations</p>
          <h2 className="section-title">Works with the tools you already use.</h2>
          <p className="section-subtitle">
            Connect your favorite banks, payment processors and productivity tools in
            a few clicks.
          </p>
        </div>
        <div className="integrations__grid">
          {INTEGRATIONS.map((item) => (
            <div key={item.name} className="integrations__logo card">
              <img src={item.logo} alt={item.name} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrations;

