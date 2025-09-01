"use client"

import { useState } from 'react'
import NavigationMenu from './NavigationMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md border-b-2 border-red-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Description */}
          <div className="flex items-center space-x-4">
            <img 
              src="https://placehold.co/150x50?text=Logo+Fakultas+Hukum" 
              alt="Faculty of Law Logo with red and white themed background"
              className="h-12 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'%3E%3Crect width='150' height='50' fill='%23dc2626'/%3E%3Ctext x='75' y='30' text-anchor='middle' fill='white' font-size='12'%3ELogo FH%3C/text%3E%3C/svg%3E";
              }}
            />
            <div>
              <h1 className="text-xl font-bold text-red-600">Fakultas Hukum</h1>
              <p className="text-sm text-gray-600">Universitas Muhammadiyah</p>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col space-y-1 p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 bg-red-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-red-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-red-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  )
}
