"use client"

import { useState, useEffect } from 'react'

const sliderImages = [
  {
    src: "https://placehold.co/1200x600?text=Kegiatan+Mahasiswa+Hukum+Diskusi+Panel",
    alt: "Students of Faculty of Law engaged in panel discussion with red and white university branding"
  },
  {
    src: "https://placehold.co/1200x600?text=Wisuda+Fakultas+Hukum+Ceremony",
    alt: "Graduation ceremony of Faculty of Law students with academic regalia and university banners"
  },
  {
    src: "https://placehold.co/1200x600?text=Seminar+Hukum+Nasional+Conference",
    alt: "National law seminar conference with speakers and attendees in formal academic setting"
  },
  {
    src: "https://placehold.co/1200x600?text=Moot+Court+Competition+Students",
    alt: "Law students participating in moot court competition with judges and formal courtroom setup"
  },
  {
    src: "https://placehold.co/1200x600?text=Perpustakaan+Fakultas+Hukum+Library",
    alt: "Modern Faculty of Law library with students studying and extensive legal book collections"
  }
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleImageLoad = (index: number) => {
    setIsLoaded(prev => ({ ...prev, [index]: true }))
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    const target = e.target as HTMLImageElement
    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'%3E%3Crect width='1200' height='600' fill='%23dc2626'/%3E%3Ctext x='600' y='300' text-anchor='middle' fill='white' font-size='24'%3EKegiatan ${index + 1} Fakultas Hukum%3C/text%3E%3C/svg%3E`
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-100">
      {/* Images */}
      <div className="relative w-full h-full">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              onLoad={() => handleImageLoad(index)}
              onError={(e) => handleImageError(e, index)}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex 
                ? 'bg-red-600' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => goToSlide(currentIndex === 0 ? sliderImages.length - 1 : currentIndex - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => goToSlide(currentIndex === sliderImages.length - 1 ? 0 : currentIndex + 1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {sliderImages.length}
      </div>
    </section>
  )
}
