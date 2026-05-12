import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'Who does the preschool serve?',
    answer:
      'The Children\'s Place serves West Hartford children who live in the Conard High School district and are between 2½ and 5 years old. Each toddler and preschooler is assigned to a Conard student as a primary caregiver for each class period during the preschool day.',
  },
  {
    question: 'What does the daily curriculum look like?',
    answer:
      'Curriculum is developmentally appropriate and connects to the West Hartford expectations for Kindergarten. Our Early Childhood students plan and facilitate lessons that encourage physical, intellectual, emotional, and social development in fun, engaging ways. Class size is limited to 20 children to ensure adequate individual and cooperative experiences for each child.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Tuition is minimal — it is designed only to cover basic materials for activities and a nutritious daily snack. The program is not meant to be a financial burden for families, making it an accessible option for children in our community.',
  },
  {
    question: 'Who teaches in the classroom?',
    answer:
      'Conard High School students enrolled in the Introduction to Early Childhood and Early Childhood Education & Careers courses serve as the student-teachers. They work directly with the children under the expert supervision of Jennifer Vauter, the Family & Consumer Sciences teacher who oversees the program.',
  },
  {
    question: 'What facilities and spaces are available?',
    answer:
      'Our classroom is set up like a professional preschool environment, including a Dramatic Play area, Book Nook, Writing & Art area, and other learning centers. There is also a large, enclosed courtyard for outdoor play. A dedicated observation room is available for parents and student-teachers to observe learning styles and interactions.',
  },
  {
    question: 'How do I enroll my child?',
    answer:
      'Simply send an email to jennifer_vauter@whps.org with your name, your child\'s name and date of birth, and the semester you\'d like to enroll. Spots are available on a first-come, first-served basis. You can also scroll up to the Registration section for a direct email link.',
  },
  {
    question: 'Is this program connected to Conard High School?',
    answer:
      'Yes! The Children\'s Place is an official laboratory preschool that is an integral part of the Career & Technical Education (CTE) program at Conard High School. It gives high school students authentic, hands-on experience in early childhood education.',
  },
  {
    question: 'What are the benefits for my child?',
    answer:
      'Your child will benefit from individualized attention (each child has a dedicated student-teacher), a rich learning environment with diverse activity areas, a developmentally appropriate curriculum aligned to Kindergarten readiness, and the unique social experience of being mentored by caring high school students.',
  },
]

function FAQItem({ faq, isOpen, onClick, delay, visible }) {
  return (
    <div
      className={`border border-brand-navy/10 rounded-2xl overflow-hidden bg-white transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-brand-coral/5 transition-colors"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-display font-700 text-brand-navy text-base leading-snug">
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-brand-coral transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pt-1 border-t border-brand-navy/5">
          <p className="font-body text-brand-navy/70 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
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
    <section id="faq" ref={ref} className="py-24 px-6 bg-brand-cream">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block font-display font-700 text-brand-coral text-sm uppercase tracking-widest mb-3">
            Have Questions?
          </span>
          <h2 className="font-display font-900 text-4xl md:text-5xl text-brand-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-brand-navy/65 text-lg max-w-xl mx-auto">
            Everything parents want to know about The Children's Place at Conard.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              delay={i * 60}
              visible={visible}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body text-brand-navy/60 mb-3">Still have questions?</p>
          <a
            href="mailto:jennifer_vauter@whps.org"
            className="inline-flex items-center gap-2 bg-brand-coral hover:bg-brand-orange text-white font-display font-700 px-8 py-3 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact Jennifer Vauter
          </a>
        </div>
      </div>
    </section>
  )
}
