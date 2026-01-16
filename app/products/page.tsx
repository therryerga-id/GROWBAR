export default function ProductsPage() {
  return (
    <div className="container">

      <section className="hero">
        <h2>Produk GrowBar</h2>
        <p>
          GrowBar adalah snack gizi berbasis pangan lokal Indonesia
          yang diformulasikan untuk mendukung tumbuh kembang anak
          dan ibu hamil pada masa emas 1.000 HPK.
        </p>
      </section>

      <section className="section">
        <div className="grid">

          <div className="card product-card">
            <div className="product-icon">🍌</div>
            <h3>GrowBar Pisang</h3>
            <p>
              Snack sehat berbahan dasar pisang dan singkong
              sebagai sumber energi alami.
            </p>

            <ul>
              <li>✔ Berat bersih 50 g</li>
              <li>✔ Energi & serat alami</li>
              <li>✔ Membantu pencernaan</li>
              <li>✔ Aman untuk anak & ibu hamil</li>
            </ul>

            <button>Lihat Detail</button>
          </div>

          <div className="card product-card">
            <div className="product-icon">🌾</div>
            <h3>GrowBar Kacang Hijau</h3>
            <p>
              Tinggi protein dan zat besi dari kacang hijau
              dan daun kelor untuk pencegahan stunting.
            </p>

            <ul>
              <li>✔ Berat bersih 50 g</li>
              <li>✔ Protein nabati tinggi</li>
              <li>✔ Kaya zat besi & asam folat</li>
              <li>✔ Cocok dikonsumsi rutin</li>
            </ul>

            <button>Lihat Detail</button>
          </div>

        </div>
      </section>

    </div>
  );
}
