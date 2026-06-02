'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.25rem 3rem',
      background: 'rgba(247,243,236,0.93)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(61,43,26,0.08)',
    }}>
      <Link href="/" style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.5rem', fontWeight: 500,
        letterSpacing: '0.12em', color: 'var(--bark)',
        textDecoration: 'none',
      }}>
        BIOS <span style={{ color: 'var(--moss)' }}>·</span> naturales
      </Link>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
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
        onClick={() => setCartOpen(!cartOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--bark-mid)' }}
      >
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
        </svg>
      </button>
    </nav>
  )
}
