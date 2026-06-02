import Link from 'next/link'

export default function DistribuidoresPreview() {
  const waNumber = process.env.WHATSAPP_NUMBER || '521234567890'
  const waMsg = encodeURIComponent('Hola! Quiero información sobre distribución de BIOS Productos Naturales.')

  return (
    <>
      <style>{`
        .dist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 680px;
        }
        @media (max-width: 768px) {
          .dist-grid {
            grid-template-columns: 1fr;
            min-height: auto;
          }
        }
      `}</style>
      <section style={{ padding: 0 }}>
        <div className="dist-grid">
          <div style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--cream-dark)' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--moss)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--moss)' }}></span>
              Distribuidores autorizados
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--bark)', marginBottom: '1.5rem' }}>
              Crece con<br /><em style={{ color: 'var(--moss)' }}>BIOS.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.8, maxWidth: '400px', marginBottom: '2.5rem' }}>
              Únete a nuestra red de distribuidores y lleva los productos BIOS a tu comunidad.
            </p>
            <Link href="/distribuidores" style={{ background: 'var(--bark)', color: 'var(--cream)', padding: '0.9rem 2.2rem', borderRadius: '2px', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', width: 'fit-content' }}>
              Ver programa completo
            </Link>
          </div>

          <div style={{ background: 'var(--moss)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <div style={{ background: 'var(--white)', borderRadius: '6px', padding: 'clamp(1.5rem, 4vw, 2.5rem)', width: '100%', maxWidth: '380px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--bark)', marginBottom: '0.5rem' }}>¿Quieres distribuir BIOS?</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--stone)', marginBottom: '1.8rem', lineHeight: 1.6 }}>Contáctanos directamente. Te respondemos en menos de 24 horas.</p>
              <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {['Precios de mayoreo exclusivos', 'Material de punto de venta gratuito', 'Soporte de ventas continuo', 'Sin pedido mínimo el primer mes'].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '0.7rem', fontSize: '0.85rem', color: 'var(--bark-mid)' }}>
                    <span style={{ color: 'var(--moss)', fontWeight: 500 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.9rem 1.4rem', background: 'var(--moss)', color: 'var(--white)', borderRadius: '3px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.8rem' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escribir por WhatsApp
              </a>
              <p style={{ fontSize: '0.72rem', color: 'var(--stone)', textAlign: 'center' }}>Te contestamos automáticamente con toda la información</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
