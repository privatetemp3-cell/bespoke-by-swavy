/* Sections.jsx — Services, WhyChoose, Gallery, About, Reviews */

/* shared section shell */
function Section({ id, dark, children, style = {} }) {
  return (
    <section id={id} style={{
      background: dark ? 'var(--ink)' : 'var(--ivory)',
      color: dark ? 'var(--fg1)' : 'var(--ink-fg1)',
      padding: 'clamp(64px, 9vw, 128px) 24px', position: 'relative', ...style,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub, light, center }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', maxWidth: center ? 720 : 640, margin: center ? '0 auto' : 0, marginBottom: 'clamp(40px,5vw,64px)' }}>
      <Reveal style={{ display: center ? 'flex' : 'block', justifyContent: 'center' }}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.04, margin: '16px 0 0', color: light ? 'var(--fg1)' : 'var(--ink-fg1)', letterSpacing: '.01em' }}>
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={140}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px,1.5vw,18px)', lineHeight: 1.6, color: light ? 'var(--fg2)' : 'var(--ink-fg2)', margin: '18px 0 0', maxWidth: 560, marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- SERVICES ---------- */
const SERVICES = [
  { icon: 'scissors',              name: 'Skin Fade',         desc: 'Seamless gradient down to the skin, sculpted to your shape.',                      price: '£25', time: '45 min' },
  { icon: 'git-commit-horizontal', name: 'Taper Fade',        desc: 'A softer, tapered finish around the edges. Clean and versatile.',                  price: '£22', time: '40 min' },
  { icon: 'sparkles',              name: 'Cut & Beard',       desc: 'Full haircut paired with beard sculpting and a sharp line-up.',                     price: '£35', time: '60 min' },
  { icon: 'wind',                  name: 'Beard Sculpt',      desc: 'Shaped, lined and detailed — your beard, properly tailored.',                      price: '£15', time: '30 min' },
  { icon: 'waves',                 name: 'Textured Shaping',  desc: 'Expert shaping for curly, coily and textured hair, defined with care.',             price: '£28', time: '50 min' },
  { icon: 'gem',                   name: 'Bespoke Package',   desc: 'Cut, beard, hot towel and finish — the complete grooming reset.',                   price: '£45', time: '75 min' },
];

function ServiceCard({ s, i }) {
  const [h, setH] = React.useState(false);
  return (
    <Reveal delay={(i % 3) * 80}>
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          background: 'var(--surface)', border: '1px solid var(--line-dark)', borderTop: '2px solid var(--gold)',
          borderRadius: 'var(--r-lg)', padding: 28, height: '100%', boxSizing: 'border-box',
          transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
          transform: h ? 'translateY(-6px)' : 'none', boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-md)',
        }}>
        <Icon name={s.icon} size={32} style={{ color: 'var(--gold)' }} />
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 22, color: 'var(--fg1)', margin: '18px 0 8px' }}>{s.name}</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.55, color: 'var(--fg2)', margin: 0, minHeight: 66 }}>{s.desc}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line-dark)', paddingTop: 16, marginTop: 18 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--gold-light)' }}>{s.price}</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg3)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Icon name="clock" size={14} />{s.time}
          </span>
        </div>
      </div>
    </Reveal>
  );
}

function Services() {
  return (
    <Section id="services" dark>
      <SectionHead light eyebrow="What We Do" title="Sharp cuts. Personal service."
        sub="From skin fades to beard sculpting and textured-hair shaping — every detail matters, tailored to you." />
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {SERVICES.map((s, i) => <ServiceCard key={s.name} s={s} i={i} />)}
      </div>
      <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg3)', margin: '0 0 18px' }}>
          Line-ups, children's cuts and one-off styling also available on request.
        </p>
        <Btn href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" icon="scissors">Book Your Cut</Btn>
      </Reveal>
    </Section>
  );
}

/* ---------- WHY CHOOSE ---------- */
const WHY = [
  { icon: 'target',          t: 'Precision, every time', d: 'Clean lines, balanced fades and a finish that holds its shape long after you leave.' },
  { icon: 'user-round-check',t: 'Shaped around you',     d: 'We listen first. Your cut is tailored to your hair, your face and how you wear it.' },
  { icon: 'waves',           t: 'Every hair type',       d: 'Straight, wavy, curly, coily or textured — skilled hands for all hair, no exceptions.' },
  { icon: 'calendar-check',  t: 'Easy to book',          d: 'Pick a service, choose a time, done. Consistent quality on a schedule that works.' },
];

