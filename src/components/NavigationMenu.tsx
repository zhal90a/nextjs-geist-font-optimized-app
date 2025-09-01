"use client"

import { useState } from 'react'

interface NavigationMenuProps {
  isOpen: boolean
  onClose: () => void
}

interface MenuItem {
  title: string
  submenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: "Fakultas",
    submenu: [
      { title: "Tentang Fakultas" },
      { title: "Sejarah" },
      { title: "Visi Misi dan Tujuan" },
      { title: "Struktur Organisasi" },
      {
        title: "SDM",
        submenu: [
          { title: "Dosen" },
          { title: "Tendik" }
        ]
      },
      { title: "Kerjasama" }
    ]
  },
  {
    title: "Akademik",
    submenu: [
      { title: "Kurikulum" },
      {
        title: "Program Studi",
        submenu: [
          { title: "Sarjana Hukum S1" },
          { title: "Magister Hukum S2" }
        ]
      },
      {
        title: "Konsentrasi",
        submenu: [
          { title: "Pidana" },
          { title: "Perdata" },
          { title: "HTN" }
        ]
      },
      { title: "Status Akreditasi" },
      { title: "Kalender Akademik" },
      { title: "RPS" }
    ]
  },
  {
    title: "Penelitian dan Pengabdian",
    submenu: [
      { title: "Penelitian" },
      { title: "Pengabdian" },
      { title: "Publikasi" }
    ]
  },
  {
    title: "Jaminan Mutu",
    submenu: [
      { title: "Unit Jaminan Mutu" },
      { title: "Renstar dan Renop" },
      { title: "Survey" }
    ]
  },
  {
    title: "Kemahasiswaan",
    submenu: [
      { title: "Organisasi" },
      { title: "Prestasi" },
      { title: "Beasiswa" },
      { title: "Tracer Study" },
      { title: "Alumni" }
    ]
  },
  {
    title: "User Login"
  }
]

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({})

  const toggleSubmenu = (title: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0
    const isSubmenuOpen = openSubmenus[item.title]
    const paddingLeft = level * 16 + 16

    return (
      <div key={item.title} className="border-b border-gray-100 last:border-b-0">
        <button
          onClick={() => hasSubmenu ? toggleSubmenu(item.title) : onClose()}
          className={`w-full text-left py-3 px-4 hover:bg-red-50 transition-colors flex items-center justify-between`}
          style={{ paddingLeft: `${paddingLeft}px` }}
        >
          <span className={`${level === 0 ? 'font-semibold text-red-600' : level === 1 ? 'font-medium text-gray-700' : 'text-gray-600'}`}>
            {item.title}
          </span>
          {hasSubmenu && (
            <span className={`text-red-600 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          )}
        </button>
        
        {hasSubmenu && isSubmenuOpen && (
          <div className="bg-gray-50">
            {item.submenu!.map(subItem => renderMenuItem(subItem, level + 1))}
          </div>
        )}
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      {/* Overlay for mobile */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
        onClick={onClose}
      />
      
      {/* Menu content */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto lg:relative lg:w-full lg:h-auto lg:shadow-none lg:mt-4">
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-red-600">Menu Navigasi</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md"
            aria-label="Close menu"
          >
            <span className="block w-6 h-0.5 bg-red-600 rotate-45 translate-y-0.5"></span>
            <span className="block w-6 h-0.5 bg-red-600 -rotate-45 -translate-y-0.5"></span>
          </button>
        </div>
        
        <nav className="py-2">
          {menuItems.map(item => renderMenuItem(item))}
        </nav>
      </div>
    </div>
  )
}
