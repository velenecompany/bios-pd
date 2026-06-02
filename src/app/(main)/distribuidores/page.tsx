import Link from 'next/link'

export default function Distribuidores() {
  const waNumber = process.env.WHATSAPP_NUMBER || '521234567890'
  const waMsg = encodeURIComponent('Hola! Me interesa ser distribuidor autorizado de BIOS Productos Naturales. ¿Podrían darme más información?')

  return (
    <>
      <style>{`
        .dist-nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .dist-nav-cta { display: block; }
        .dist-hero { padding: 10rem 5rem 7rem; }
        .dist-programa-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 2rem;
          margin-top: 4rem;
        }
        .dist-contacto-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 768px) {
          .dist-nav-links { display: none !important; }
          .dist-nav-cta { display: none !important; }
          .dist-hero { padding: 7rem 1.5rem 4rem; }
          .dist-programa-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .dist-contacto-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>

      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'rgba(247,243,236,0.93)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(61,43,26,0.08)' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, letterSpacing: '0.12em', color: 'var(--bark)', textDecoration: 'none' }}>
          BIOS <span style={{ color: 'var(--moss)' }}>·</span> naturales
        </Link>
        <ul className="dist-nav-links">
          <li><Link href="/" style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bark-mid)', textDecoration: 'none' }}>← Inicio</Link></li>
          <li><a href="#programa" style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bark-mid)', textDecoration: 'none' }}>Programa</a></li>
          <li><a href="#contacto" style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bark-mid)', textDecoration: 'none' }}>Contacto</a></li>
        </ul>
        <a className="dist-nav-cta" href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
          style={{ background: 'var(--bark)', color: 'var(--cream)', padding: '0.55rem 1.4rem', borderRadius: '2px', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
          Ser distribuidor
        </a>
        <Link href="/" className="dist-mobile-back" style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bark-mid)', textDecoration: 'none', display: 'none' }}>
          ← Inicio
        </Link>
      </nav>

      <section style={{ minHeight: '100vh', background: 'var(--bark)', display: 'flex', alignItems: 'center' }} className="dist-hero">
        <div style={{ maxWidth: '720px', width: '100%' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--gold-light)', flexShrink: 0 }}></span>
            Distribuidores Autorizados BIOS
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '2rem' }}>
            Haz crecer tu<br />negocio con<br /><em style={{ color: 'var(--gold-light)' }}>productos naturales.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,2vw,1rem)', fontWeight: 300, color: 'var(--stone-light)', lineHeight: 1.8, maxWidth: '480px', marginBottom: '3rem' }}>
            Únete a nuestra red de distribuidores en todo México. Precios de mayoreo, soporte continuo y una marca que la gente ya busca.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#contacto" style={{ background: 'var(--gold)', color: 'var(--bark)', padding: '0.9rem 2.2rem', borderRadius: '2px', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Quiero ser distribuidor
            </a>
            <a href="#programa" style={{ color: 'var(--stone-light)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--stone-light)', paddingBottom: '2px' }}>
              Ver el programa
            </a>
          </div>
        </div>
      </section>

      <section id="programa" style={{ background: 'var(--white)', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,5rem)' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--moss)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--moss)', flexShrink: 0 }}></span>
          El programa
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.8rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--bark)', marginBottom: '1rem' }}>
          Beneficios para<br /><em style={{ color: 'var(--moss)' }}>distribuidores.</em>
        </h2>
        <div className="dist-programa-grid">
          {[
            { num: '01', title: 'Precios preferenciales', desc: 'Descuentos de hasta 40% sobre precio al público para distribuidores autorizados.' },
            { num: '02', title: 'Material de venta', desc: 'Displays, folletos y materiales de punto de venta sin costo en tu primer pedido.' },
            { num: '03', title: 'Soporte dedicado', desc: 'Un asesor BIOS disponible vía WhatsApp para resolver tus dudas y apoyar tus ventas.' },
            { num: '04', title: 'Sin mínimo inicial', desc: 'Sin pedido mínimo durante el primer mes para que puedas probar el producto.' },
            { num: '05', title: 'Exclusividad de zona', desc: 'Posibilidad de exclusividad territorial para distribuidores con alto volumen.' },
          ].map(b => (
            <div key={b.num} style={{ padding: '2rem 1.5rem', background: 'var(--cream)', borderRadius: '4px' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--moss)', marginBottom: '1rem' }}>{b.num}</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--bark)', marginBottom: '0.6rem' }}>{b.title}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--stone)', lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" style={{ background: 'var(--cream-dark)', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,5rem)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--moss)', marginBottom: '1rem' }}>Contáctanos</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.8rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--bark)', marginBottom: '1.5rem' }}>
            Empieza hoy<br />mismo.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto 3rem' }}>
            ¿Listo para ser distribuidor BIOS? Escríbenos directamente. Nuestro asistente IA te contesta de inmediato.
          </p>
          <div className="dist-contacto-grid">
            {[
              { label: 'Teléfono', value: '+52 33 1690 1065', icon: '📞' },
              { label: 'Email', value: 'dist@biosnatural.mx', icon: '✉️' },
              { label: 'Ubicación', value: 'Guadalajara, Jalisco', icon: '📍' },
            ].map(c => (
              <div key={c.label} style={{ background: 'var(--white)', borderRadius: '5px', padding: '1.5rem', border: '1px solid var(--cream-dark)' }}>
                <p style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{c.icon}</p>
                <p style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.4rem' }}>{c.label}</p>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--bark)', wordBreak: 'break-word' }}>{c.value}</p>
              </div>
            ))}
          </div>
          <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem', background: '#25D366', color: 'white', padding: '1rem 2rem', borderRadius: '3px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, wordBreak: 'break-word' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribir por WhatsApp ahora
          </a>
          <p style={{ fontSize: '0.75rem', color: 'var(--stone)', marginTop: '0.8rem' }}>Al escribir, un asistente IA te dará información inmediata.</p>
        </div>
      </section>
    </>
  )
}
