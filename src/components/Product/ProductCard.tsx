'use client';

import Image from 'next/image';
import Link from 'next/link';

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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.product_name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{product.product_name}</div>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Brand:</span> {product.brand}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Category:</span> {product.category}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
        <Link href={`/product/${product.id}`} passHref>
          <span className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            View Details
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;