"use client"

export default function WelcomeSection() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23dc2626'/%3E%3Ccircle cx='200' cy='150' r='50' fill='white'/%3E%3Crect x='150' y='220' width='100' height='120' fill='white'/%3E%3Ctext x='200' y='360' text-anchor='middle' fill='white' font-size='16'%3EDekan FH%3C/text%3E%3C/svg%3E"
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Dean's Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <img
                  src="https://placehold.co/400x400?text=Prof+Dr+Dekan+Fakultas+Hukum+Portrait"
                  alt="Portrait of the Dean of the Faculty of Law with professional attire and formal academic background"
                  className="w-80 h-80 object-cover rounded-lg shadow-lg border-4 border-red-600"
                  onError={handleImageError}
                />
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold">Dekan Fakultas Hukum</p>
                </div>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                  Selamat Datang
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  di Fakultas Hukum Universitas Muhammadiyah
                </h3>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Assalamu'alaikum Warahmatullahi Wabarakatuh,
                </p>
                
                <p>
                  Dengan penuh rasa syukur kepada Allah SWT, saya menyambut baik kehadiran Anda 
                  di portal resmi Fakultas Hukum Universitas Muhammadiyah. Sebagai institusi 
                  pendidikan tinggi yang berkomitmen pada excellence in Islamic legal education, 
                  kami terus berupaya menghasilkan lulusan yang tidak hanya kompeten secara 
                  akademik, tetapi juga berakhlak mulia.
                </p>

                <p>
                  Fakultas Hukum kami menawarkan program pendidikan yang komprehensif dengan 
                  kurikulum yang selalu disesuaikan dengan perkembangan hukum nasional dan 
                  internasional. Didukung oleh tenaga pengajar yang berpengalaman dan fasilitas 
                  yang memadai, kami berkomitmen untuk mencetak sarjana hukum yang siap 
                  berkontribusi bagi kemajuan bangsa.
                </p>

                <p>
                  Mari bersama-sama kita wujudkan cita-cita mulia dalam membangun sistem 
                  hukum yang berkeadilan dan bermartabat.
                </p>

                <div className="pt-4">
                  <p className="font-semibold text-red-600">
                    Wassalamu'alaikum Warahmatullahi Wabarakatuh
                  </p>
                  <div className="mt-4 space-y-1">
                    <p className="font-bold text-gray-800">Prof. Dr. H. Ahmad Solichin, S.H., M.H.</p>
                    <p className="text-gray-600">Dekan Fakultas Hukum</p>
                    <p className="text-gray-600">Universitas Muhammadiyah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
