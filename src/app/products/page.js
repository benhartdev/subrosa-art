import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Tableau abstrait", price: 1200, image: "./images/art1.jpg" },
  { id: 2, name: "Photographie urbaine", price: 900, image: "./images/art2.jpg" },
  { id: 3, name: "Sculpture moderne", price: 2500, image: "./images/art3.jpg" },
  { id: 4, name: "Sculpture moderne", price: 2500, image: "./images/art4.jpg" },
  { id: 5, name: "Sculpture moderne", price: 2500, image: "./images/art5.jpg" },
  { id: 6, name: "Sculpture moderne", price: 2500, image: "./images/art6.jpg" },
  { id: 7, name: "Sculpture moderne", price: 2500, image: "./images/art7.jpg" },
  { id: 8, name: "Sculpture moderne", price: 2500, image: "./images/art8.jpg" },
  { id: 9, name: "Sculpture moderne", price: 2500, image: "./images/art9.jpg" },
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
