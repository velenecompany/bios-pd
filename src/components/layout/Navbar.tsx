'use client'
import Link from 'next/link'
import { useState } from 'react'

interface NavbarProps {
  cartCount?: number
  onCartClick?: () => void
}

export default function Navbar({ cartCount = 0, onCartClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: 'rgba(247,243,236,0.93)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(61,43,26,0.08)',
        width: '100%', boxSizing: 'border-box',
      }}>
        <Link href="/" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)', fontWeight: 500, letterSpacing: '0.06em', color: 'var(--bark)', textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap' }}>
          BIOS <span style={{ color: 'var(--moss)' }}>·</span> Productos Naturales
        </Link>

        <ul className="desktop-nav" style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: '0 1rem' }}>
          {[
            { label: 'Productos', href: '#productos' },
            { label: 'Beneficios', href: '#beneficios' },
            { label: 'Nuestra historia', href: '/nuestra-historia' },
            { label: 'Distribuidores', href: '/distribuidores' },
          ].map(item => (
            <li key={item.label}>
              <Link href={item.href} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bark-mid)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          <button onClick={onCartClick} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--bark-mid)', position: 'relative', padding: '0.2rem' }}>
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
            </svg>
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'var(--moss)', color: 'white', width: '16px', height: '16px', borderRadius: '50%', fontSize: '0.6rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cartCount}
              </span>
            )}
          </button>
          <Link href="#productos" className="desktop-nav" style={{ background: 'var(--bark)', color: 'var(--cream)', padding: '0.5rem 1.2rem', borderRadius: '2px', fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Comprar
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--bark)', padding: '0.2rem' }}>
            {menuOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 99, background: 'var(--cream)', borderBottom: '1px solid rgba(61,43,26,0.08)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { label: 'Productos', href: '#productos' },
            { label: 'Beneficios', href: '#beneficios' },
            { label: 'Nuestra historia', href: '/nuestra-historia' },
            { label: 'Distribuidores', href: '/distribuidores' },
            { label: 'Mi cuenta', href: '#registro' },
          ].map(item => (
            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bark-mid)', textDecoration: 'none', padding: '0.5rem 0', borderBottom: '1px solid rgba(61,43,26,0.06)' }}>
              {item.label}
            </Link>
          ))}
          <button onClick={() => { onCartClick?.(); setMenuOpen(false) }} style={{ background: 'none', border: '1px solid var(--bark)', color: 'var(--bark)', padding: '0.8rem', borderRadius: '2px', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer' }}>
            🛒 Carrito {cartCount > 0 && `(${cartCount})`}
          </button>
          <Link href="#productos" onClick={() => setMenuOpen(false)} style={{ background: 'var(--bark)', color: 'var(--cream)', padding: '0.9rem', borderRadius: '2px', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center' }}>
            Comprar ahora
          </Link>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