function WhyChoose() {
  return (
    <Section id="why-us" style={{ background: 'var(--ivory)' }}>
      <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
        <div>
          <SectionHead eyebrow="Why Swavy" title="A premium finish, kept personal."
            sub="Bespoke Studios is built on craft and consistency — the kind of barbering you book once and keep coming back to." />
        </div>
        <div style={{ display: 'grid', gap: 18 }}>
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 70}>
              <div style={{ display: 'flex', gap: 18, padding: 22, background: 'var(--cream)', border: '1px solid var(--line-light)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-card-light)' }}>
                <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 'var(--r-md)', background: 'var(--ink)', display: 'grid', placeItems: 'center' }}>
                  <Icon name={w.icon} size={22} style={{ color: 'var(--gold-light)' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 18, color: 'var(--ink-fg1)', margin: '2px 0 6px' }}>{w.t}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-fg2)', margin: 0 }}>{w.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  const shots = [
    { id: 'back',  src: './cut-back.jpg',    label: 'Textured taper' },
    { id: 'razor', src: './cut-razor.jpg',   label: 'Razor line-up' },
    { id: 'beard', src: './cut-beard.jpg',   label: 'Beard detailing' },
    { id: 'vibe',  src: './studio-vibe.jpg', label: 'In the chair' },
  ];
  return (
    <Section id="gallery" dark>
      <SectionHead light center eyebrow="Recent Cuts" title="See the work."
        sub="A look at the detail — fades, line-ups and finishes from the chair." />
      <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {shots.map((s, i) => (
          <Reveal key={s.id} delay={(i % 4) * 70}>
            <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--line-dark)' }}>
              <image-slot id={`gal-${s.id}`} src={s.src} shape="rounded" radius="0"
                placeholder="Drop a cut photo"
                style={{ width: '100%', aspectRatio: '4/5', display: 'block', background: 'var(--surface)' }}></image-slot>
              <div style={{
                position: 'absolute', left: 0, right: 0, bottom: 0, padding: '32px 14px 12px', pointerEvents: 'none',
                background: 'linear-gradient(to top, rgba(10,8,6,0.78), transparent)',
                fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 500, letterSpacing: '.04em', color: 'var(--fg1)',
              }}>{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <Section id="about" style={{ background: 'var(--ivory)' }}>
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(36px,6vw,72px)', alignItems: 'center' }}>
        <Reveal>
          <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card-light)', border: '1px solid var(--line-light)' }}>
            <image-slot id="about-portrait" src="./cut-razor.jpg" shape="rounded" radius="0"
              placeholder="Drop barber portrait"
              style={{ width: '100%', aspectRatio: '4/5', display: 'block', background: 'var(--sand)' }}></image-slot>
          </div>
        </Reveal>
        <div>
          <SectionHead eyebrow="About the Barber" title="Swavy — the hands behind the chair." />
          <Reveal delay={140}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.7, color: 'var(--ink-fg2)' }}>
              <p style={{ margin: '0 0 16px' }}>Barbering, for Swavy, is craft and conversation. Every client gets the same thing: time, attention and a cut shaped around them — not rushed off a production line.</p>
              <p style={{ margin: '0 0 16px' }}>Years on the tools have built a sharp eye for detail across all hair types, with particular strength in textured hair. The result is a finish that's clean, considered and built to last.</p>
              <p style={{ margin: 0 }}>It's premium barbering with a local, personal feel — warm welcome, honest advice, and pride in every chair that turns.</p>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div style={{ display: 'flex', gap: 32, marginTop: 30, flexWrap: 'wrap' }}>
              {[['8+', 'Years on the tools'], ['All', 'Hair types welcome'], ['100%', 'Bespoke approach']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 30, color: 'var(--ink-gold)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--ink-fg3)', marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ---------- REVIEWS ---------- */
const REVIEWS = [
  { q: "Cleanest fade I've had in years. Took his time and got every detail right. Easy to book and worth every penny.",        n: 'Daniel K.', m: 'Skin Fade & Beard',  in: 'DK' },
  { q: "Finally a barber who knows textured hair properly. Shaped it perfectly and talked me through the whole thing.",         n: 'Marcus T.', m: 'Textured Shaping',   in: 'MT' },
  { q: "Premium feel without the premium attitude. Relaxed, sharp and consistent every single visit. Highly recommend.",        n: 'James O.',  m: 'Cut & Beard',        in: 'JO' },
];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 14 }} aria-label="5 stars">
      {[0,1,2,3,4].map(i => <Icon key={i} name="star" size={17} style={{ color: 'var(--gold)' }} className="star-fill" />)}
    </div>
  );
}

function Reviews() {
  return (
    <Section id="reviews" dark>
      <SectionHead light center eyebrow="What Clients Say" title="Trusted, chair after chair."
        sub="5.0 stars across 71 verified reviews on Booksy." />
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {REVIEWS.map((r, i) => (
          <Reveal key={r.n} delay={i * 80}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--line-dark)', borderRadius: 'var(--r-lg)', padding: 28, height: '100%', boxSizing: 'border-box', boxShadow: 'var(--shadow-md)' }}>
              <Stars />
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 19, lineHeight: 1.45, color: 'var(--fg1)', margin: 0, letterSpacing: '.005em' }}>
                &ldquo;{r.q}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 22 }}>
                <div style={{ width: 40, height: 40, borderRadius: 'var(--r-pill)', background: 'linear-gradient(135deg, var(--gold), var(--gold-deep))', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 600, color: '#1a1206', fontSize: 14 }}>
                  {r.in}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--fg1)' }}>{r.n}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg3)' }}>{r.m}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

Object.assign(window, { Section, SectionHead, Services, WhyChoose, Gallery, About, Reviews });
