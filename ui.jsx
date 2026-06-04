/* ui.jsx — Bespoke Studios shared primitives
   Exposes: BOOKSY_URL, BRAND, Icon, Btn, Eyebrow, Divider, Reveal */

const { useRef, useEffect, useState } = React;

const BOOKSY_URL = 'https://booksy.com/en-gb/170447_bespoke-studios-by-swavy_barber_515951_middlesbrough';

const BRAND = {
  name: 'Bespoke Studios',
  by: 'by Swavy',
};

/* ---- Lucide icon wrapper (rendered via window.lucide.createIcons after mount) ---- */
function Icon({ name, size = 20, className = '', style = {}, strokeWidth = 1.75 }) {
  return (
    <i data-lucide={name} className={className}
       style={{ width: size, height: size, display: 'inline-flex', ...style }}
       data-stroke={strokeWidth}></i>
  );
}

/* ---- Button — renders as <a> when href is provided, <button> otherwise ---- */
function Btn({ children, variant = 'primary', size = 'md', icon, iconRight,
               onClick, href, target, rel, full, style = {} }) {
  const base = {
    fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '.02em',
    borderRadius: 'var(--r-pill)', cursor: 'pointer', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center', gap: 9, border: '1px solid transparent',
    transition: 'all var(--dur-fast) var(--ease-out)', whiteSpace: 'nowrap',
    textDecoration: 'none',
    width: full ? '100%' : 'auto',
    fontSize: size === 'lg' ? 17 : size === 'sm' ? 14 : 15,
    padding: size === 'lg' ? '17px 32px' : size === 'sm' ? '10px 18px' : '14px 26px',
    boxSizing: 'border-box',
  };
  const variants = {
    primary:   { background: 'var(--gold)', color: '#1a1206', boxShadow: 'var(--shadow-gold)' },
    secondary: { background: 'transparent', color: 'var(--fg1)', borderColor: 'var(--line-dark-2)' },
    light:     { background: 'var(--ink)', color: 'var(--ivory)' },
    ghost:     { background: 'transparent', color: 'var(--gold-light)',
                 padding: size === 'lg' ? '17px 10px' : '14px 8px', boxShadow: 'none' },
  };
  const [h, setH] = useState(false);
  const hov = h ? {
    primary:   { background: 'var(--gold-light)', transform: 'translateY(-2px)', boxShadow: '0 16px 50px var(--gold-glow)' },
    secondary: { borderColor: 'var(--gold)', color: 'var(--gold-light)' },
    light:     { transform: 'translateY(-2px)', boxShadow: 'var(--shadow-md)' },
    ghost:     { color: 'var(--gold)' },
  }[variant] : {};

  const merged = { ...base, ...variants[variant], ...hov, ...style };
  const handlers = { onMouseEnter: () => setH(true), onMouseLeave: () => setH(false) };
  const content = (
    <>
      {icon && <Icon name={icon} size={size === 'lg' ? 19 : 17} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === 'lg' ? 19 : 17} />}
    </>
  );

  if (href) {
    return <a href={href} target={target} rel={rel} style={merged} {...handlers}>{content}</a>;
  }
  return <button onClick={onClick} style={merged} {...handlers}>{content}</button>;
}

/* ---- Eyebrow label ---- */
function Eyebrow({ children, style = {} }) {
  return (
    <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 12, ...style }}>
      <span style={{ width: 28, height: 1, background: 'var(--hairline-gold)' }}></span>
      {children}
    </div>
  );
}

/* ---- Section divider with ornament ---- */
function Divider({ light }) {
  const c = light ? 'rgba(27,22,15,0.16)' : 'var(--hairline-gold)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, color: 'var(--gold)', justifyContent: 'center', maxWidth: 420, margin: '0 auto' }}>
      <span style={{ height: 1, flex: 1, background: c }}></span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 13 }}>&#10070;</span>
      <span style={{ height: 1, flex: 1, background: c }}></span>
    </div>
  );
}

/* ---- Reveal: pure CSS entrance animation ---- */
function Reveal({ children, delay = 0, y = 20, style = {}, as = 'div' }) {
  const Tag = as;
  return (
    <Tag className="reveal" style={{ ...style, animationDelay: `${delay}ms`, '--rev-y': `${y}px` }}>
      {children}
    </Tag>
  );
}

Object.assign(window, { BRAND, BOOKSY_URL, Icon, Btn, Eyebrow, Divider, Reveal });
