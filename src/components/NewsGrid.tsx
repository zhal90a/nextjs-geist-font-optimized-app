"use client"

import Link from 'next/link'
import { getAllNews } from '@/lib/newsData'

export default function NewsGrid() {
  const newsData = getAllNews()

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, newsId: number) => {
    const target = e.target as HTMLImageElement
    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23dc2626'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16'%3EBerita ${newsId}%3C/text%3E%3C/svg%3E`
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Akademik': 'bg-blue-100 text-blue-800',
      'Prestasi': 'bg-green-100 text-green-800',
      'Kerjasama': 'bg-purple-100 text-purple-800',
      'Penelitian': 'bg-orange-100 text-orange-800',
      'Pengabdian': 'bg-red-100 text-red-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="berita" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              Berita Terbaru
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ikuti perkembangan terkini dari kegiatan akademik, penelitian, dan prestasi 
              mahasiswa Fakultas Hukum Universitas Muhammadiyah
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <article 
                key={news.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* News Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={`Thumbnail image for ${news.title} - Faculty of Law news with red and white accents`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => handleImageError(e, news.id)}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(news.category)}`}>
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <time className="text-sm text-gray-500 font-medium">
                      {news.date}
                    </time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-red-600 transition-colors">
                    <Link href={`/news/${news.slug}`} className="hover:text-red-600 transition-colors">
                      {news.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {news.summary}
                  </p>
                  
                  <Link 
                    href={`/news/${news.slug}`}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm transition-colors"
                  >
                    Baca Selengkapnya
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* View All News Button */}
          <div className="text-center mt-12">
            <Link 
              href="/#berita"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
