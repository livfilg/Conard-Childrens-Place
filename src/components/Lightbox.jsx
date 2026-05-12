import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    document.body.classList.add('lightbox-open')
    const handleKey = (e) => {
      if (e.key === 'Escape')       onClose()
      if (e.key === 'ArrowLeft')    onPrev()
      if (e.key === 'ArrowRight')   onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, onPrev, onNext])

  if (index === null || !images[index]) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Image */}
      <div
        className="max-w-5xl max-h-[90vh] mx-auto px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        {images[index].caption && (
          <p className="text-white/70 text-sm text-center mt-3 font-body">
            {images[index].caption}
          </p>
        )}
        <p className="text-white/40 text-xs text-center mt-1">
          {index + 1} / {images.length}
        </p>
      </div>

      {/* Next */}
      <button
        className="absolute right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  )
}
