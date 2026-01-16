export default function ReminderPage() {
  return (
    <div>
      <h2>Reminder Sehat</h2>

      <p>
        Reminder Sehat membantu keluarga membangun kebiasaan
        konsumsi gizi yang teratur dan berkelanjutan.
      </p>

      <h3>Atur Pengingat</h3>

      <form style={{ maxWidth: "400px" }}>
        <input placeholder="Nama Anak / Ibu Hamil" />
        <select>
          <option>Jenis Pengingat</option>
          <option>Minum & Makan Pagi</option>
          <option>Konsumsi GrowBar</option>
          <option>Makan Siang</option>
          <option>Makan Malam</option>
        </select>
        <input type="time" />
        <input placeholder="WhatsApp (opsional)" />
        <button type="submit">Simpan Reminder</button>
      </form>

      <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
        *Pengingat masih bersifat manual (versi demo).
      </p>
    </div>
  );
}
