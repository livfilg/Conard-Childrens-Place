import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero.jpg'), url('https://media.base44.com/images/public/69fc7b546aa628b0f94b4bad/41ab553b7_ChildrensPlaceLFF.jpg')`,
        }}
      />

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/70 via-brand-coral/40 to-brand-yellow/30" />

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#FFF7EE"
          />
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full px-5 py-2 text-sm font-display font-700 mb-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
          Conard High School · West Hartford, CT
        </div>

        {/* Main headline */}
        <h1
          className={`font-display font-900 text-5xl md:text-7xl text-white mb-4 leading-tight transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Where Little Ones{' '}
          <span className="text-brand-yellow drop-shadow">
            Learn & Grow
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`font-body text-lg md:text-xl text-white/90 mb-3 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          A student-led preschool at Conard High School, lovingly run by high school
          students under expert supervision — serving children ages 2½ to 5.
        </p>

        {/* Maria Montessori quote */}
        <p
          className={`italic text-white/70 text-base mb-10 transition-all duration-700 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          "Play is the work of the child." — Maria Montessori
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={() => scrollTo('#registration')}
            className="px-8 py-4 bg-brand-coral text-white font-display font-800 text-lg rounded-2xl shadow-lg hover:bg-brand-orange hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Enroll Your Child
          </button>
          <button
            onClick={() => scrollTo('#about')}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-display font-700 text-lg rounded-2xl border border-white/40 hover:bg-white/30 transition-all duration-200"
          >
            Learn More
          </button>
        </div>

        {/* Quick stats */}
        <div
          className={`mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto transition-all duration-700 delay-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            { label: 'Ages Served',    value: '2½ – 5' },
            { label: 'Max Class Size', value: '20' },
            { label: 'Years Running',  value: '25+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-900 text-3xl text-brand-yellow">
                {stat.value}
              </div>
              <div className="font-body text-xs text-white/80 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
