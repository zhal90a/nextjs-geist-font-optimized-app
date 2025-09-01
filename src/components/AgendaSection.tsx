"use client"

interface AgendaItem {
  id: number
  title: string
  date: string
  time: string
  location: string
  type: 'event' | 'deadline' | 'info'
  description: string
}

const agendaData: AgendaItem[] = [
  {
    id: 1,
    title: "Seminar Hukum Bisnis dan Investasi",
    date: "25 Januari 2024",
    time: "09:00 - 12:00 WIB",
    location: "Auditorium Fakultas Hukum",
    type: "event",
    description: "Seminar nasional tentang perkembangan hukum bisnis dan investasi di era digital dengan pembicara dari praktisi dan akademisi terkemuka."
  },
  {
    id: 2,
    title: "Batas Akhir Pendaftaran Beasiswa",
    date: "30 Januari 2024",
    time: "23:59 WIB",
    location: "Online",
    type: "deadline",
    description: "Batas akhir pendaftaran beasiswa prestasi akademik dan beasiswa kurang mampu untuk semester genap tahun akademik 2023/2024."
  },
  {
    id: 3,
    title: "Workshop Penelitian Hukum",
    date: "2 Februari 2024",
    time: "13:00 - 17:00 WIB",
    location: "Ruang Seminar Lt. 3",
    type: "event",
    description: "Workshop metodologi penelitian hukum untuk mahasiswa tingkat akhir yang sedang menyusun skripsi dan tesis."
  },
  {
    id: 4,
    title: "Pengumuman Hasil Seleksi Magang",
    date: "5 Februari 2024",
    time: "10:00 WIB",
    location: "Website Fakultas",
    type: "info",
    description: "Pengumuman hasil seleksi program magang di berbagai instansi hukum untuk mahasiswa semester 6 dan 8."
  },
  {
    id: 5,
    title: "Kuliah Umum Hukum Internasional",
    date: "8 Februari 2024",
    time: "10:00 - 12:00 WIB",
    location: "Aula Utama Universitas",
    type: "event",
    description: "Kuliah umum dengan tema 'Hukum Internasional dalam Penyelesaian Sengketa Perdagangan' oleh Prof. Dr. Maria Farida."
  },
  {
    id: 6,
    title: "Pendaftaran Ujian Komprehensif",
    date: "12 Februari 2024",
    time: "08:00 - 16:00 WIB",
    location: "Bagian Akademik",
    type: "deadline",
    description: "Pendaftaran ujian komprehensif untuk mahasiswa yang telah menyelesaikan minimal 130 SKS dengan IPK minimal 2.75."
  }
]

export default function AgendaSection() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'event':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      case 'deadline':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'info':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      default:
        return null
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'event':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'deadline':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'info':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'event':
        return 'Acara'
      case 'deadline':
        return 'Deadline'
      case 'info':
        return 'Informasi'
      default:
        return 'Lainnya'
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              Agenda & Informasi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jadwal kegiatan, deadline penting, dan informasi terkini untuk civitas akademika 
              Fakultas Hukum Universitas Muhammadiyah
            </p>
          </div>

          {/* Agenda Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {agendaData.map((agenda) => (
              <div 
                key={agenda.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  {/* Header with Type Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(agenda.type)}`}>
                      {getTypeIcon(agenda.type)}
                      <span className="ml-2">{getTypeLabel(agenda.type)}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-red-600 transition-colors">
                    {agenda.title}
                  </h3>

                  {/* Date and Time */}
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">{agenda.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{agenda.time}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{agenda.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {agenda.description}
                  </p>

                  {/* Action Button */}
                  <button className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm transition-colors">
                    Detail Lengkap
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Agenda Button */}
          <div className="text-center mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
              Lihat Semua Agenda
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
