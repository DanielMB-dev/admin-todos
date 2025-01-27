import { ProductCard } from '@/products/components/ProductCard'
import { products, Product} from '@/products/data/products'
import React from 'react'


const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {products.map((product) => (
          <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products