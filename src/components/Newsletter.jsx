import { useEffect, useRef, useState } from 'react'
import { Mail, ExternalLink } from 'lucide-react'

// ─── REPLACE with your actual Google Doc published embed URL ─────────────────
// To embed: File → Share → Publish to web → Embed → Copy iframe src URL
// Example: https://docs.google.com/document/d/e/YOUR_DOC_ID/pub?embedded=true
const NEWSLETTER_EMBED_URL =
  'https://docs.google.com/document/d/e/2PACX-1vRwzhQajIGCwmRydx9TzTQUvHWX5CdIMfRFBKZ9E_hhclqc99NsLrG_B_fMHyh0j_qmKFuPIs2NBFlL/pub?embedded=true'

// Direct link to full newsletter (for "Open in new tab" button)
const NEWSLETTER_DIRECT_URL =
  'https://conard.whps.org/school-information/school-newsletter'

export default function Newsletter() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [loaded,  setLoaded]  = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="newsletter" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block font-display font-700 text-brand-coral text-sm uppercase tracking-widest mb-3">
            Stay In the Loop
          </span>
          <h2 className="font-display font-900 text-4xl md:text-5xl text-brand-navy mb-4">
            Program Newsletter
          </h2>
          <p className="font-body text-brand-navy/65 text-lg max-w-xl mx-auto">
            Stay connected with what's happening in our classroom — monthly updates,
            upcoming events, and highlights from our amazing students and children.
          </p>
        </div>

        {/* Newsletter embed container */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-brand-cream rounded-3xl shadow-xl overflow-hidden border border-brand-navy/5">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-brand-coral text-white">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="font-display font-700 text-sm">Children's Place Newsletter</span>
              </div>
              <a
                href={NEWSLETTER_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-body transition-colors"
              >
                <ExternalLink size={14} />
                Open full page
              </a>
            </div>

            {/* Skeleton loader */}
            {!loaded && (
              <div className="h-[600px] flex flex-col items-center justify-center gap-4 bg-brand-cream">
                <div className="w-12 h-12 rounded-full border-4 border-brand-coral/30 border-t-brand-coral animate-spin" />
                <p className="font-body text-sm text-brand-navy/50">Loading newsletter…</p>
              </div>
            )}

            <iframe
              src={NEWSLETTER_EMBED_URL}
              className={`w-full border-0 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0 h-0'}`}
              height={loaded ? 700 : 0}
              onLoad={() => setLoaded(true)}
              title="Children's Place Newsletter"
              loading="lazy"
            />
          </div>

          {/* Fallback CTA */}
          <div className="text-center mt-6">
            <p className="font-body text-sm text-brand-navy/50 mb-3">
              Having trouble viewing? Read it directly on the school website.
            </p>
            <a
              href={NEWSLETTER_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display font-700 text-brand-coral hover:text-brand-orange text-sm transition-colors"
            >
              <ExternalLink size={14} />
              View Newsletter on Conard's Website
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
