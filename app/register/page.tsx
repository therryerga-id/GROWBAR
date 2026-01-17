"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage("❌ " + error.message);
      setLoading(false);
      return;
    }
    setMessage("✅ Berhasil daftar. Cek email untuk verifikasi.");
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", padding: 24, borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
      <h2 style={{ marginBottom: 20 }}>Daftar Akun GrowBar</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 12 }} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 12 }} />
      <button onClick={handleRegister} disabled={loading} style={{ width: "100%", padding: 10, background: "#2f7d32", color: "white", borderRadius: 8, opacity: loading ? 0.7 : 1 }}>
        {loading ? "Loading..." : "Daftar"}
      </button>
      {message && <p style={{ marginTop: 16, textAlign: "center" }}>{message}</p>}
      <p style={{ marginTop: 12, textAlign: "center" }}>
        Sudah punya akun? <Link href="/login" style={{ color: "#2f7d32", fontWeight: 600 }}>Login</Link>
      </p>
    </div>
  );
}
