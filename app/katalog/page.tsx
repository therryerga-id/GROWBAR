const products = [
  {
    name: "GrowBar Banana Oat",
    desc: "Snack pisang oat tinggi serat untuk energi & pencernaan sehat",
    price: "Rp 6.000",
    image: "/images/pisang.png",
  },
  {
    name: "GrowBar Kacang Hijau",
    desc: "Protein nabati untuk tumbuh kembang anak",
    price: "Rp 6.000",
    image: "/images/kacang.png",
  },
];

export default function KatalogPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Katalog GrowBar</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4">
            <img src={p.image} className="h-40 mx-auto" />
            <h2 className="font-bold mt-2">{p.name}</h2>
            <p className="text-sm text-gray-600">{p.desc}</p>
            <p className="mt-2 font-semibold text-green-700">{p.price}</p>
            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              Beli
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
