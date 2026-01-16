export default function TestimoniPage() {
  return (
    <div>
      <h2>Testimoni</h2>

      <p>
        Pengalaman orang tua, guru, dan kader kesehatan yang telah
        menggunakan GrowBar.
      </p>

      <blockquote>
        <p>
          “Anak saya lebih semangat dan tidak rewel saat sarapan sejak
          rutin konsumsi GrowBar.”
        </p>
        <strong>— Ibu R, Orang Tua Balita</strong>
      </blockquote>

      <blockquote>
        <p>
          “GrowBar sangat membantu program PMT di posyandu kami.”
        </p>
        <strong>— Kader Posyandu, Jawa Tengah</strong>
      </blockquote>

      <hr />

      <h3>Kirim Testimoni Anda</h3>

      <form style={{ maxWidth: "400px" }}>
        <input placeholder="Nama / Inisial" />
        <input placeholder="Peran (Orang Tua / Guru / Kader)" />
        <textarea placeholder="Testimoni" />
        <button type="submit">Kirim Testimoni</button>
      </form>
    </div>
  );
}
