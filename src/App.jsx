import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Schedule from './components/Schedule'
import Newsletter from './components/Newsletter'
import Registration from './components/Registration'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Schedule />
        <Newsletter />
        <Registration />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
