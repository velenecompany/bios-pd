import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/layout/Hero'
import Strip from '@/components/layout/Strip'
import Products from '@/components/shop/Products'
import Beneficios from '@/components/layout/Beneficios'
import DistribuidoresPreview from '@/components/layout/DistribuidoresPreview'
import Registro from '@/components/layout/Registro'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/chat/ChatWidget'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Strip />
      <Products />
      <Beneficios />
      <DistribuidoresPreview />
      <Registro />
      <Footer />
      <ChatWidget />
    </>
  )
}
