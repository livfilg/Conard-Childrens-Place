import { useEffect, useRef, useState } from 'react'
import { Calendar } from 'lucide-react'

// Replace this URL with your own Google Slides embed URL if it changes.
// The embed URL found on the Conard WHPS page:
const SLIDES_EMBED_URL =
  'https://docs.google.com/presentation/d/e/2PACX-1vRwzhQajIGCwmRydx9TzTQUvHWX5CdIMfRFBKZ9E_hhclqc99NsLrG_B_fMHyh0j_qmKFuPIs2NBFlL/embed?start=true&loop=true&delayms=4000'

export default function Schedule() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="schedule" ref={ref} className="py-24 px-6 bg-brand-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block font-display font-700 text-brand-coral text-sm uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="font-display font-900 text-4xl md:text-5xl text-brand-navy mb-4">
            Daily Schedule & Curriculum
          </h2>
          <p className="font-body text-brand-navy/65 text-lg max-w-xl mx-auto">
            Our thoughtfully planned days balance structured learning with free exploration —
            every minute is purposeful and fun.
          </p>
        </div>

        {/* Slides embed */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-navy/5">
            {/* Top bar decoration */}
            <div className="flex items-center gap-2 px-5 py-3 bg-brand-navy/5 border-b border-brand-navy/10">
              <Calendar size={16} className="text-brand-coral" />
              <span className="font-display font-700 text-sm text-brand-navy">
                Schedule &amp; Daily Activities
              </span>
              <span className="ml-auto text-xs text-brand-navy/40 font-body">
                Auto-advancing slideshow
              </span>
            </div>

            <div className="aspect-[16/9] w-full">
              <iframe
                src={SLIDES_EMBED_URL}
                className="w-full h-full border-0"
                allowFullScreen
                title="Children's Place Schedule"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Quick schedule summary cards */}
        <div
          className={`mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { time: 'Arrival',       desc: 'Greet, free play, morning routines',    emoji: '🌅' },
            { time: 'Circle Time',   desc: 'Songs, calendar, morning meeting',       emoji: '⭕' },
            { time: 'Activity Time', desc: 'Themed lessons, centers, exploration',   emoji: '🎨' },
            { time: 'Snack & Outdoor', desc: 'Nutritious snack, outdoor courtyard play', emoji: '🌿' },
          ].map((item) => (
            <div
              key={item.time}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-brand-navy/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="font-display font-800 text-brand-navy text-sm mb-1">{item.time}</div>
              <div className="font-body text-xs text-brand-navy/60 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
