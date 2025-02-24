import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Tableau abstrait", price: 120, image: "./images/art1.jpg" },
  { id: 2, name: "Photographie urbaine", price: 90, image: "./images/art2.jpg" },
  { id: 3, name: "Sculpture moderne", price: 250, image: "./images/art3.jpg" },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Nos Œuvres</h1>
      <p className="text-gray-600 text-center mb-6">Découvrez nos œuvres d’art uniques.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
