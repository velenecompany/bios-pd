import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <footer style={{ background: 'var(--bark)', padding: 'clamp(3rem, 6vw, 4rem) clamp(1.5rem, 5vw, 5rem) clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--cream-dark)' }}>
        <div className="footer-grid">
          <div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--cream)', marginBottom: '0.8rem' }}>BIOS Productos Naturales</p>
            <p style={{ fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.8, color: 'var(--stone-light)', maxWidth: '240px' }}>Productos 100% naturales elaborados con amor y compromiso por una vida más sana.</p>
          </div>
          {[
            { title: 'Productos', links: [{ label: 'Vinagre de Manzana', href: '#' }, { label: 'Aceite de Coco', href: '#' }, { label: 'Kit Bienestar', href: '#' }] },
            { title: 'Empresa', links: [{ label: 'Sobre nosotros', href: '#' }, { label: 'Distribuidores', href: '/distribuidores' }, { label: 'Blog', href: '#' }] },
            { title: 'Contacto', links: [{ label: 'WhatsApp', href: 'https://wa.me/523316901065' }, { label: 'hola@biosnatural.mx', href: 'mailto:hola@biosnatural.mx' }, { label: 'Guadalajara, Jal.', href: '#' }] },
          ].map(col => (
            <div key={col.title}>
              <p style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '1.2rem' }}>{col.title}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ fontSize: '0.82rem', fontWeight: 300, color: 'var(--stone-light)', textDecoration: 'none' }}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(247,243,236,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--stone-light)', fontWeight: 300 }}>© 2025 BIOS Productos Naturales. Todos los derechos reservados.</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--stone-light)', fontWeight: 300 }}>Hecho con ♥ en Guadalajara, México</p>
        </div>
      </footer>
    </>
  )
}
