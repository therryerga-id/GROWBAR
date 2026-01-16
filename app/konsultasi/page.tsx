export default function KonsultasiPage() {
  return (
    <div>
      <h2>Konsultasi Ahli Gizi</h2>

      <p>
        Saat ini konsultasi dilakukan melalui tim gizi GrowBar.
        Silakan isi formulir berikut, tim kami akan menghubungi Anda
        maksimal 1×24 jam.
      </p>

      <form style={{ maxWidth: "400px" }}>
        <input placeholder="Nama" />
        <input placeholder="WhatsApp" />
        <input placeholder="Usia Anak / Usia Kehamilan" />
        <input placeholder="Keluhan Gizi" />
        <input placeholder="Kota" />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}
