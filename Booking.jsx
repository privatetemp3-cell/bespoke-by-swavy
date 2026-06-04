/* Booking.jsx — BookingCTA, Contact, Footer */
/* All booking actions link directly to Booksy — no modal. */

/* ---------- BOOKING CTA BAND ---------- */
function BookingCTA() {
  return (
    <section id="book" style={{ position: 'relative', background: 'var(--espresso)', color: 'var(--fg1)', padding: 'clamp(64px,9vw,120px) 24px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', right: '-8%', top: '-30%', background: 'radial-gradient(circle, var(--gold-glow), transparent 68%)', pointerEvents: 'none' }}></div>
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <Reveal style={{ display: 'flex', justifyContent: 'center' }}>
          <Eyebrow>Ready When You Are</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(32px,5vw,60px)', lineHeight: 1.02, margin: '18px 0 0', letterSpacing: '.01em' }}>
            Book your chair at <span style={{ fontFamily: 'var(--font-script)', fontWeight: 400, color: 'var(--gold-light)', fontSize: '1.1em' }}>Bespoke</span>.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px,1.5vw,18px)', lineHeight: 1.6, color: 'var(--fg2)', margin: '20px auto 0', maxWidth: 480 }}>
            Precision cuts, fades, beard work and tailored grooming. Pick a time that suits you — the rest is on us.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
            <Btn size="lg" href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" icon="scissors">
              Book Your Cut
            </Btn>
            <Btn size="lg" variant="secondary" icon="calendar"
              href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
              Book Appointment
            </Btn>
          </div>
          {/* Booksy trust badge */}
          <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 22, textDecoration: 'none',
              background: 'rgba(194,154,76,0.08)', border: '1px solid var(--hairline-gold)',
              borderRadius: 'var(--r-pill)', padding: '8px 16px' }}>
            <span style={{ display: 'flex', gap: 2 }}>
              {[0,1,2,3,4].map(i => <Icon key={i} name="star" size={13} style={{ color: 'var(--gold)' }} className="star-fill" />)}
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--gold-light)' }}>5.0</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg3)' }}>· 71 reviews on Booksy</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CONTACT / HOURS ---------- */
const HOURS = [
  ['Mon – Thu', '9:00 — 19:00'],
  ['Friday',    '9:00 — 20:00'],
  ['Saturday',  '8:00 — 18:00'],
  ['Sunday',    'Closed'],
];

const CONTACT_ITEMS = [
  {
    ic: 'map-pin',
    t: 'Visit the studio',
    d: '21a Hartington Rd, Middlesbrough TS1 5ED',
    href: 'https://maps.google.com/?q=21a+Hartington+Rd+Middlesbrough+TS1+5ED',
  },
  {
    ic: 'phone',
    t: 'Call or text',
    d: '07482 826876',
    href: 'tel:07482826876',
  },
  {
    ic: 'at-sign',
    t: 'Follow the work',
    d: '@bespokebyswavy',
    href: 'https://www.instagram.com/bespokebyswavy/',
  },
];

function Contact() {
  return (
    <Section id="contact" style={{ background: 'var(--ivory)' }}>
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,5vw,64px)' }}>
        <div>
          <SectionHead eyebrow="Find Us" title="Visit the studio." />
          <div style={{ display: 'grid', gap: 18 }}>
            {CONTACT_ITEMS.map(({ ic, t, d, href }) => (
              <Reveal key={t}>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ display: 'flex', gap: 16, alignItems: 'flex-start', textDecoration: 'none' }}>
                  <div style={{ flex: 'none', width: 42, height: 42, borderRadius: 'var(--r-md)', background: 'var(--ink)', display: 'grid', placeItems: 'center' }}>
                    <Icon name={ic} size={19} style={{ color: 'var(--gold-light)' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, color: 'var(--ink-fg1)' }}>{t}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--ink-fg2)', marginTop: 3 }}>{d}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={120}>
          <div style={{ background: 'var(--ink)', borderRadius: 'var(--r-lg)', padding: 32, boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <Icon name="clock" size={18} style={{ color: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>Opening Hours</span>
            </div>
            {HOURS.map(([d, h], i) => (
              <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '13px 0', borderBottom: i < HOURS.length - 1 ? '1px solid var(--line-dark)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--fg1)' }}>{d}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: h === 'Closed' ? 'var(--fg3)' : 'var(--gold-light)', fontWeight: 500 }}>{h}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const go = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  };
  return (
    <footer style={{ background: 'var(--ink)', borderTop: '1px solid var(--line-dark)', padding: '64px 24px 36px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'flex', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ maxWidth: 320 }}>
            <Logo />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg3)', lineHeight: 1.6, marginTop: 18 }}>
              Bespoke barbering, shaped around you. Precision cuts for every hair type.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
            <div>
              <div className="overline" style={{ color: 'var(--gold)', marginBottom: 14 }}>Explore</div>
              <div style={{ display: 'grid', gap: 10 }}>
                {['Services', 'Gallery', 'About', 'Reviews', 'Contact'].map(l => (
                  <a key={l} onClick={() => go(l)} style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg2)', cursor: 'pointer' }}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="overline" style={{ color: 'var(--gold)', marginBottom: 14 }}>Book</div>
              <Btn size="sm" href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" icon="scissors">
                Book Your Cut
              </Btn>
              <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
                {[
                  { ic: 'at-sign', label: 'Instagram',    href: 'https://www.instagram.com/bespokebyswavy/' },
                  { ic: 'phone',   label: 'Call us',      href: 'tel:07482826876' },
                  { ic: 'map-pin', label: 'Get directions', href: 'https://maps.google.com/?q=21a+Hartington+Rd+Middlesbrough+TS1+5ED' },
                ].map(({ ic, label, href }) => (
                  <a key={ic} href={href} aria-label={label}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ width: 38, height: 38, borderRadius: 'var(--r-pill)', border: '1px solid var(--line-dark-2)', display: 'grid', placeItems: 'center', textDecoration: 'none', transition: 'border-color var(--dur-fast)' }}>
                    <Icon name={ic} size={16} style={{ color: 'var(--fg2)' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--line-dark)', marginTop: 44, paddingTop: 22, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--fg3)' }}>
            &copy; {new Date().getFullYear()} Bespoke Studios by Swavy. All rights reserved.
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--fg3)' }}>
            Local barbering with a premium finish.
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { BookingCTA, Contact, Footer });
