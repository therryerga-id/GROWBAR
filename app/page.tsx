"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  // ================= STYLES =================
  const cardStyle: React.CSSProperties = {
    flex: "1 1 250px",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
    marginBottom: 24,
  };

  const productCardStyle: React.CSSProperties = {
    ...cardStyle,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const gridStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 24,
    justifyContent: "center",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "14px 28px",
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
  };

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
     {/* ================= HERO ================= */}
<section
  className="hero"
  style={{
    backgroundImage: "url('/produk/hero-background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    marginBottom: 60,
    padding: "1.5rem",
  }}
>
  <div
    className="hero-card"
    style={{
      maxWidth: 640,
      width: "100%",
      background: "rgba(255,255,255,0.88)",
      padding: "2.8rem 2.2rem",
      borderRadius: 22,
      backdropFilter: "blur(8px)",
      textAlign: "center",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    }}
  >
    <h2
      style={{
        color: "#2e7d32",
        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
        fontWeight: 700,
        marginBottom: "1rem",
        lineHeight: 1.3,
      }}
    >
      Snack Gizi Lokal untuk <br />
      Generasi Bebas Stunting
    </h2>

    <p
      style={{
        color: "#444",
        fontSize: "1rem",
        lineHeight: 1.6,
        marginBottom: "2rem",
      }}
    >
      GrowBar adalah snack sehat berbasis pangan lokal Indonesia untuk mendukung
      tumbuh kembang anak dan ibu hamil pada masa emas 1.000 HPK.
    </p>

    <div
      className="cta"
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <button
        style={{
          backgroundColor: "#8bc34a",
          color: "#1b5e20",
          border: "none",
          padding: "0.75rem 1.7rem",
          borderRadius: 999,
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/pesan")}
      >
        Pesan GrowBar
      </button>

      <button
        style={{
          backgroundColor: "#2e7d32",
          color: "#fff",
          border: "none",
          padding: "0.75rem 1.7rem",
          borderRadius: 999,
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/tracking")}
      >
        Mulai Tracking
      </button>
    </div>
  </div>
</section>


      {/* ================= VALUE ================= */}
      <section style={{ marginBottom: 60 }}>
        <h3 style={{ textAlign: "center", marginBottom: 24 }}>Mengapa GrowBar?</h3>
        <div style={gridStyle}>
          <div style={cardStyle}><h4>🌱 Gizi Lengkap</h4><p>Protein nabati untuk tumbuh kembang optimal.</p></div>
          <div style={cardStyle}><h4>🩸 Cegah Stunting</h4><p>Kaya zat besi & asam folat.</p></div>
          <div style={cardStyle}><h4>⚡ Energi Alami</h4><p>Mengenyangkan tanpa lemas.</p></div>
          <div style={cardStyle}><h4>✅ Aman & Lokal</h4><p>Pangan lokal, aman dikonsumsi rutin.</p></div>
          <div style={cardStyle}><h4>🌿 Ramah Lingkungan</h4><p>Kemasan minimalis & berkelanjutan.</p></div>
          <div style={cardStyle}><h4>👩‍👧 Mendukung Keluarga</h4><p>Nutrisi ibu & anak.</p></div>
        </div>
      </section>

      {/* ================= PRODUK ================= */}
<section style={{ marginBottom: 60 }}>
  <h3 style={{ textAlign: "center", marginBottom: 24 }}>
    Varian Produk GrowBar
  </h3>

  <div style={gridStyle}>
    {/* PRODUK PISANG */}
    <div style={productCardStyle}>
      <img
        src="/produk/growbar-pisang.png.png"
        alt="GrowBar Pisang"
        style={{
          width: "100%",
          maxWidth: 280,
          height: "auto",
          objectFit: "contain",
          marginBottom: 12,
        }}
      />
      <h4>GrowBar Pisang</h4>
      <p>Padat energi & serat alami dari pisang lokal pilihan.</p>
      <Link href="/produk/growbar-pisang.png.png">
        <button
          style={{
            ...buttonStyle,
            backgroundColor: "#2f7d32",
            color: "white",
          }}
        >
          Lihat Produk
        </button>
      </Link>
    </div>

    {/* PRODUK KACANG HIJAU */}
    <div style={productCardStyle}>
      <img
        src="/produk/growbar-kacang-hijau.png.png"
        alt="GrowBar Kacang Hijau"
        style={{
          width: "100%",
          maxWidth: 280,
          height: "auto",
          objectFit: "contain",
          marginBottom: 12,
        }}
      />
      <h4>GrowBar Kacang Hijau</h4>
      <p>Tinggi protein & zat besi untuk pencegahan stunting.</p>
      <Link href="/produk/growbar-kacang-hijau.png.png">
        <button
          style={{
            ...buttonStyle,
            backgroundColor: "#2f7d32",
            color: "white",
          }}
        >
          Lihat Produk
        </button>
      </Link>
    </div>
  </div>
</section>


      {/* ================= FITUR APP ================= */}
      <section style={{ marginBottom: 60 }}>
        <h3 style={{ textAlign: "center", marginBottom: 24 }}>Fitur Aplikasi GrowBar</h3>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h4>📊 Tracking Gizi</h4>
            <p>Pantau asupan gizi harian.</p>
            <button
              style={{ ...buttonStyle, backgroundColor: "#2f7d32", color: "white" }}
              onClick={() => router.push("/tracking")}
            >
              Mulai Tracking
            </button>
          </div>

          <div style={cardStyle}>
            <h4>⏰ Reminder Konsumsi</h4>
            <p>Pengingat pintar konsumsi.</p>
            <button
              style={{ ...buttonStyle, backgroundColor: "#2f7d32", color: "white" }}
              onClick={() => alert("Fitur ini masih dalam pengembangan 😎")}
            >
              Atur Reminder
            </button>
          </div>

          <div style={cardStyle}>
            <h4>📚 Edukasi Stunting</h4>
            <p>Materi gizi & 1.000 HPK.</p>
            <button
              style={{ ...buttonStyle, backgroundColor: "#2f7d32", color: "white" }}
              onClick={() => alert("Fitur ini masih dalam pengembangan 😎")}
            >
              Belajar Sekarang
            </button>
          </div>

          <div style={cardStyle}>
            <h4>👩‍⚕️ Konsultasi Ahli</h4>
            <p>Konsultasi online.</p>
            <button
              style={{ ...buttonStyle, backgroundColor: "#2f7d32", color: "white" }}
              onClick={() => alert("Fitur ini masih dalam pengembangan 😎")}
            >
              Konsultasi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const hero: any = {
  hero: {
    minHeight: "90vh",
    backgroundImage: "url('/produk/hero-background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
  },

  overlayCard: {
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: "20px",
    padding: "2.5rem",
    maxWidth: "520px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },

  title: {
    color: "#2e7d32",
    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
    fontWeight: "700",
    marginBottom: "1rem",
  },

  desc: {
    color: "#444",
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "1.8rem",
  },

  buttonGroup: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  primaryBtn: {
    backgroundColor: "#8bc34a",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "999px",
    fontWeight: "600",
    cursor: "pointer",
  },

  secondaryBtn: {
    backgroundColor: "#2e7d32",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "999px",
    fontWeight: "600",
    cursor: "pointer",
  },
};
