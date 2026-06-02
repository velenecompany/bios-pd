export default function Hero() {
  return (
    <>
      <style>{`
        .hero-grid {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding-top: 80px;
        }
        .hero-right {
          position: relative;
          background: var(--cream-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          min-height: 400px;
        }
        .hero-badge {
          position: absolute;
          bottom: 3rem;
          right: 3rem;
        }
        .hero-tag {
          position: absolute;
          top: 3rem;
          left: 2rem;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .hero-right {
            min-height: 320px;
          }
          .hero-badge {
            bottom: 1.5rem;
            right: 1.5rem;
          }
          .hero-tag {
            top: 1.5rem;
            left: 1.5rem;
          }
        }
      `}</style>
      <section className="hero-grid">
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem)',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem', fontWeight: 500,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--moss)', marginBottom: '1.5rem',
            display: 'flex', alignItems: 'center', gap: '0.8rem',
          }}>
            <span style={{ display: 'block', width: '28px', height: '1px', background: 'var(--moss)' }}></span>
            100% Natural · Hecho en México
          </p>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            fontWeight: 300, lineHeight: 1.08,
            color: 'var(--bark)', marginBottom: '1.5rem',
          }}>
            La pureza<br />
            de la <em style={{ fontStyle: 'italic', color: 'var(--moss)' }}>naturaleza</em><br />
            en tu mesa.
          </h1>

          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: 300, lineHeight: 1.8,
            color: 'var(--stone)', maxWidth: '400px', marginBottom: '2.5rem',
          }}>
            Vinagre de manzana y aceite de coco elaborados con ingredientes seleccionados, sin aditivos ni conservadores.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#productos" style={{
              background: 'var(--bark)', color: 'var(--cream)',
              padding: '0.9rem 2.2rem', border: 'none', borderRadius: '2px',
              fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
            }}>
              Ver productos
            </a>
            <a href="#beneficios" style={{
              color: 'var(--bark-mid)', fontSize: '0.78rem', fontWeight: 400,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', borderBottom: '1px solid var(--bark-mid)',
              paddingBottom: '2px',
            }}>
              Conocer beneficios
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <svg width="140" viewBox="0 0 120 280" fill="none" style={{ opacity: 0.82 }}>
              <rect x="48" y="12" width="24" height="30" rx="4" fill="#3D2B1A" opacity="0.2"/>
              <rect x="44" y="38" width="32" height="16" rx="2" fill="#4A5E3A" opacity="0.55"/>
              <path d="M28 60 Q20 80 20 120 L20 230 Q20 250 60 250 Q100 250 100 230 L100 120 Q100 80 92 60 Z" fill="#3D2B1A" opacity="0.1"/>
              <path d="M28 60 Q20 80 20 120 L20 230 Q20 250 60 250 Q100 250 100 230 L100 120 Q100 80 92 60 Z" fill="none" stroke="#3D2B1A" strokeWidth="1.5" opacity="0.35"/>
              <path d="M24 130 Q24 124 26 122 L94 122 Q96 124 96 130 L96 228 Q96 244 60 244 Q24 244 24 228 Z" fill="#B8872A" opacity="0.22"/>
              <rect x="30" y="140" width="60" height="72" rx="3" fill="#F7F3EC" opacity="0.88"/>
              <rect x="34" y="146" width="52" height="60" rx="2" fill="none" stroke="#4A5E3A" strokeWidth="0.8" opacity="0.6"/>
              <text x="60" y="168" textAnchor="middle" fontFamily="Georgia,serif" fontSize="7" fill="#3D2B1A" opacity="0.9">BIOS</text>
              <text x="60" y="180" textAnchor="middle" fontFamily="Georgia,serif" fontSize="5.5" fill="#4A5E3A" opacity="0.85" fontStyle="italic">naturales</text>
              <line x1="38" y1="186" x2="82" y2="186" stroke="#3D2B1A" strokeWidth="0.5" opacity="0.3"/>
              <text x="60" y="196" textAnchor="middle" fontFamily="sans-serif" fontSize="4.2" fill="#3D2B1A" opacity="0.6" letterSpacing="1">VINAGRE DE</text>
              <text x="60" y="204" textAnchor="middle" fontFamily="sans-serif" fontSize="4.2" fill="#3D2B1A" opacity="0.6" letterSpacing="1">MANZANA</text>
              <rect x="44" y="4" width="32" height="14" rx="3" fill="#4A5E3A" opacity="0.65"/>
            </svg>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.85rem', color: 'var(--stone)', fontStyle: 'italic', letterSpacing: '0.06em' }}>
              Producto estrella
            </p>
          </div>

          <div className="hero-tag" style={{
            background: 'var(--white)', padding: '0.7rem 1rem',
            borderRadius: '4px', boxShadow: '0 4px 24px rgba(61,43,26,0.1)',
            fontSize: '0.7rem', color: 'var(--bark-mid)',
            display: 'flex', alignItems: 'center', gap: '0.6rem',
          }}>
            <div style={{ width: '8px', height: '8px', background: 'var(--moss)', borderRadius: '50%', flexShrink: 0 }}></div>
            Sin conservadores · Sin colorantes
          </div>

          <div className="hero-badge" style={{
            background: 'var(--bark)', color: 'var(--cream)',
            width: '80px', height: '80px', borderRadius: '50%',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', textAlign: 'center',
            fontFamily: 'var(--font-serif)',
          }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 300, lineHeight: 1 }}>100</span>
            <span style={{ fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px', lineHeight: 1.3 }}>%<br />natural</span>
          </div>
        </div>
      </section>
    </>
  )
}
