export default function TokoPage() {
  return (
    <div className="container">

      {/* ================= HERO ================= */}
      <section className="hero">
        <h2>Toko GrowBar</h2>
        <p>
          Pesan GrowBar secara mudah untuk kebutuhan keluarga,
          sekolah, dan program komunitas gizi.
        </p>
      </section>

      {/* ================= PRODUK ================= */}
      <section className="section">
        <div className="grid">

          <div className="card product-card">
            <div className="product-icon">🍌</div>
            <h3>GrowBar Pisang</h3>
            <p>Snack sehat dari pisang & singkong lokal.</p>

            <ul>
              <li>✔ Berat bersih 50 g</li>
              <li>✔ Sumber energi & serat</li>
              <li>✔ Cocok untuk anak & ibu hamil</li>
            </ul>

            <strong>Rp 7.500 / pcs</strong>

            <button style={{ marginTop: "1rem" }}>
              Pesan Sekarang
            </button>
          </div>

          <div className="card product-card">
            <div className="product-icon">🌾</div>
            <h3>GrowBar Kacang Hijau</h3>
            <p>Tinggi protein & zat besi dari kacang hijau dan kelor.</p>

            <ul>
              <li>✔ Berat bersih 50 g</li>
              <li>✔ Protein nabati</li>
              <li>✔ Mendukung pencegahan stunting</li>
            </ul>

            <strong>Rp 7.500 / pcs</strong>

            <button style={{ marginTop: "1rem" }}>
              Pesan Sekarang
            </button>
          </div>

        </div>
      </section>

      {/* ================= INFO PEMESANAN ================= */}
      <section className="section">
        <div className="card">
          <h3>ℹ️ Informasi Pemesanan</h3>
          <p>
            Saat ini pemesanan GrowBar dilakukan melalui
            admin WhatsApp dan mitra distribusi daerah
            untuk menjaga kualitas dan pemerataan distribusi.
          </p>

          <button className="btn-secondary">
            Pesan via WhatsApp
          </button>
        </div>
      </section>

    </div>
  );
}
