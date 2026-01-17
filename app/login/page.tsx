"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) router.push("/tracking");
    };
    checkSession();
  }, [router]);

  const handleLogin = async () => {
    setLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage("❌ " + error.message);
      setLoading(false);
      return;
    }
    router.push("/tracking");
  };

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", padding: 24, borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
      <h2 style={{ marginBottom: 20 }}>Login GrowBar</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 12 }} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 12 }} />
      <button onClick={handleLogin} disabled={loading} style={{ width: "100%", padding: 10, background: "#2f7d32", color: "white", borderRadius: 8, opacity: loading ? 0.7 : 1 }}>
        {loading ? "Loading..." : "Login"}
      </button>
      {message && <p style={{ marginTop: 16, textAlign: "center" }}>{message}</p>}
      <p style={{ marginTop: 12, textAlign: "center" }}>
        Belum punya akun? <Link href="/register" style={{ color: "#2f7d32", fontWeight: 600 }}>Daftar di sini</Link>
      </p>
    </div>
  );
}
