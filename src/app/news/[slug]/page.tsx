import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getNewsBySlug, getAllNews } from '@/lib/newsData'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsImage from '@/components/NewsImage'

interface NewsPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all news posts
export async function generateStaticParams() {
  const allNews = getAllNews()
  return allNews.map((news) => ({
    slug: news.slug,
  }))
}

// Generate metadata for each news post
export async function generateMetadata({ params }: NewsPostPageProps) {
  const { slug } = await params
  const news = getNewsBySlug(slug)
  
  if (!news) {
    return {
      title: 'Berita Tidak Ditemukan - Fakultas Hukum',
    }
  }

  return {
    title: `${news.title} - Fakultas Hukum Universitas Muhammadiyah`,
    description: news.summary,
  }
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params
  const news = getNewsBySlug(slug)

  if (!news) {
    notFound()
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-red-600 transition-colors">
                    Beranda
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <Link href="/#berita" className="hover:text-red-600 transition-colors">
                    Berita
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-400 truncate max-w-xs">
                    {news.title}
                  </span>
                </li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(news.category)}`}>
                  {news.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {news.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time>{news.date}</time>
                </div>
                
                {news.author && (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7-7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{news.author}</span>
                  </div>
                )}
              </div>
            </header>

            {/* Hero Image */}
            <div className="mb-8">
              <div className="relative h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <NewsImage
                  src={news.image}
                  alt={`Detailed image for ${news.title} showing academic event in a modern Faculty of Law setting`}
                  title={news.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-red-600">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {news.summary}
                </p>
              </div>
              
              <div 
                className="text-gray-800 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </article>

            {/* Tags */}
            {news.tags && news.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {news.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full hover:bg-red-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Link
                  href="/#berita"
                  className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Kembali ke Daftar Berita
                </Link>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Bagikan:</span>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <span className="sr-only">Share on Facebook</span>
                    <div className="w-5 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">f</div>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <span className="sr-only">Share on Twitter</span>
                    <div className="w-5 h-5 bg-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">T</div>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <span className="sr-only">Share on WhatsApp</span>
                    <div className="w-5 h-5 bg-green-500 rounded text-white text-xs flex items-center justify-center font-bold">W</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
