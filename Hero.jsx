/* Hero.jsx — scroll-spin floating clipper hero */
const { useRef: useRefHero, useEffect: useEffectHero, useState: useStateHero } = React;

function ClipperStage() {
  const videoRef = useRefHero(null);
  const floatRef = useRefHero(null);
  const curT = useRefHero(0);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 860px)').matches;

  // Desktop only: scroll-scrub the video timeline
  useEffectHero(() => {
    if (reduce || isMobile) return;
    const v = videoRef.current;
    if (!v) return;

    const apply = () => {
      const v2 = videoRef.current;
      if (!v2 || !v2.duration) return;
      let range = window.innerHeight;
      const fr = floatRef.current;
      if (fr) {
        const rect = fr.getBoundingClientRect();
        const topFromPage = rect.top + window.scrollY;
        range = topFromPage + rect.height * 0.80;
      }
      range = Math.max(range, window.innerHeight * 0.5);
      const p = Math.min(1, Math.max(0, window.scrollY / range));
      const t = p * (v2.duration - 0.05);
      curT.current += (t - curT.current) * 0.5;
      if (Math.abs(t - curT.current) < 0.02) curT.current = t;
      try { v2.currentTime = curT.current; } catch (e) {}
    };

    const onMeta = () => apply();
    v.addEventListener('loadedmetadata', onMeta);
    if (v.readyState >= 1) apply();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) { ticking = true; setTimeout(() => { apply(); ticking = false; }, 16); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      v.removeEventListener('loadedmetadata', onMeta);
    };
  }, [reduce, isMobile]);

  const maskCss = 'radial-gradient(ellipse 44% 58% at 50% 50%, #000 36%, transparent 76%)';
  const videoStyle = {
    position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
    WebkitMaskImage: maskCss, maskImage: maskCss, filter: 'drop-shadow(0 30px 50px rgba(0,0,0,.5))',
  };

  return (
    <div className="clipper-wrap" style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: '100%', height: '100%', paddingBottom: '6vh' }}>
      <div ref={floatRef} className="clipper-float" style={{ position: 'relative', width: '108%', maxWidth: 700, aspectRatio: '864 / 496' }}>
        {/* warm spotlight glow */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
          width: '128%', aspectRatio: '1', borderRadius: '50%', pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(224,194,126,0.15), rgba(224,194,126,0.045) 42%, transparent 70%)',
        }}></div>

        {/* poster — shown for reduced-motion users, hidden once video paints */}
        <img src="./clipper-poster.jpg" alt="Black Wahl Vapour clipper, floating" style={videoStyle} />

        {!reduce && (
          isMobile
            ? /* Mobile: autoplay looping spin — no scroll scrub needed */
              <video muted playsInline autoPlay loop preload="auto"
                poster="./clipper-poster.jpg" aria-hidden="true" style={videoStyle}>
                <source src="./clipper-spin.mp4" type="video/mp4" />
              </video>
            : /* Desktop: scroll-scrubbed — ref drives currentTime */
              <video ref={videoRef} muted playsInline preload="auto"
                poster="./clipper-poster.jpg" aria-hidden="true" style={videoStyle}>
                <source src="./clipper-spin.mp4" type="video/mp4" />
              </video>
        )}
      </div>
    </div>
  );
}

function Hero() {
  const isMobile = window.matchMedia('(max-width: 860px)').matches;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tall = !(isMobile || reduce);

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 72, boxSizing: 'border-box',
        background: 'radial-gradient(120% 90% at 80% 20%, var(--espresso) 0%, var(--ink) 55%)',
      }}>
        {/* warm grain overlay */}
        <div className="grain-layer" style={{
          position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}></div>

        <div className="hero-grid" style={{
          position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '40px 24px 56px',
          width: '100%', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 24, alignItems: 'center',
        }}>
          {/* headline + CTAs */}
          <div className="hero-text">
            <Reveal>
              <Eyebrow>Local &amp; Premium Barbering</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(40px,6vw,78px)', lineHeight: 0.99, color: 'var(--fg1)', margin: '20px 0 0', letterSpacing: '.01em' }}>
                Precision cuts<br />for <span style={{ fontFamily: 'var(--font-script)', fontWeight: 400, color: 'var(--gold-light)', fontSize: '1.18em', lineHeight: 0.8 }}>every</span> hair type.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px,1.5vw,19px)', lineHeight: 1.6, color: 'var(--fg2)', maxWidth: 460, margin: '22px 0 0' }}>
                Bespoke barbering, shaped around you. Clean fades, sharp trims and tailored grooming — finished with detail you can feel.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 32 }}>
                <Btn size="lg" href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" icon="scissors">
                  Book Your Cut
                </Btn>
                <Btn size="lg" variant="secondary" iconRight="arrow-right"
                  onClick={() => { const e = document.getElementById('services'); if (e) window.scrollTo({ top: e.offsetTop - 60, behavior: 'smooth' }); }}>
                  View Services
                </Btn>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 26, color: 'var(--fg3)', fontFamily: 'var(--font-sans)', fontSize: 14 }}>
                <Icon name="badge-check" size={17} style={{ color: 'var(--gold)' }} />
                Precision cuts, fades, beard work and tailored grooming
              </div>
            </Reveal>
          </div>

          {/* clipper — right column, vertically centred */}
          <div className="hero-visual" style={{ position: 'relative', minHeight: 'min(84vh, 680px)' }}>
            <ClipperStage />
          </div>
        </div>

        {tall && (
          <div style={{
            position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            color: 'var(--fg3)', fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase',
          }}>
            Scroll to explore
            <Icon name="chevron-down" size={18} style={{ color: 'var(--gold)' }} />
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { Hero, ClipperStage });
