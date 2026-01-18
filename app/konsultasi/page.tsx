"use client";

export default function KonsultasiPage() {
  const nomorAhliGizi = "6281234567890"; // GANTI dengan nomor WA ahli gizi

  const pesanWhatsApp = encodeURIComponent(
    `Halo Tim GrowBar 👋
Saya ingin konsultasi gizi.

Nama:
Usia Anak / Usia Kehamilan:
Keluhan Gizi:
Kota:

Terima kasih 🙏`
  );

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <h2>Konsultasi Ahli Gizi</h2>
        <p>
          GrowBar menyediakan layanan konsultasi gizi untuk mendampingi
          orang tua dan ibu hamil dalam memenuhi kebutuhan nutrisi optimal,
          terutama pada masa emas 1.000 HPK.
        </p>
      </section>

      {/* PENJELASAN */}
      <section className="section">
        <h3>Bagaimana Konsultasi Dilakukan?</h3>
        <ul>
          <li>🧑‍⚕️ Ditangani langsung oleh tim ahli gizi GrowBar</li>
          <li>📱 Konsultasi dilakukan via WhatsApp</li>
          <li>⏱️ Respon maksimal 1 × 24 jam</li>
          <li>🔒 Data bersifat pribadi & aman</li>
        </ul>
      </section>

      {/* FORM + CTA */}
      <section className="section">
        <div className="card" style={{ maxWidth: 480 }}>
          <h3>Mulai Konsultasi</h3>
          <p>
            Isi data singkat berikut agar ahli gizi kami dapat memahami
            kondisi Anda dengan lebih baik.
          </p>

          <form style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input placeholder="Nama" />
            <input placeholder="Nomor WhatsApp" />
            <input placeholder="Usia Anak / Usia Kehamilan" />
            <input placeholder="Keluhan Gizi" />
            <input placeholder="Kota / Domisili" />
          </form>

          <a
            href={`https://wa.me/${nomorAhliGizi}?text=${pesanWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "100%",
                marginTop: 16,
              }}
            >
              💬 Konsultasi via WhatsApp
            </button>
          </a>
        </div>
      </section>

      {/* CATATAN */}
      <section className="section">
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
          Catatan: Layanan konsultasi ini bersifat edukatif dan tidak
          menggantikan pemeriksaan medis langsung.
        </p>
      </section>
    </div>
  );
}
