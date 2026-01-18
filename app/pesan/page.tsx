"use client";

import { useState } from "react";
import Link from "next/link";

export default function PesanPage() {
  const [jumlah, setJumlah] = useState(1);
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(`✅ Kamu memesan ${jumlah} GrowBar`);
    setJumlah(1);
  };

  return (
    <div style={{ padding: 40, maxWidth: 500, margin: "0 auto" }}>
      <h2>📦 Pesan GrowBar</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}
      >
        <label>Jumlah</label>
        <input
          type="number"
          min={1}
          value={jumlah}
          onChange={(e) => setJumlah(Number(e.target.value))}
        />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#2f7d32", color: "white", borderRadius: 8 }}>Pesan Sekarang</button>
      </form>

      {status && <p style={{ marginTop: 16 }}>{status}</p>}

      <Link href="/"><button style={{ marginTop: 20, padding: "10px" }}>Kembali ke Home</button></Link>
    </div>
  );
}
