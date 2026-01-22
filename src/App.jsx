import DataImage, { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}

      <div className="hero mx-auto max-w-7xl grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 py-10 pt-20 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-blue-800 w-full sm:w-fit p-3 sm:p-4 rounded-2xl text-white">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Bermain Game Mengasah Kemampuan/Skill Coding Saya. 🎯</q>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold mb-6">
            Hai, saya Nabil Fathir Mahendra
          </h1>

          <p className="text-base leading-loose mb-6 opacity-50">
            Saya seorang siswa SMK yang sedang belajar menjadi Fullstack
            Developer dengan minat di pengembangan web, mobile, digital
            marketing, dan desain grafis. Saya percaya bahwa desain dan
            fungsionalitas harus berjalan beriringan untuk menciptakan
            pengalaman pengguna yang optimal, dan saya terus mengembangkan
            keterampilan saya untuk berkontribusi pada proyek-proyek yang
            menantang dan inovatif.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
            <a
              href="#"
              aria-label="Download CV"
              className="inline-flex items-center gap-2 bg-blue-700 py-3 px-5 rounded-2xl hover:bg-blue-800 w-full sm:w-auto justify-center touch-manipulation"
            >
              Download CV
              <i className="ri-download-line ri-lg" />
            </a>

            <a
              href="#proyek"
              aria-label="Lihat Proyek"
              className="inline-flex items-center gap-2 bg-blue-700 py-3 px-5 rounded-2xl hover:bg-blue-800 w-full sm:w-auto justify-center touch-manipulation text-white"
            >
              Lihat Proyek
              <i className="ri-arrow-down-line ri-lg" />
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-full max-w-sm sm:max-w-md md:max-w-[500px] rounded-2xl mx-auto md:ml-auto object-cover animate__animated animate__fadeInUp animate__delay-2s"
          loading="lazy"
        />
      </div>

      {/* Tentang Section */}

      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-6 md:p-8 bg-blue-900 rounded-lg text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
          <img src={DataImage.HeroImage} alt="Hero Image" className="hidden sm:block w-12 rounded-md mb-6" loading="lazy"/>

          <p className="text-base leading-loose mb-6 md:mb-10">
            Hai — saya Nabil Fathir Mahendra , siswa SMK yang sedang berproses menjadi
            Fullstack Developer. Saya memiliki minat pada pengembangan web,
            digital marketing, dan desain grafis. Saya percaya bahwa desain dan
            fungsionalitas harus berjalan beriringan untuk menciptakan
            pengalaman pengguna yang optimal, dan saya berkomitmen terus belajar
            untuk menghadirkan hasil terbaik bagi klien dan pengguna.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full md:w-2/3 mx-auto mt-8 md:mt-10 gap-6">
          <img src={DataImage.HeroImage} alt="Hero Image" className="hidden sm:block w-10 md:w-12 rounded-md" loading="lazy"/>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                45<span className="text-lg sm:text-xl">+</span>
              </h2>
              <p className="text-sm sm:text-base">Proyek Selesai</p>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                4<span className="text-lg sm:text-xl">+</span>
              </h2>
              <p className="text-sm sm:text-base">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}

      <div className="tools mt-32">
        <h1 className="text-4xl leading-snug font-bold mb-4 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">Tools Yang Digunakan</h1>
        <p className="w-full md:w-2/5 text-base leading-loose opacity-50 mx-auto text-center md:text-left" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
          Berikut ini adalah beberapa tools yang sering saya gunakan dalam
          pengembangan proyek:
        </p>

        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center justify-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
          {listTools.map((tool) => (
            <div key={tool.id} className="flex flex-col items-center p-2">
              <img
                src={tool.gambar}
                alt={tool.nama}
                className="w-12 sm:w-14 p-2 bg-blue-800 rounded-md hover:bg-blue-900 transition"
                loading="lazy"
              />

              <span className="text-xs mt-2 text-center w-28 truncate font-medium">{tool.nama}</span>

              <p className="text-[11px] text-center mt-1 opacity-60">{tool.ket}</p>

              <span className="mt-2 inline-block text-[11px] bg-blue-700 px-2 py-0.5 rounded-full opacity-80 text-white">{tool.dad}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Proyek Section */}

      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">Berikut ini adalah beberapa proyek yang telah saya buat.</p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="bg-blue-900 rounded-lg overflow-hidden p-4 flex flex-col">
              <img src={proyek.gambar} alt={proyek.nama} className="w-full h-40 sm:h-44 md:h-36 lg:h-44 object-cover rounded-md" loading="lazy"/>

              <h3 className="text-lg sm:text-xl font-bold mt-4">{proyek.nama}</h3>

              <p className="text-sm text-muted-foreground mb-3 opacity-60">{proyek.desk}</p>

              <div className="flex flex-wrap mb-4 gap-2">
                {proyek.tools.map((tool, index) => (
                  <span key={index} className="inline-block bg-blue-800 px-2 py-0.5 rounded-full text-[11px] opacity-80 mr-2 text-white">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-auto text-center w-full">
                <a href="#" target="_blank" rel="noopener" aria-label={`Lihat website ${proyek.nama}`} className="inline-block w-full sm:w-auto bg-blue-700 px-4 py-3 rounded-full text-white hover:bg-blue-800">Lihat Hasil Proyek</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kontak Section */}

      <div className="kontak mt-32 p-10" id="kontak" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">Silakan hubungi saya melalui email atau media sosial.</p>
        <form action="https://formsubmit.co/j45t1n0505@gmail.com" method="POST" 
        className="sm:w-full max-w-2xl mx-auto bg-blue-900 p-10 w-fit mx-auto rounded-md"
        autoComplete="off"
        >
          <div className="grid gap-4 flex flex-col gap-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
            <div className="grid gap-4 flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">Nama Lengkap</label>
              <input id="nama" type="text" name="nama" placeholder=" Masukkan nama lengkap Anda..." className="border border-zinc-500 rounded-sm" required />
            </div>

            <div className="grid gap-4 flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">Email</label>
              <input id="email" type="email" name="email" placeholder=" Masukkan email Anda..." className="border border-zinc-500 rounded-sm" required />
            </div>

            <div className="grid gap-4 flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea id="pesan" name="pesan" cols="30" rows="5" placeholder="Masukkan Pesan, Saran Dan Kritikan..." 
              className="border border-zinc-500 p-2 rounded-md" required
              ></textarea>
            </div>

            <div className="text-center grid gap-4 flex flex-col gap-2">
              <button type="submit" className="inline-block bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-red-800 border border-zinc-500 rounded-sm">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>

    </>
  );
}

export default App;
