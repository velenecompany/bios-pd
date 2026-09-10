'use client'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/layout/Hero'
import Strip from '@/components/layout/Strip'
import Products from '@/components/shop/Products'
import Cart from '@/components/shop/Cart'
import Beneficios from '@/components/layout/Beneficios'
import DistribuidoresPreview from '@/components/layout/DistribuidoresPreview'
import Registro from '@/components/layout/Registro'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'
import { CartItem } from '@/types/cart'

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  function addToCart(item: CartItem) {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, item]
    })
    setCartOpen(true)
  }

  function updateQty(id: number, qty: number) {
    if (qty <= 0) { removeItem(id); return }
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }

  function removeItem(id: number) {
    setCartItems(prev => prev.filter(i => i.id !== id))
  }

  const totalItems = cartItems.reduce((a, i) => a + i.qty, 0)

  return (
    <>
      <Navbar cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <Strip />
      <Products onAddToCart={addToCart} />
      <Beneficios />
      <DistribuidoresPreview />
      <Registro />
      <Footer />
      <ChatWidget />
      {cartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
          onRemove={removeItem}
        />
      )}
    </>
  )
}
