export default function HomePage() {

  console.log(
    "SUPABASE URL:",
    process.env.NEXT_PUBLIC_SUPABASE_URL
  )

  return (
    <div className="container">

      {/* ================= HERO ================= */}
      <section className="hero">
        <h2>
          Snack Gizi Lokal untuk <br />
          Generasi Bebas Stunting
        </h2>

        <p>
          GrowBar adalah snack sehat berbasis pangan lokal Indonesia
          untuk mendukung tumbuh kembang anak dan ibu hamil
          pada masa emas 1.000 HPK.
        </p>

        <div className="cta">
          <button>Pesan GrowBar</button>
          <button className="btn-secondary">
            Mulai Tracking
          </button>
        </div>
      </section>

      {/* ================= VALUE ================= */}
      <section className="section">
        <h3>Mengapa GrowBar?</h3>

        <div className="grid">
          <div className="card">
            <h4>🌱 Gizi Lengkap</h4>
            <p>Protein nabati untuk mendukung tumbuh kembang optimal.</p>
          </div>

          <div className="card">
            <h4>🩸 Cegah Stunting</h4>
            <p>Kaya zat besi & asam folat untuk 1.000 HPK.</p>
          </div>

          <div className="card">
            <h4>⚡ Energi Alami</h4>
            <p>Mengenyangkan tanpa membuat tubuh lemas.</p>
          </div>

          <div className="card">
            <h4>✅ Aman & Lokal</h4>
            <p>Berbahan pangan lokal, aman dikonsumsi rutin.</p>
          </div>
        </div>
      </section>

      {/* ================= PRODUK ================= */}
      <section className="section">
        <h3>Varian Produk GrowBar</h3>

        <div className="grid">
          <div className="card product-card">
            <div className="product-icon">🍌</div>
            <h4>GrowBar Pisang</h4>
            <p>Padat energi & serat alami dari pisang lokal pilihan.</p>
            <button>Lihat Produk</button>
          </div>

          <div className="card product-card">
            <div className="product-icon">🌾</div>
            <h4>GrowBar Kacang Hijau</h4>
            <p>Tinggi protein & zat besi untuk pencegahan stunting.</p>
            <button>Lihat Produk</button>
          </div>
        </div>
      </section>

      {/* ================= FITUR APP ================= */}
      <section className="section">
        <h3>Fitur Aplikasi GrowBar</h3>

        <div className="grid">
          <div className="card">
            <h4>📊 Tracking Gizi</h4>
            <p>Pantau asupan gizi harian anak dan ibu hamil.</p>
            <button>Mulai Tracking</button>
          </div>

          <div className="card">
            <h4>⏰ Reminder Konsumsi</h4>
            <p>Pengingat pintar agar konsumsi tidak terlewat.</p>
            <button>Atur Reminder</button>
          </div>

          <div className="card">
            <h4>📚 Edukasi Stunting</h4>
            <p>Materi edukasi gizi & 1.000 HPK.</p>
            <button>Belajar Sekarang</button>
          </div>

          <div className="card">
            <h4>👩‍⚕️ Konsultasi Ahli</h4>
            <p>Konsultasi dengan ahli gizi secara online.</p>
            <button>Konsultasi</button>
          </div>
        </div>
      </section>

    </div>
  )
}
