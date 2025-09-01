"use client"

import Header from '@/components/Header'
import ImageSlider from '@/components/ImageSlider'
import WelcomeSection from '@/components/WelcomeSection'
import NewsGrid from '@/components/NewsGrid'
import AgendaSection from '@/components/AgendaSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ImageSlider />
        <WelcomeSection />
        <NewsGrid />
        <AgendaSection />
      </main>
      <Footer />
    </div>
  )
}
