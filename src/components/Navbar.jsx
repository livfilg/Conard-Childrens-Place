import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Schedule',     href: '#schedule' },
  { label: 'Newsletter',   href: '#newsletter' },
  { label: 'Register',     href: '#registration' },
  { label: 'FAQs',         href: '#faq' },
]

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-white/80 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo + wordmark */}
        <a
          href="#"
          className="flex items-center gap-3"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          <img
            src="/logo.png"
            alt="Children's Place Logo"
            className="h-12 w-auto object-contain"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <div className="leading-tight">
            <span className="block font-display font-900 text-brand-coral text-lg leading-none">
              Conard Children's Place
            </span>
            <span className="block font-body text-xs text-brand-navy/70 tracking-wide">
              Conard High School · West Hartford, CT
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className={`px-3 py-2 rounded-lg font-display font-600 text-sm transition-colors duration-200 ${
                link.label === 'Register'
                  ? 'bg-brand-coral text-white hover:bg-brand-orange px-5 ml-2'
                  : 'text-brand-navy hover:text-brand-coral hover:bg-brand-coral/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-coral/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-brand-cream px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className={`w-full text-left px-4 py-3 rounded-lg font-display font-600 text-sm transition-colors ${
                link.label === 'Register'
                  ? 'bg-brand-coral text-white text-center hover:bg-brand-orange mt-1'
                  : 'text-brand-navy hover:text-brand-coral hover:bg-brand-coral/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
