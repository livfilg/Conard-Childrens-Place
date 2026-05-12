import { useState, useEffect, useRef } from 'react'
import { Camera } from 'lucide-react'
import Lightbox from './Lightbox'

// ─── REPLACE these with your real photo paths inside /public/images/ ─────────
// e.g. src: '/images/photo1.jpg'
// Fallback URLs are Unsplash preschool/classroom photos.
const GALLERY_IMAGES = [
  {
    src: '/images/gallery1.jpg',
    fallback: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
    alt: 'Children engaged in art activities',
    caption: 'Art time — a favorite part of the day!',
  },
  {
    src: '/images/gallery2.jpg',
    fallback: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80',
    alt: 'Story time in the Book Nook',
    caption: 'Story time in our cozy Book Nook',
  },
  {
    src: '/images/gallery3.jpg',
    fallback: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
    alt: 'Outdoor play in the courtyard',
    caption: 'Outdoor play in our enclosed courtyard',
  },
  {
    src: '/images/gallery4.jpg',
    fallback: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    alt: 'Building and block play',
    caption: 'Learning through building and exploration',
  },
  {
    src: '/images/gallery5.jpg',
    fallback: 'https://images.unsplash.com/photo-1516627145497-ae6968895b40?w=800&q=80',
    alt: 'Student teacher with children',
    caption: 'Our student-teachers share the joy of learning',
  },
  {
    src: '/images/gallery6.jpg',
    fallback: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=800&q=80',
    alt: 'Music and movement time',
    caption: 'Music and movement activities',
  },
  {
    src: '/images/gallery7.jpg',
    fallback: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
    alt: 'Snack time and social skills',
    caption: 'Snack time builds social skills too!',
  },
  {
    src: '/images/gallery8.jpg',
    fallback: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80',
    alt: 'Science exploration activities',
    caption: 'Little scientists at work',
  },
  {
    src: '/images/gallery9.jpg',
    fallback: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    alt: 'Reading and literacy activities',
    caption: 'Building a love of reading',
  },
]

function GalleryImage({ image, index, onClick }) {
  const [loaded,  setLoaded]  = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <button
      onClick={() => onClick(index)}
      className="relative group overflow-hidden rounded-2xl aspect-square bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-coral/40"
      aria-label={`View photo: ${image.alt}`}
    >
      <img
        src={errored ? image.fallback : image.src}
        alt={image.alt}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          if (!errored) {
            setErrored(true)
            e.target.src = image.fallback
          }
        }}
      />
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream to-brand-yellow/20 animate-pulse" />
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
          <Camera size={20} className="text-brand-coral" />
        </div>
      </div>
    </button>
  )
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handlePrev = () =>
    setLightboxIndex((i) => (i === 0 ? GALLERY_IMAGES.length - 1 : i - 1))
  const handleNext = () =>
    setLightboxIndex((i) => (i === GALLERY_IMAGES.length - 1 ? 0 : i + 1))

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block font-display font-700 text-brand-coral text-sm uppercase tracking-widest mb-3">
              Our Classroom in Action
            </span>
            <h2 className="font-display font-900 text-4xl md:text-5xl text-brand-navy mb-4">
              Photo Gallery
            </h2>
            <p className="font-body text-brand-navy/65 text-lg max-w-xl mx-auto">
              Peek inside our warm, welcoming classroom and see the joy of learning firsthand.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((image, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <GalleryImage image={image} index={i} onClick={setLightboxIndex} />
              </div>
            ))}
          </div>

          {/* Caption hint */}
          <p className="text-center font-body text-sm text-brand-navy/40 mt-6">
            Click any photo to view full size
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  )
}
