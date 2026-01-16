export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-800 mb-2">
        Dashboard GrowBar 🌱
      </h1>
      <p className="text-gray-600 mb-6">
        Selamat datang! Pantau kesehatanmu hari ini.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <a href="/app/katalog" className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
          🛒 Katalog Produk
        </a>
        <a href="/app/tracking" className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
          📊 Tracking Konsumsi
        </a>
        <a href="/app/konsultasi" className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
          👩‍⚕️ Konsultasi Ahli Gizi
        </a>
      </div>
    </div>
  );
}
