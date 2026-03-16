import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">Pense</div>
          <p className="footer__tagline">
            Simple, modern finance tracking for people who care about every dollar.
          </p>
        </div>
        <div className="footer__nav">
          <div className="footer__column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#integrations">Integrations</a>
          </div>
          <div className="footer__column">
            <h4>Company</h4>
            <a href="#testimonials">Customers</a>
            <a href="#cta">Contact</a>
          </div>
          <div className="footer__column">
            <h4>Connect</h4>
            <div className="footer__social">
              <button type="button">in</button>
              <button type="button">f</button>
              <button type="button">•</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>© {new Date().getFullYear()} Pense. All rights reserved.</span>
          <div className="footer__legal">
            <button type="button">Privacy</button>
            <button type="button">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

