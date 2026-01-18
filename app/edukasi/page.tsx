export default function EdukasiPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <h2>Edukasi Gizi Keluarga</h2>
        <p>
          GrowBar hadir bukan hanya sebagai camilan sehat, tetapi juga sebagai
          sahabat keluarga Indonesia dalam memahami gizi yang tepat, terutama
          pada masa krusial 1.000 Hari Pertama Kehidupan (HPK).
        </p>
      </section>

      {/* PENJELASAN UMUM */}
      <section className="section">
        <h3>Apa itu 1.000 HPK?</h3>
        <p>
          1.000 Hari Pertama Kehidupan adalah periode emas yang dimulai sejak
          kehamilan hingga anak berusia 2 tahun. Pada masa ini, asupan gizi
          yang tepat sangat menentukan tumbuh kembang fisik, kecerdasan,
          dan kesehatan anak di masa depan.
        </p>
      </section>

      {/* GRID EDUKASI */}
      <section className="section grid">
        <div className="card">
          <h4>🌱 Protein untuk Tumbuh Kembang</h4>
          <p>
            Protein berperan penting dalam pembentukan jaringan tubuh,
            otot, serta perkembangan otak anak. Sumber protein nabati
            lokal seperti kacang-kacangan dapat menjadi pilihan sehat
            dan terjangkau.
          </p>
        </div>

        <div className="card">
          <h4>🩸 Zat Besi & Pencegahan Stunting</h4>
          <p>
            Kekurangan zat besi dapat menyebabkan anemia yang berdampak
            pada risiko stunting. Konsumsi makanan kaya zat besi membantu
            menjaga energi dan daya tahan tubuh anak.
          </p>
        </div>

        <div className="card">
          <h4>🍌 Camilan Sehat Anak</h4>
          <p>
            Anak usia sekolah membutuhkan camilan yang tidak hanya
            mengenyangkan, tetapi juga bergizi. Pilih camilan rendah gula,
            tinggi serat, dan berbahan alami.
          </p>
        </div>

        <div className="card">
          <h4>🤰 Gizi Seimbang Ibu Hamil</h4>
          <p>
            Asupan gizi ibu hamil memengaruhi kesehatan janin. Kombinasi
            karbohidrat, protein, vitamin, dan mineral penting untuk
            mendukung kehamilan yang sehat.
          </p>
        </div>
      </section>

      {/* PENUTUP */}
      <section className="section">
        <div className="card">
          <h3>Komitmen GrowBar</h3>
          <p>
            GrowBar menggunakan bahan pangan lokal Indonesia sebagai bentuk
            dukungan terhadap ketahanan pangan dan kesehatan keluarga.
            Melalui edukasi dan produk bergizi, kami ingin ikut berkontribusi
            menciptakan generasi bebas stunting.
          </p>
        </div>
      </section>
    </div>
  );
}
