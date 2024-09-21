// pages/index.tsx
"use client"
import { useState, useEffect } from 'react';
import ProductCard from '@/components/cards/templates_product_card';

interface Product {
  id: number;
  name: string;
  genre: string;
  price: number;
  image: string;
  productUrl: string;
}

export default function ProductsCardSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:3000/api/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-8">Available Templates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            genre={product.genre}
            price={product.price}
            image={product.image}
            productUrl={product.productUrl}
          />
        ))}
      </div>
    </div>
  );
}
