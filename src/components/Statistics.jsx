import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { label: 'Active users', value: 10000, suffix: '+', id: 'users' },
  { label: 'Money tracked', value: 2000000, prefix: '$', suffix: '+', id: 'tracked' },
  { label: 'Customer satisfaction', value: 95, suffix: '%', id: 'satisfaction' },
];

const formatValue = (value, id) => {
  if (id === 'tracked') {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
  }
  if (id === 'users' && value >= 1000) {
    return `${(value / 1000).toFixed(0)}k`;
  }
  return Math.round(value);
};

function Statistics() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState(
    STATS.reduce((acc, stat) => ({ ...acc, [stat.id]: 0 }), {}),
  );
  const sectionRef = useRef(null);

  useEffect(() => {
    if (hasAnimated) {
      return;
    }

    const node = sectionRef.current;
    if (!node) return;

    let frameId;
    const duration = 1200;

    const animate = () => {
      const start = performance.now();

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const nextValues = {};

        STATS.forEach((stat) => {
          nextValues[stat.id] = stat.value * progress;
        });

        setDisplayValues(nextValues);

        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        }
      };

      frameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [hasAnimated]);

  return (
    <section className="section" id="statistics" ref={sectionRef}>
      <div className="container stats">
        <div className="stats__intro">
          <p className="section-eyebrow">By the numbers</p>
          <h2 className="section-title">Trusted by people who care about money.</h2>
          <p className="section-subtitle">
            Tens of thousands of users rely on Pense to track millions in spend and
            savings every single day.
          </p>
        </div>
        <div className="stats__grid">
          {STATS.map((stat) => (
            <article key={stat.id} className="card stat-card">
              <div className="stat-card__value">
                {stat.prefix}
                {formatValue(displayValues[stat.id] || 0, stat.id)}
                {stat.suffix}
              </div>
              <div className="stat-card__label">{stat.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;

