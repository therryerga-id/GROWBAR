import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "GrowBar - Snack Gizi Lokal Indonesia",
  description:
    "GrowBar adalah snack sehat untuk anak 2–12 tahun dan ibu hamil, mencegah stunting & gizi 1000 HPK.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <footer className="footer">
          © 2026 GrowBar – Gizi Lokal untuk Generasi Sehat
        </footer>
      </body>
    </html>
  );
}
