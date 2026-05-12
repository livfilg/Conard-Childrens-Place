import { useEffect, useRef, useState } from 'react'
import { BookOpen, Users, Star, Heart, Leaf, Eye } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Student-Led Care',
    desc: 'Each child is assigned to a Conard High School student as their primary caregiver, creating meaningful mentorship bonds.',
    color: 'bg-brand-coral/10 text-brand-coral',
  },
  {
    icon: BookOpen,
    title: 'Kindergarten Ready',
    desc: 'Our curriculum is developmentally appropriate and aligned with West Hartford's expectations for Kindergarten readiness.',
    color: 'bg-brand-green/10 text-brand-green',
  },
  {
    icon: Heart,
    title: 'Small Class Sizes',
    desc: 'Limited to 20 children to ensure each child gets adequate individual and cooperative experiences every day.',
    color: 'bg-brand-yellow/20 text-brand-warm',
  },
  {
    icon: Leaf,
    title: 'Outdoor Play',
    desc: 'A large, enclosed courtyard provides safe outdoor play — essential for healthy physical and social development.',
    color: 'bg-brand-teal/10 text-brand-teal',
  },
  {
    icon: Star,
    title: 'Enriching Spaces',
    desc: 'Classroom areas include Dramatic Play, Book Nook, Writing & Art Center — all designed to spark curiosity.',
    color: 'bg-brand-orange/10 text-brand-orange',
  },
  {
    icon: Eye,
    title: 'Observation Room',
    desc: 'Parents and student-teachers can observe learning styles and interactions from a dedicated observation room.',
    color: 'bg-brand-navyLight/10 text-brand-navyLight',
  },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-brand-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block font-display font-700 text-brand-coral text-sm uppercase tracking-widest mb-3">
            About Our Program
          </span>
          <h2 className="font-display font-900 text-4xl md:text-5xl text-brand-navy mb-5">
            A Place Where Children Thrive
          </h2>
          <p className="font-body text-brand-navy/70 text-lg max-w-2xl mx-auto leading-relaxed">
            The Children's Place is a laboratory preschool and integral part of the
            <strong className="text-brand-coral"> Introduction to Early Childhood</strong> and{' '}
            <strong className="text-brand-coral">Early Childhood Education & Careers</strong> courses
            at Conard High School.
          </p>
        </div>

        {/* Two-column layout: text + image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="font-display font-800 text-2xl text-brand-navy mb-4">
              Authentic Learning, Genuine Connections
            </h3>
            <p className="font-body text-brand-navy/75 leading-relaxed mb-4">
              In this authentic setting, Conard students serve as student-teachers, working
              directly with young children under the expert supervision of Family &amp; Consumer
              Sciences teacher <strong>Jennifer Vauter</strong>.
            </p>
            <p className="font-body text-brand-navy/75 leading-relaxed mb-4">
              The Early Childhood students plan and facilitate lessons that encourage
              physical, intellectual, emotional, and social development — in fun,
              engaging ways that children love.
            </p>
            <p className="font-body text-brand-navy/75 leading-relaxed">
              Located at <strong>110 Beechwood Road, West Hartford, CT 06107</strong>,
              our classroom is set up in the full format of a professional preschool,
              complete with a large, enclosed courtyard for outdoor play.
            </p>

            {/* Teacher callout */}
            <div className="mt-6 flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-brand-coral/10">
              <div className="w-12 h-12 rounded-full bg-brand-coral/10 flex items-center justify-center flex-shrink-0">
                <span className="font-display font-900 text-brand-coral text-xl">JV</span>
              </div>
              <div>
                <div className="font-display font-800 text-brand-navy">Jennifer Vauter</div>
                <div className="font-body text-sm text-brand-navy/60">
                  Family &amp; Consumer Sciences Teacher · Program Supervisor
                </div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/images/classroom.jpg"
                alt="Children learning in the classroom"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'
                }}
              />
              {/* Floating accent card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                    <Star className="text-brand-yellow" size={18} fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-display font-800 text-brand-navy text-sm">
                      Laboratory Preschool
                    </div>
                    <div className="font-body text-xs text-brand-navy/60">
                      Part of the CTE Program at Conard
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blob */}
            <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-brand-yellow/20 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-brand-coral/10 -z-10" />
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-brand-navy/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 80}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  <Icon size={22} />
                </div>
                <h4 className="font-display font-800 text-brand-navy mb-2">{f.title}</h4>
                <p className="font-body text-sm text-brand-navy/65 leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
