"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Faculty Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Fakultas Hukum</h3>
              <p className="text-red-100 leading-relaxed">
                Universitas Muhammadiyah berkomitmen menghasilkan sarjana hukum yang 
                kompeten, berakhlak mulia, dan siap berkontribusi bagi kemajuan bangsa.
              </p>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-100 text-sm">Terakreditasi A</span>
              </div>
            </div>

            {/* Campus Location */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Lokasi Kampus</h3>
              <div className="space-y-3 text-red-100">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-red-200 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Alamat:</p>
                    <p className="text-sm">
                      Jl. Ahmad Dahlan No. 123<br />
                      Yogyakarta 55161<br />
                      Indonesia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm">(0274) 387656</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm">hukum@umy.ac.id</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Layanan Kampus</h3>
              <ul className="space-y-2 text-red-100">
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-sm hover:text-white transition-colors">Perpustakaan Digital</a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-sm hover:text-white transition-colors">Portal Mahasiswa</a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-sm hover:text-white transition-colors">E-Learning</a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-sm hover:text-white transition-colors">Konseling Akademik</a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-sm hover:text-white transition-colors">Career Center</a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <a href="#" className="text-sm hover:text-white transition-colors">Beasiswa & Bantuan</a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Media Sosial</h3>
              <div className="space-y-3">
                <p className="text-red-100 text-sm">
                  Ikuti media sosial kami untuk mendapatkan informasi terkini
                </p>
                
                <div className="flex flex-col space-y-2">
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-red-100 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-400 transition-colors">
                      <span className="text-xs font-bold">f</span>
                    </div>
                    <span className="text-sm">Facebook</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-red-100 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-400 transition-colors">
                      <span className="text-xs font-bold">@</span>
                    </div>
                    <span className="text-sm">Instagram</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-red-100 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-400 transition-colors">
                      <span className="text-xs font-bold">Y</span>
                    </div>
                    <span className="text-sm">YouTube</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-red-100 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-400 transition-colors">
                      <span className="text-xs font-bold">in</span>
                    </div>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-red-500 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-red-100 text-sm">
                <p>&copy; {currentYear} Fakultas Hukum Universitas Muhammadiyah. All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-6 text-red-100 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
