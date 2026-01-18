"use client";

import Link from "next/link";

export default function BelajarSekarang() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>📚 Edukasi Stunting</h2>
      <p>Halaman dummy untuk materi edukasi gizi & 1.000 HPK</p>
      <Link href="/"><button style={{ marginTop: 20, padding: "10px", borderRadius: 8, backgroundColor: "#2f7d32", color: "white" }}>Kembali ke Home</button></Link>
    </div>
  );
}
