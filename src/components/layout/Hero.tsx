import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-grid {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding-top: 64px;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(2rem, 5vw, 5rem);
          min-width: 0;
        }
        .hero-right {
          position: relative;
          background: var(--cream-dark);
          overflow: hidden;
          min-height: 500px;
        }
        .hero-badge {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          z-index: 2;
        }
        .hero-tag {
          position: absolute;
          top: 2rem;
          left: 2rem;
          z-index: 2;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .hero-right {
            min-height: 400px;
          }
        }
      `}</style>
      <section className="hero-grid">
        <div className="hero-left">
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 500,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--moss)', marginBottom: '1.5rem',
            display: 'flex', alignItems: 'center', gap: '0.8rem',
          }}>
            <span style={{ display: 'block', width: '28px', height: '1px', background: 'var(--moss)', flexShrink: 0 }}></span>
            100% Natural · Hecho en México
          </p>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 4vw, 5rem)',
            fontWeight: 300, lineHeight: 1.08,
            color: 'var(--bark)', marginBottom: '1.5rem',
          }}>
            La pureza<br />
            de la <em style={{ fontStyle: 'italic', color: 'var(--moss)' }}>naturaleza</em><br />
            en tu hogar.
          </h1>

          <p style={{
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', fontWeight: 300, lineHeight: 1.8,
            color: 'var(--stone)', maxWidth: '400px', marginBottom: '2.5rem',
          }}>
            Vinagre de sidra de manzana y aceite de coco con orégano elaborados artesanalmente. Sin químicos, sin conservadores.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#productos" style={{
              background: 'var(--bark)', color: 'var(--cream)',
              padding: '0.9rem 2rem', border: 'none', borderRadius: '2px',
              fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
            }}>
              Ver productos
            </a>
            <a href="#beneficios" style={{
              color: 'var(--bark-mid)', fontSize: '0.75rem', fontWeight: 400,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', borderBottom: '1px solid var(--bark-mid)', paddingBottom: '2px',
            }}>
              Conocer beneficios
            </a>
          </div>
        </div>

        <div className="hero-right">
          <Image
            src="/images/vinagre-hero.jpg"
            alt="Vinagre de Sidra de Manzana BIOS Productos Naturales"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
            priority
          />
          <div className="hero-tag" style={{
            background: 'rgba(253,250,246,0.92)', padding: '0.7rem 1rem',
            borderRadius: '4px', boxShadow: '0 4px 24px rgba(61,43,26,0.12)',
            fontSize: '0.7rem', color: 'var(--bark-mid)',
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            backdropFilter: 'blur(8px)',
          }}>
            <div style={{ width: '8px', height: '8px', background: 'var(--moss)', borderRadius: '50%', flexShrink: 0 }}></div>
            Sin conservadores · Sin químicos
          </div>

          <div className="hero-badge" style={{
            background: 'rgba(61,43,26,0.88)', color: 'var(--cream)',
            width: '76px', height: '76px', borderRadius: '50%',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', textAlign: 'center',
            fontFamily: 'var(--font-serif)',
          }}>
            <span style={{ fontSize: '1.3rem', fontWeight: 300, lineHeight: 1 }}>100</span>
            <span style={{ fontSize: '0.48rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px', lineHeight: 1.3 }}>%<br />natural</span>
          </div>
        </div>
      </section>
    </>
  )
}
