import Image from "next/image";

const dataProduk: any = {
  "growbar-pisang": {
    nama: "GrowBar Pisang",
    deskripsi: "Snack sehat dari pisang lokal kaya energi.",
    gambar: "/produk/growbar-pisang.png.png",
  },
  "growbar-kacang-hijau": {
    nama: "GrowBar Kacang Hijau",
    deskripsi: "Tinggi protein dan zat besi untuk cegah stunting.",
    gambar: "/produk/growbar-kacang-hijau.png.png",
  },
};

export default function DetailProduk({ params }: { params: { slug: string } }) {
  const produk = dataProduk[params.slug];

  if (!produk) {
    return <h2>Produk tidak ditemukan</h2>;
  }

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", textAlign: "center" }}>
      <Image
        src={produk.gambar}
        alt={produk.nama}
        width={400}
        height={260}
        style={{ objectFit: "contain" }}
      />
      <h1>{produk.nama}</h1>
      <p>{produk.deskripsi}</p>
    </div>
  );
}
