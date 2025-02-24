export default function ProductCard({ product }) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-600">{product.price} €</p>
        <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
