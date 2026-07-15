import Navbar from './components/Navbar.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import WhatIs from './components/WhatIs.jsx'
import Product from './components/Product.jsx'
import Benefits from './components/Benefits.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonial from './components/Testimonial.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhatIs />
        <Product />
        <Benefits />
        <Gallery />
        <Testimonial />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
