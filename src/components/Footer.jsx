import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Schedule',   href: '#schedule' },
  { label: 'Newsletter', href: '#newsletter' },
  { label: 'Register',   href: '#registration' },
  { label: 'FAQs',       href: '#faq' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Children's Place Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div>
                <div className="font-display font-900 text-white text-base leading-tight">
                  Conard Children's Place
                </div>
                <div className="font-body text-white/50 text-xs">
                  The Children's Place at Conard
                </div>
              </div>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-5">
              A student-led laboratory preschool at Conard High School, dedicated to
              early childhood growth, parent engagement, and genuine learning.
            </p>
            <p className="font-body italic text-white/40 text-xs">
              "Play is the work of the child." — Maria Montessori
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-800 text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-white/60 hover:text-brand-yellow text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://chschildrensplace.wixsite.com/preschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/60 hover:text-brand-yellow text-sm transition-colors"
                >
                  Full Program Website ↗
                </a>
              </li>
              <li>
                <a
                  href="https://conard.whps.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/60 hover:text-brand-yellow text-sm transition-colors"
                >
                  Conard High School ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-800 text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-coral mt-0.5 flex-shrink-0" />
                <span className="font-body text-white/60 text-sm leading-relaxed">
                  110 Beechwood Road<br />
                  West Hartford, CT 06107
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-coral flex-shrink-0" />
                <a
                  href="tel:8602315000"
                  className="font-body text-white/60 hover:text-white text-sm transition-colors"
                >
                  (860) 231-5000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-coral flex-shrink-0" />
                <a
                  href="mailto:jennifer_vauter@whps.org"
                  className="font-body text-white/60 hover:text-white text-sm transition-colors break-all"
                >
                  jennifer_vauter@whps.org
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="mailto:jennifer_vauter@whps.org?subject=Children's Place Enrollment"
                className="inline-flex items-center gap-2 bg-brand-coral hover:bg-brand-orange text-white font-display font-700 text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <Mail size={14} />
                Enroll Your Child
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/40 text-xs">
            © {new Date().getFullYear()} Conard Children's Place · West Hartford Public Schools
          </p>
          <p className="font-body text-white/30 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-brand-coral" fill="currentColor" /> for our community
          </p>
        </div>
      </div>
    </footer>
  )
}
