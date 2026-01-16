"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function TrackingPage() {
  const router = useRouter();

  // ===============================
  // STATE
  // ===============================
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState<any[]>([]);

  const [nama, setNama] = useState("");
  const [usia, setUsia] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [produk, setProduk] = useState("");
  const [jumlah, setJumlah] = useState(1);
  const [status, setStatus] = useState("");

  // ===============================
  // CEK LOGIN
  // ===============================
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
        return;
      }

      setLoading(false);
      fetchTracking();
    };

    checkSession();
  }, [router]);

  // ===============================
  // AMBIL DATA TRACKING (NO 2)
  // ===============================
  const fetchTracking = async () => {
    const { data, error } = await supabase
      .from("tracking")
      .select("*")
      .order("tanggal", { ascending: false });

    if (!error && data) {
      setRecords(data);
    }
  };

  // ===============================
  // SIMPAN DATA
  // ===============================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("⏳ Menyimpan...");

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      setStatus("❌ Kamu belum login");
      return;
    }

    const { error } = await supabase.from("tracking").insert({
      user_id: session.user.id,
      nama,
      usia,
      tanggal,
      produk,
      jumlah,
    });

    if (error) {
      setStatus("❌ " + error.message);
    } else {
      setStatus("✅ Catatan berhasil disimpan");
      setNama("");
      setUsia("");
      setTanggal("");
      setProduk("");
      setJumlah(1);
      fetchTracking(); // ⬅️ REFRESH DATA
    }
  };

  // ===============================
  // LOGOUT
  // ===============================
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <p>⏳ Memeriksa akun...</p>
      </div>
    );
  }

  return (
    <div className="container">
      {/* HEADER */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h2>Tracking Konsumsi GrowBar</h2>
        <button className="btn-secondary" onClick={handleLogout}>
          Logout
        </button>
      </section>

      {/* FORM */}
      <section className="section">
        <div className="card" style={{ maxWidth: 520, margin: "auto" }}>
          <h3>Catat Konsumsi Harian</h3>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
          >
            <input
              placeholder="Nama Anak / Ibu Hamil"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />

            <input
              placeholder="Usia Anak / Usia Kehamilan"
              value={usia}
              onChange={(e) => setUsia(e.target.value)}
              required
            />

            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              required
            />

            <select
              value={produk}
              onChange={(e) => setProduk(e.target.value)}
              required
            >
              <option value="">Pilih Jenis GrowBar</option>
              <option value="Pisang">GrowBar Pisang</option>
              <option value="Kacang Hijau">GrowBar Kacang Hijau</option>
            </select>

            <input
              type="number"
              min={1}
              value={jumlah}
              onChange={(e) => setJumlah(Number(e.target.value))}
              required
            />

            <button type="submit">Simpan Catatan</button>
          </form>

          {status && <p style={{ marginTop: 12 }}>{status}</p>}
        </div>
      </section>

      {/* RIWAYAT (TAMBAHAN) */}
      <section className="section">
        <h3>Riwayat Konsumsi</h3>

        {records.length === 0 && <p>Belum ada data.</p>}

        {records.map((item) => (
          <div key={item.id} className="card" style={{ marginBottom: 10 }}>
            <p><strong>{item.nama}</strong></p>
            <p>{item.produk} • {item.jumlah} bar</p>
            <p style={{ fontSize: 12, color: "#666" }}>
              {new Date(item.tanggal).toLocaleDateString()}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
