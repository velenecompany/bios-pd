const beneficios = [
  { title: 'Sin aditivos', desc: 'Nuestros productos no contienen conservadores, colorantes ni saborizantes artificiales.' },
  { title: 'Calidad garantizada', desc: 'Cada lote es revisado para asegurar los estándares más altos de pureza e inocuidad.' },
  { title: 'Origen artesanal', desc: 'Producción en pequeños lotes para garantizar frescura y cuidado en cada botella.' },
  { title: 'Hecho en México', desc: 'Apoyamos a productores locales y llevamos lo mejor de nuestra tierra a tu mesa.' },
]

export default function Beneficios() {
  return (
    <section id="beneficios" style={{ background: 'var(--bark)', padding: '7rem 5rem' }}>
      <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
        <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--gold-light)' }}></span>
        Por qué BIOS
      </p>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 3.5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--cream)', maxWidth: '520px', marginBottom: '1.5rem' }}>
        Todo lo que tu cuerpo <em style={{ color: 'var(--gold-light)' }}>merece.</em>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', marginTop: '4rem' }}>
        {beneficios.map(b => (
          <div key={b.title} style={{ padding: '2rem 1.5rem', border: '1px solid rgba(247,243,236,0.12)', borderRadius: '4px' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 400, color: 'var(--cream)', marginBottom: '0.6rem' }}>{b.title}</p>
            <p style={{ fontSize: '0.82rem', fontWeight: 300, color: 'var(--stone-light)', lineHeight: 1.7 }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
