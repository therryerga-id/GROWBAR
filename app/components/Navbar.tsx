"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="header">
      {/* LOGO */}
      <div className="logo">GrowBar</div>

      {/* NAVIGATION */}
      <nav className="nav">
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>

        <Link href="/edukasi" className={pathname === "/edukasi" ? "active" : ""}>
          Edukasi
        </Link>

        <Link
          href="/konsultasi"
          className={pathname === "/konsultasi" ? "active" : ""}
        >
          Konsultasi
        </Link>

        <Link
          href="/tracking"
          className={pathname === "/tracking" ? "active" : ""}
        >
          Tracking
        </Link>

        <Link href="/toko" className={pathname === "/toko" ? "active" : ""}>
          Toko
        </Link>

        {/* CTA */}
        <Link
          href="/login"
          className={pathname === "/login" ? "active" : ""}
          style={{
            background: "rgba(255,255,255,0.25)",
            padding: "6px 14px",
            borderRadius: "14px",
            fontWeight: 600,
          }}
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
