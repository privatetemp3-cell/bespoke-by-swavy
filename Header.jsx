/* Header.jsx — sticky translucent navigation */
const { useState: useStateH, useEffect: useEffectH } = React;

function Logo({ small }) {
  return (
    <div style={{ lineHeight: 1, textAlign: 'left', userSelect: 'none' }}>
      <span style={{ fontFamily: 'var(--font-script)', fontSize: small ? 30 : 34, color: 'var(--gold-light)', display: 'block', marginBottom: -4 }}>Bespoke</span>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: small ? 10 : 11, letterSpacing: '.42em', color: 'var(--fg1)', paddingLeft: '.42em' }}>STUDIOS</span>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useStateH(false);
  const [open, setOpen] = useStateH(false);

  useEffectH(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Services', 'Why Us', 'Gallery', 'About', 'Reviews', 'Contact'];
  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all var(--dur) var(--ease-out)',
      background: scrolled ? 'rgba(21,18,14,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-dark)' : '1px solid transparent',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        height: scrolled ? 66 : 84, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', transition: 'height var(--dur) var(--ease-out)',
      }}>
        <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
          <Logo small={scrolled} />
        </a>
        <nav className="desk-nav" aria-label="Main" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map(l => (
            <a key={l} onClick={() => go(l)} className="nav-link"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--fg2)', cursor: 'pointer', letterSpacing: '.02em' }}>
              {l}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="desk-nav">
            <Btn size="sm" href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" icon="scissors">
              Book Your Cut
            </Btn>
          </div>
          <button className="burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu"
            style={{ display: 'none', background: 'none', border: 'none', color: 'var(--fg1)', cursor: 'pointer', padding: 6 }}>
            <Icon name={open ? 'x' : 'menu'} size={26} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div style={{
        overflow: 'hidden', transition: 'max-height var(--dur) var(--ease-out)',
        maxHeight: open ? 460 : 0, background: 'rgba(21,18,14,0.97)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderBottom: open ? '1px solid var(--line-dark)' : 'none',
      }}>
        <div style={{ padding: '12px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(l => (
            <a key={l} onClick={() => go(l)} style={{ padding: '13px 0', fontFamily: 'var(--font-sans)', fontSize: 17, color: 'var(--fg1)', borderBottom: '1px solid var(--line-dark)', cursor: 'pointer' }}>
              {l}
            </a>
          ))}
          <Btn full href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" icon="scissors" style={{ marginTop: 14 }}>
            Book Your Cut
          </Btn>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Header, Logo });
