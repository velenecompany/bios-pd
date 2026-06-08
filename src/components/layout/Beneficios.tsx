const beneficios = [
  {
    title: 'Sin aditivos',
    desc: 'Nuestros productos no contienen químicos ni conservadores.',
  },
  {
    title: 'Calidad garantizada',
    desc: 'Cada lote es revisado para asegurar los estándares más altos de pureza e inocuidad.',
  },
  {
    title: 'Origen artesanal',
    desc: 'Producción en lotes que requieren de un proceso detallado asegurando el cuidado necesario.',
  },
  {
    title: 'Hecho en México',
    desc: 'Somos pioneros en nuestro país. Apoyamos a productores locales y llevamos lo mejor de nuestra tierra a tu mesa.',
  },
]

export default function Beneficios() {
  return (
    <>
      <style>{`
        .beneficios-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }
        @media (max-width: 768px) {
          .beneficios-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 2rem; }
        }
        @media (max-width: 480px) {
          .beneficios-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section id="beneficios" style={{ background: 'var(--bark)', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--gold-light)', flexShrink: 0 }}></span>
          ¿Por qué BIOS?
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--cream)', maxWidth: '520px' }}>
          Todo lo que tu cuerpo <em style={{ color: 'var(--gold-light)' }}>merece.</em>
        </h2>
        <div className="beneficios-grid">
          {beneficios.map(b => (
            <div key={b.title} style={{ padding: '2rem 1.5rem', border: '1px solid rgba(247,243,236,0.12)', borderRadius: '4px' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 400, color: 'var(--cream)', marginBottom: '0.6rem' }}>{b.title}</p>
              <p style={{ fontSize: '0.82rem', fontWeight: 300, color: 'var(--stone-light)', lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
