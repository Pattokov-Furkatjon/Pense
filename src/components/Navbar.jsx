import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function Navbar() {
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const firstMobileLinkRef = useRef(null);

  const items = useMemo(
    () => [
      { id: 'features', label: 'Features' },
      { id: 'dashboard', label: 'How it works' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'testimonials', label: 'Feedback' },
    ],
    [],
  );

  const closeMenu = useCallback(() => setOpen(false), []);

  const handleNavClick = useCallback((id) => {
    scrollToSection(id);
    closeMenu();
  }, [closeMenu]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.classList.add('scroll-lock');
    firstMobileLinkRef.current?.focus?.();

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('scroll-lock');
    };
  }, [closeMenu, open]);

  return (
    <header className="nav">
      <div className="nav__inner">
        <button type="button" className="nav__logo" onClick={() => handleNavClick('hero')}>
          Pense
        </button>
        <nav className="nav__links" aria-label="Primary navigation">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="nav__link"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`nav__burger${open ? ' nav__burger--open' : ''}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <button
          type="button"
          className="nav__cta"
          onClick={() => handleNavClick('cta')}
        >
          Request a demo
        </button>
      </div>
      <button
        type="button"
        className={`nav__backdrop${open ? ' nav__backdrop--open' : ''}`}
        aria-hidden="true"
        tabIndex={-1}
        onClick={closeMenu}
      />
      <div
        id={menuId}
        className={`nav__mobile${open ? ' nav__mobile--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="nav__mobile-inner">
          {items.map((item, idx) => (
            <button
              key={item.id}
              ref={idx === 0 ? firstMobileLinkRef : undefined}
              type="button"
              className="nav__mobile-link"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button type="button" className="btn btn--primary nav__mobile-cta" onClick={() => handleNavClick('cta')}>
            Request a demo
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

