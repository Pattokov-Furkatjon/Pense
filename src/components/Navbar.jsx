import React, { useState } from 'react';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__logo">Pense</div>
        <nav className="nav__links">
          <button
            type="button"
            className="nav__link"
            onClick={() => handleNavClick('features')}
          >
            Features
          </button>
          <button
            type="button"
            className="nav__link"
            onClick={() => handleNavClick('dashboard')}
          >
            How it works
          </button>
          <button
            type="button"
            className="nav__link"
            onClick={() => handleNavClick('pricing')}
          >
            Pricing
          </button>
          <button
            type="button"
            className="nav__link"
            onClick={() => handleNavClick('testimonials')}
          >
            Feedback
          </button>
        </nav>
        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <button
          type="button"
          className="nav__cta"
          onClick={() => handleNavClick('cta')}
        >
          Request a demo
        </button>
      </div>
      <div className={`nav__mobile${open ? ' nav__mobile--open' : ''}`}>
        <button
          type="button"
          className="nav__mobile-link"
          onClick={() => handleNavClick('features')}
        >
          Features
        </button>
        <button
          type="button"
          className="nav__mobile-link"
          onClick={() => handleNavClick('dashboard')}
        >
          About
        </button>
        <button
          type="button"
          className="nav__mobile-link"
          onClick={() => handleNavClick('pricing')}
        >
          Pricing
        </button>
        <button
          type="button"
          className="nav__mobile-link"
          onClick={() => handleNavClick('testimonials')}
        >
          Feedback
        </button>
      </div>
    </header>
  );
}

export default Navbar;

