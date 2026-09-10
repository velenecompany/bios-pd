import Link from 'next/link'

export default function NuestraHistoria() {
  return (
    <>
      <style>{`
        .historia-nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .historia-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-bottom: 4rem; }
        @media (max-width: 768px) {
          .historia-nav-links { display: none !important; }
          .historia-stats { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'rgba(247,243,236,0.93)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(61,43,26,0.08)' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 500, letterSpacing: '0.08em', color: 'var(--bark)', textDecoration: 'none' }}>
          BIOS <span style={{ color: 'var(--moss)' }}>·</span> Productos Naturales
        </Link>
        <ul className="historia-nav-links">
          <li><Link href="/" style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bark-mid)', textDecoration: 'none' }}>← Inicio</Link></li>
          <li><Link href="/#productos" style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bark-mid)', textDecoration: 'none' }}>Productos</Link></li>
          <li><Link href="/distribuidores" style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bark-mid)', textDecoration: 'none' }}>Distribuidores</Link></li>
        </ul>
        <Link href="/#productos" style={{ background: 'var(--bark)', color: 'var(--cream)', padding: '0.55rem 1.4rem', borderRadius: '2px', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
          Comprar
        </Link>
      </nav>

      <section style={{ minHeight: '60vh', background: 'var(--bark)', display: 'flex', alignItems: 'center', padding: 'clamp(8rem,12vw,10rem) clamp(1.5rem,5vw,5rem) clamp(4rem,8vw,6rem)' }}>
        <div style={{ maxWidth: '720px' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--gold-light)', flexShrink: 0 }}></span>
            16 años de historia
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '2rem' }}>
            Una idea, una cocina<br />y una primera caja.<br />
            <em style={{ color: 'var(--gold-light)' }}>Eso es BIOS.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,2vw,1.05rem)', fontWeight: 300, color: 'var(--stone-light)', lineHeight: 1.8, maxWidth: '540px' }}>
            La historia de una familia que convirtió una respuesta de fe en una marca que hoy llega a distintos estados de México.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,5rem)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          <div style={{ marginBottom: '5rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--moss)', marginBottom: '1.2rem' }}>El origen</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 300, color: 'var(--bark)', lineHeight: 1.2, marginBottom: '1.8rem' }}>
              Una petición,<br /><em style={{ color: 'var(--moss)' }}>una respuesta.</em>
            </h2>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.2rem' }}>
              Hace 16 años, <strong style={{ color: 'var(--bark-mid)', fontWeight: 400 }}>Rocío Soto Robles</strong> tomó una decisión que cambiaría el rumbo de su familia: le pidió a Dios que le mostrara un producto con el cual pudiera emprender. Ella cuenta que la respuesta le llegó clara — vinagre de manzana.
            </p>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--stone)', lineHeight: 1.9 }}>
              No tenía experiencia previa haciéndolo, así que empezó como empieza todo lo que después se vuelve grande: investigando. Se puso a estudiar cómo se elabora un buen vinagre de manzana, buscó proveedores de manzana y de cajas de botellas de 1L y ½L, y comenzó a producirlo con sus propias manos, en su propia casa.
            </p>
          </div>

          <div style={{ background: 'var(--cream)', borderLeft: '3px solid var(--moss)', padding: '2rem 2.5rem', marginBottom: '5rem', borderRadius: '0 4px 4px 0' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--bark)', lineHeight: 1.5 }}>
              "No había fábrica, no había bodega — había una mujer decidida a convertir una idea en un producto real."
            </p>
          </div>

          <div style={{ marginBottom: '5rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--moss)', marginBottom: '1.2rem' }}>Los primeros pasos</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 300, color: 'var(--bark)', lineHeight: 1.2, marginBottom: '1.8rem' }}>
              La primera caja,<br /><em style={{ color: 'var(--moss)' }}>el primer sí.</em>
            </h2>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.2rem' }}>
              La primera caja de vinagre de manzana BIOS se vendió en una tienda llamada <strong style={{ color: 'var(--bark-mid)', fontWeight: 400 }}>La Casita Delicatessen</strong>. De ahí en adelante, como ella misma dice, fue historia.
            </p>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--stone)', lineHeight: 1.9 }}>
              Poco después, ella y su esposo emprendieron un viaje a Tepic, Nayarit, para llevar el producto más allá de su ciudad. En una sola tienda, vendieron 10 cajas — una señal de que lo que habían empezado en una cocina tenía lugar en más partes de México de las que imaginaban.
            </p>
          </div>

          <div style={{ background: 'var(--bark)', borderRadius: '6px', padding: 'clamp(2rem,5vw,3.5rem)', marginBottom: '5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '1.2rem' }}>El nombre</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              <em style={{ color: 'var(--gold-light)' }}>Bios</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--stone-light)', marginBottom: '1rem' }}>
              Del griego: vida, curso de la existencia, modo de vivir.
            </p>
            <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--stone-light)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto' }}>
              El nombre BIOS no fue elegido al azar. Resume exactamente lo que la marca ha buscado ofrecer desde el principio: productos naturales que acompañan una forma de vivir más consciente y saludable.
            </p>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--moss)', marginBottom: '1.2rem' }}>Hoy</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 300, color: 'var(--bark)', lineHeight: 1.2, marginBottom: '1.8rem' }}>
              La historia<br /><em style={{ color: 'var(--moss)' }}>sigue escribiéndose.</em>
            </h2>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.2rem' }}>
              Dieciséis años después, BIOS sigue siendo un negocio familiar, elaborando vinagre de manzana y aceite de coco con orégano y llevándolos a tiendas naturistas en distintos estados del país.
            </p>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--stone)', lineHeight: 1.9 }}>
              Lo que comenzó como una idea, una cocina y una primera caja vendida, hoy es una historia que la familia sigue escribiendo — con la misma intención con la que empezó: ofrecer algo bueno, hecho con cuidado, para la vida de quien lo consume.
            </p>
          </div>

          <div className="historia-stats">
            {[
              { num: '16', label: 'años de historia' },
              { num: '6+', label: 'estados de México' },
              { num: '100%', label: 'negocio familiar' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center', padding: '2rem 1rem', background: 'var(--cream)', borderRadius: '4px' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, color: 'var(--moss)', marginBottom: '0.5rem' }}>{s.num}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--stone)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/#productos" style={{ background: 'var(--bark)', color: 'var(--cream)', padding: '1rem 2.5rem', borderRadius: '2px', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', marginRight: '1rem' }}>
              Ver productos
            </Link>
            <Link href="/distribuidores" style={{ color: 'var(--bark-mid)', fontSize: '0.82rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--bark-mid)', paddingBottom: '2px' }}>
              Ser distribuidor
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
