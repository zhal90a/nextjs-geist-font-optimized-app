export interface NewsItem {
  id: number
  title: string
  slug: string
  summary: string
  content: string
  date: string
  image: string
  category: string
  author?: string
  tags?: string[]
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Seminar Nasional Hukum Pidana dan HAM",
    slug: "seminar-nasional-hukum-pidana-ham",
    summary: "Fakultas Hukum menyelenggarakan seminar nasional dengan tema 'Reformasi Hukum Pidana dalam Perspektif HAM' yang dihadiri oleh praktisi hukum terkemuka.",
    content: `
      <p>Fakultas Hukum Universitas Muhammadiyah dengan bangga menyelenggarakan Seminar Nasional bertema "Reformasi Hukum Pidana dalam Perspektif Hak Asasi Manusia" pada tanggal 15 Januari 2024. Acara ini dihadiri oleh lebih dari 200 peserta yang terdiri dari akademisi, praktisi hukum, mahasiswa, dan masyarakat umum.</p>

      <p>Seminar ini menghadirkan pembicara-pembicara terkemuka dalam bidang hukum pidana dan HAM, antara lain:</p>
      <ul>
        <li>Prof. Dr. Ahmad Solichin, S.H., M.H. (Dekan Fakultas Hukum)</li>
        <li>Dr. Maria Farida, S.H., M.H. (Pakar Hukum Pidana Universitas Indonesia)</li>
        <li>H. Bambang Widjojanto, S.H. (Praktisi Hukum dan Mantan Wakil Ketua KPK)</li>
        <li>Dr. Siti Nurhalimah, S.H., M.H. (Komisioner Komnas HAM)</li>
      </ul>

      <p>Dalam seminar ini, dibahas berbagai isu penting terkait reformasi hukum pidana Indonesia, termasuk perlindungan hak asasi manusia dalam sistem peradilan pidana, reformasi KUHP dan implementasinya, penegakan hukum yang berkeadilan dan bermartabat, serta peran advokat dalam melindungi hak tersangka dan terdakwa.</p>

      <p>Dekan Fakultas Hukum, Prof. Dr. Ahmad Solichin, dalam sambutannya menyatakan bahwa seminar ini merupakan bagian dari komitmen fakultas untuk terus berkontribusi dalam pengembangan ilmu hukum di Indonesia. "Kami berharap melalui forum ini dapat tercipta dialog konstruktif antara akademisi dan praktisi untuk mewujudkan sistem hukum pidana yang lebih berkeadilan," ujarnya.</p>
    `,
    date: "15 Januari 2024",
    image: "https://placehold.co/1200x800?text=Seminar+Nasional+Hukum+Pidana+HAM+Conference+Hall+Academic+Event",
    category: "Akademik",
    author: "Tim Redaksi Fakultas Hukum",
    tags: ["Seminar", "Hukum Pidana", "HAM", "Akademik"]
  },
  {
    id: 2,
    title: "Mahasiswa FH Raih Juara Moot Court Competition",
    slug: "mahasiswa-fh-juara-moot-court-competition",
    summary: "Tim mahasiswa Fakultas Hukum berhasil meraih juara pertama dalam kompetisi moot court tingkat nasional yang diselenggarakan di Jakarta.",
    content: `
      <p>Tim mahasiswa Fakultas Hukum Universitas Muhammadiyah berhasil meraih prestasi membanggakan dengan menjuarai Kompetisi Moot Court Nasional 2024 yang diselenggarakan di Jakarta pada tanggal 10-12 Januari 2024. Kompetisi bergengsi ini diikuti oleh 32 tim dari berbagai universitas terkemuka di seluruh Indonesia.</p>

      <p>Tim yang terdiri dari tiga mahasiswa berprestasi ini adalah Ahmad Rizki Pratama (Semester 6) sebagai Counsel 1, Siti Aisyah Putri (Semester 6) sebagai Counsel 2, dan Muhammad Fajar Sidiq (Semester 4) sebagai Researcher.</p>

      <p>Kompetisi moot court kali ini mengangkat kasus hukum perdata internasional yang kompleks, yaitu sengketa kontrak dagang internasional dengan unsur arbitrase. Tim mahasiswa FH menunjukkan kemampuan luar biasa dalam menganalisis kasus, menyusun legal memorandum, dan mempresentasikan argumentasi hukum di hadapan panel juri yang terdiri dari hakim, akademisi, dan praktisi hukum berpengalaman.</p>

      <p>"Kami sangat bangga dengan prestasi yang diraih oleh mahasiswa-mahasiswa kami. Ini menunjukkan kualitas pendidikan hukum yang kami berikan dan dedikasi mahasiswa dalam mengembangkan kemampuan advocacy mereka," ujar Dr. Bambang Sutrisno, S.H., M.H., selaku pembimbing tim.</p>
    `,
    date: "12 Januari 2024",
    image: "https://placehold.co/1200x800?text=Moot+Court+Competition+Winners+Students+Trophy+Ceremony+Academic+Achievement",
    category: "Prestasi",
    author: "Humas Fakultas Hukum",
    tags: ["Moot Court", "Prestasi", "Mahasiswa", "Kompetisi"]
  },
  {
    id: 3,
    title: "Kerjasama dengan Pengadilan Tinggi",
    slug: "kerjasama-dengan-pengadilan-tinggi",
    summary: "Fakultas Hukum menandatangani MoU dengan Pengadilan Tinggi untuk program magang dan penelitian bersama dalam bidang hukum perdata.",
    content: `
      <p>Fakultas Hukum Universitas Muhammadiyah resmi menandatangani Memorandum of Understanding (MoU) dengan Pengadilan Tinggi Yogyakarta pada tanggal 10 Januari 2024. Penandatanganan dilakukan oleh Dekan Fakultas Hukum, Prof. Dr. Ahmad Solichin, S.H., M.H., dan Ketua Pengadilan Tinggi Yogyakarta, Dr. H. Suryanto, S.H., M.H.</p>

      <p>Kerjasama strategis ini mencakup program magang mahasiswa semester 6 dan 8 yang akan mendapat kesempatan untuk melakukan magang langsung di Pengadilan Tinggi. Program ini dirancang untuk memberikan pengalaman praktis dalam proses persidangan perdata dan pidana, administrasi peradilan, penelitian hukum dan yurisprudensi, serta mediasi dan penyelesaian sengketa.</p>

      <p>Selain itu, dosen dan mahasiswa akan berkolaborasi dengan hakim dalam melakukan penelitian hukum, khususnya dalam bidang hukum perdata dan bisnis, hukum keluarga dan waris, penyelesaian sengketa alternatif, dan reformasi sistem peradilan.</p>

      <p>Ketua Pengadilan Tinggi, Dr. H. Suryanto, menyambut baik kerjasama ini. "Kolaborasi dengan institusi pendidikan tinggi sangat penting untuk meningkatkan kualitas sistem peradilan. Mahasiswa akan mendapat pengalaman langsung, sementara pengadilan mendapat masukan akademis yang fresh," ujarnya.</p>
    `,
    date: "10 Januari 2024",
    image: "https://placehold.co/1200x800?text=MoU+Signing+Ceremony+Pengadilan+Tinggi+Academic+Partnership+Legal+Cooperation",
    category: "Kerjasama",
    author: "Bagian Kerjasama FH",
    tags: ["MoU", "Pengadilan Tinggi", "Magang", "Kerjasama"]
  },
  {
    id: 4,
    title: "Workshop Penulisan Karya Ilmiah Hukum",
    slug: "workshop-penulisan-karya-ilmiah-hukum",
    summary: "Dosen dan mahasiswa mengikuti workshop penulisan karya ilmiah hukum yang bertujuan meningkatkan kualitas publikasi akademik.",
    content: `
      <p>Fakultas Hukum Universitas Muhammadiyah menyelenggarakan Workshop Penulisan Karya Ilmiah Hukum pada tanggal 8 Januari 2024 di Ruang Seminar Lantai 3. Workshop ini diikuti oleh 80 peserta yang terdiri dari dosen, mahasiswa S1, dan mahasiswa S2 Program Magister Hukum.</p>

      <p>Workshop ini menghadirkan narasumber kompeten dalam bidang penulisan akademik, yaitu Prof. Dr. Mahfud MD, S.H., M.H. (Mantan Ketua Mahkamah Konstitusi), Prof. Dr. Jimly Asshiddiqie, S.H. (Pakar Hukum Tata Negara), Dr. Andi Hamzah, S.H., M.H. (Editor Jurnal Hukum Nasional), dan Dr. Siti Malikhatun Badriyah, S.H., M.H. (Dosen Senior FH UNDIP).</p>

      <p>Materi workshop mencakup metodologi penelitian hukum, teknik penulisan artikel jurnal, penulisan buku dan monograf, serta etika publikasi ilmiah. Peserta juga mendapat kesempatan untuk mempraktikkan teknik penulisan yang telah dipelajari dalam sesi praktik kelompok kecil.</p>

      <p>Prof. Dr. Mahfud MD dalam keynote speech-nya menekankan pentingnya karya ilmiah hukum yang berkualitas. "Karya ilmiah bukan hanya untuk memenuhi kewajiban akademik, tetapi juga untuk berkontribusi pada pengembangan ilmu hukum dan pemecahan masalah hukum di masyarakat," ujarnya.</p>
    `,
    date: "8 Januari 2024",
    image: "https://placehold.co/1200x800?text=Academic+Writing+Workshop+Legal+Research+Methodology+Conference+Room",
    category: "Penelitian",
    author: "Pusat Penelitian FH",
    tags: ["Workshop", "Karya Ilmiah", "Penelitian", "Publikasi"]
  },
  {
    id: 5,
    title: "Kuliah Umum Hukum Tata Negara",
    slug: "kuliah-umum-hukum-tata-negara",
    summary: "Menghadirkan pakar hukum tata negara untuk memberikan kuliah umum tentang perkembangan konstitusi dan demokrasi di Indonesia.",
    content: `
      <p>Fakultas Hukum Universitas Muhammadiyah menyelenggarakan Kuliah Umum Hukum Tata Negara dengan tema "Konstitusi dan Demokrasi: Tantangan dan Peluang di Era Digital" pada tanggal 5 Januari 2024. Acara ini diselenggarakan di Aula Utama Universitas dan dihadiri oleh lebih dari 300 peserta dari berbagai kalangan.</p>

      <p>Kuliah umum ini menghadirkan pembicara utama Prof. Dr. Jimly Asshiddiqie, S.H., yang merupakan mantan Ketua Mahkamah Konstitusi dan pakar hukum tata negara terkemuka di Indonesia. Beliau menyampaikan materi yang sangat komprehensif tentang perkembangan konstitusionalisme Indonesia dalam menghadapi tantangan era digital.</p>

      <p>Materi kuliah umum mencakup evolusi konstitusi Indonesia dari masa kemerdekaan hingga saat ini, demokrasi di era digital, peran Mahkamah Konstitusi dalam menjaga konstitusi, dan tantangan konstitusionalisme di masa depan seperti globalisasi, artificial intelligence, perubahan iklim, dan partisipasi generasi milenial.</p>

      <p>Dalam sesi tanya jawab yang berlangsung sangat interaktif, mahasiswa dan peserta lain mengajukan berbagai pertanyaan kritis. Prof. Jimly menekankan bahwa "Pancasila bukan hanya ideologi historis, tetapi juga panduan hidup yang sangat relevan untuk menghadapi tantangan global."</p>
    `,
    date: "5 Januari 2024",
    image: "https://placehold.co/1200x800?text=Constitutional+Law+Public+Lecture+University+Auditorium+Academic+Event",
    category: "Akademik",
    author: "Departemen HTN",
    tags: ["Kuliah Umum", "HTN", "Konstitusi", "Demokrasi"]
  },
  {
    id: 6,
    title: "Program Pengabdian Masyarakat Desa",
    slug: "program-pengabdian-masyarakat-desa",
    summary: "Tim dosen dan mahasiswa melaksanakan program pengabdian masyarakat dengan memberikan penyuluhan hukum di desa-desa sekitar kampus.",
    content: `
      <p>Tim pengabdian masyarakat Fakultas Hukum Universitas Muhammadiyah melaksanakan program penyuluhan hukum di tiga desa di Kabupaten Bantul pada tanggal 1-3 Januari 2024. Program ini melibatkan 15 dosen dan 30 mahasiswa yang memberikan edukasi hukum kepada masyarakat desa.</p>

      <p>Program pengabdian masyarakat ini merupakan implementasi dari Tri Dharma Perguruan Tinggi, khususnya dharma pengabdian kepada masyarakat. Tim dipimpin oleh Dr. Siti Nurhalimah, S.H., M.H., selaku Wakil Dekan Bidang Kemahasiswaan dan Kerjasama.</p>

      <p>Program dilaksanakan di tiga desa dengan fokus yang berbeda: Desa Wonokromo (hukum pertanahan dan sertifikasi tanah), Desa Trimulyo (hukum keluarga dan perkawinan), dan Desa Sumberagung (hukum usaha mikro dan koperasi). Total peserta mencapai 300 orang dari berbagai kalangan masyarakat.</p>

      <p>Materi penyuluhan disesuaikan dengan kebutuhan masing-masing desa, meliputi pentingnya sertifikat tanah, bahaya pernikahan anak, legalitas usaha mikro, dan berbagai aspek hukum praktis yang dibutuhkan masyarakat dalam kehidupan sehari-hari.</p>

      <p>Dr. Siti Nurhalimah menyatakan bahwa program ini akan dilanjutkan secara berkala. "Kami berkomitmen untuk terus memberikan edukasi hukum kepada masyarakat sebagai bentuk pengabdian fakultas kepada bangsa dan negara," ujarnya.</p>
    `,
    date: "3 Januari 2024",
    image: "https://placehold.co/1200x800?text=Community+Service+Program+Legal+Education+Village+Outreach+Activity",
    category: "Pengabdian",
    author: "Tim Pengabdian Masyarakat",
    tags: ["Pengabdian", "Penyuluhan Hukum", "Masyarakat", "Desa"]
  }
]

// Helper function to get news by slug
export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsData.find(news => news.slug === slug)
}

// Helper function to get all news
export function getAllNews(): NewsItem[] {
  return newsData
}

// Helper function to get news by category
export function getNewsByCategory(category: string): NewsItem[] {
  return newsData.filter(news => news.category === category)
}
