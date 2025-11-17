"use client";
import { useEffect, useState } from 'react';

export default function Products() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch('https://dummyjson.com/products/1');
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, []);

  if (!product) return <div className="product-card">Loading product...</div>;

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {product.images?.[0] && (
        <img src={product.images[0]} alt={product.title} />
      )}
    </div>
  );
}
