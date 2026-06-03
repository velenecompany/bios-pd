'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.25rem 1.5rem',
        background: 'rgba(247,243,236,0.93)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(61,43,26,0.08)',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.2rem', fontWeight: 500,
          letterSpacing: '0.08em', color: 'var(--bark)',
          textDecoration: 'none',
        }}>
          BIOS <span style={{ color: 'var(--moss)' }}>·</span> Productos Naturales
        </Link>

        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }} className="desktop-nav">
          {[
            { label: 'Productos', href: '#productos' },
            { label: 'Beneficios', href: '#beneficios' },
            { label: 'Distribuidores', href: '/distribuidores' },
            { label: 'Mi cuenta', href: '#registro' },
          ].map(item => (
            <li key={item.label}>
              <Link href={item.href} style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem', fontWeight: 400,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--bark-mid)', textDecoration: 'none',
              }}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#productos" style={{
              background: 'var(--bark)', color: 'var(--cream)',
              padding: '0.55rem 1.4rem', borderRadius: '2px',
              fontSize: '0.8rem', fontWeight: 400,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              textDecoration: 'none',
            }}>
              Comprar
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--bark)', padding: '0.2rem' }}
        >
          {menuOpen ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
          background: 'var(--cream)',
          borderBottom: '1px solid rgba(61,43,26,0.08)',
          padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1rem',
        }}>
          {[
            { label: 'Productos', href: '#productos' },
            { label: 'Beneficios', href: '#beneficios' },
            { label: 'Distribuidores', href: '/distribuidores' },
            { label: 'Mi cuenta', href: '#registro' },
          ].map(item => (
            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem', fontWeight: 400,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--bark-mid)', textDecoration: 'none',
              padding: '0.5rem 0',
              borderBottom: '1px solid rgba(61,43,26,0.06)',
            }}>
              {item.label}
            </Link>
          ))}
          <Link href="#productos" onClick={() => setMenuOpen(false)} style={{
            background: 'var(--bark)', color: 'var(--cream)',
            padding: '0.9rem', borderRadius: '2px',
            fontSize: '0.82rem', fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            textDecoration: 'none', textAlign: 'center', marginTop: '0.5rem',
          }}>
            Comprar ahora
          </Link>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        .mobile-menu { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </>
  )
}
