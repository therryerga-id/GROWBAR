export default function KontakPage() {
  return (
    <div>
      <h2>Kontak & Kemitraan</h2>

      <p>
        GrowBar membuka peluang kerja sama dengan berbagai pihak
        untuk mendukung pemenuhan gizi dan pencegahan stunting di Indonesia.
      </p>

      <p>
        Kami siap bekerja sama dengan <strong>sekolah, posyandu,
        puskesmas, program CSR,</strong> dan distributor daerah.
      </p>

      <h3>Ajukan Kerja Sama</h3>

      <form style={{ maxWidth: "400px" }}>
        <input placeholder="Nama Instansi" />
        <input placeholder="WhatsApp" />
        <input placeholder="Kota / Kabupaten" />
        <input placeholder="Jenis Kerja Sama" />
        <input placeholder="Jumlah Sasaran" />
        <button type="submit">Kirim Pengajuan</button>
      </form>

      <hr />

      <h3>Kontak</h3>
      <p>
        WhatsApp: <strong>08xxxxxxxxxx</strong>
      </p>
      <p>Email: <strong>growbar@email.com</strong></p>
    </div>
  );
}
