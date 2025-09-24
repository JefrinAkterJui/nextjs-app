import ProductCard from '@/components/Product/ProductCard';
import React from 'react';

// Define the type for a single product
export interface ProductCardProps {
  product: {
    id: number;
    product_name: string;
    category: string;
    brand: string;
    price: number;
    image: string;
  };
}

const ProductPage = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products: ProductCardProps['product'][] = await res.json();

  return (
    <div>
      <h1>All Products</h1>
      <div className=' grid grid-cols-3 justify-center gap-3 w-[90%] mx-auto'>
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
};

export default ProductPage;