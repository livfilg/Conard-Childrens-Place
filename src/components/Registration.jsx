import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Mail, ExternalLink, ClipboardList } from 'lucide-react'

const REGISTRATION_LINK = 'https://chschildrensplace.wixsite.com/preschool'
const CONTACT_EMAIL      = 'jennifer_vauter@whps.org'

const requirements = [
  'West Hartford children who live in the Conard district',
  'Ages 2½ to 5 years old',
  'Interest in a developmentally appropriate curriculum',
  'Commitment to the enrolled semester',
]

const emailFields = [
  'Your first and last name',
  "Child's first and last name",
  "Child's date of birth",
  'The semester and year you wish to enroll',
]

export default function Registration() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [copied,  setCopied]  = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="registration"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2A4F7A 60%, #1E3A5F 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-coral/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-yellow/10 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block font-display font-700 text-brand-yellow text-sm uppercase tracking-widest mb-3">
            Join Our Program
          </span>
          <h2 className="font-display font-900 text-4xl md:text-5xl text-white mb-4">
            Enroll Your Child
          </h2>
          <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
            Spots are available — we'd love to welcome your child into our classroom family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Eligibility card */}
          <div
            className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center">
                <ClipboardList size={20} className="text-brand-yellow" />
              </div>
              <h3 className="font-display font-800 text-white text-xl">Who Can Enroll?</h3>
            </div>

            <ul className="space-y-3 mb-8">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="font-body text-white/85 text-sm leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>

            {/* Tuition note */}
            <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-2xl p-4">
              <p className="font-display font-700 text-brand-yellow text-sm mb-1">💛 Affordable Tuition</p>
              <p className="font-body text-white/75 text-sm">
                Cost is minimal — designed only to cover basic materials and a nutritious daily snack.
              </p>
            </div>
          </div>

          {/* How to register card */}
          <div
            className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-coral/30 flex items-center justify-center">
                <Mail size={20} className="text-brand-coral" />
              </div>
              <h3 className="font-display font-800 text-white text-xl">How to Register</h3>
            </div>

            <p className="font-body text-white/80 text-sm leading-relaxed mb-5">
              To enroll your child, send an email to our program teacher including the
              following information:
            </p>

            <ul className="space-y-2 mb-6">
              {emailFields.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-0.5">→</span>
                  <span className="font-body text-white/85 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            {/* Email button */}
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Children's Place Enrollment&body=Hello Jennifer,%0D%0A%0D%0AI would like to enroll my child in The Children's Place preschool program.%0D%0A%0D%0AParent name: %0D%0AChild's name: %0D%0AChild's date of birth: %0D%0ASemester requested: %0D%0A%0D%0AThank you!`}
                className="flex items-center justify-center gap-2 bg-brand-coral hover:bg-brand-orange text-white font-display font-800 py-4 px-6 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                <Mail size={18} />
                Email to Enroll
              </a>

              <button
                onClick={handleCopy}
                className="text-white/60 hover:text-white text-xs font-body text-center transition-colors py-2"
              >
                {copied ? '✓ Copied!' : `Copy email: ${CONTACT_EMAIL}`}
              </button>

              <div className="border-t border-white/10 pt-3">
                <a
                  href={REGISTRATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-display font-700 py-3 px-6 rounded-2xl border border-white/20 transition-all duration-200 text-sm"
                >
                  <ExternalLink size={16} />
                  View Full Program Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom contact strip */}
        <div
          className={`mt-10 bg-white/5 rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="font-display font-700 text-white">Questions?</p>
            <p className="font-body text-white/60 text-sm">
              Conard High School · 110 Beechwood Road, West Hartford, CT 06107
            </p>
          </div>
          <div className="flex gap-4 text-sm font-body text-white/70">
            <a href="tel:8602315000" className="hover:text-white transition-colors">📞 (860) 231-5000</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
              ✉ {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
