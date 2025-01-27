import { Product, products } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart/actions/components/ItemCard";
import { cookies } from "next/headers";
import React from "react";
import { object } from "yup";
import { WidgetItem } from '../../../components/WidgetItem';

interface ShoppingCartItem {
  product: {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
  };
  quantity: number;
}
const CartPage = () => {
  const cookieStore = cookies();
  const cart = cookieStore.get("cart");
  let cartObject = {};
  if (cart) {
    cartObject = JSON.parse(cart.value);
  }
  let productos: ShoppingCartItem[] = [];

  for (const [id, qty] of Object.entries(cartObject)) {
    const product = products.find((prod) => prod.id === id);
    if (product) {
      productos.push({ product: product, quantity: qty });
    }
  }

  const total : number = productos.reduce((acc, item) => item.product.price * item.quantity +acc, 0)

  return (
    <div className="flex">
      <div className="flex sm:flex-col gap-2 sm:w-8/12">
        {productos.map((prod) => (
          <ItemCard
            key={prod.product?.id}
            product={prod.product as Product}
            quantity={prod.quantity as number}
          />
        ))}
      </div>
      <div className="flex flex-col p-2 justify-center items-center sm:w-4/12 gap-2">
        <h3 className="text-2xl">Total Carrito</h3>
        <h2>Sub total: ${total.toFixed(2)}</h2>
        <h2>IVA 19% ${(total * 0.19).toFixed(2)}</h2>
        <h2>Total a pagar ${(total * 0.19 + total).toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CartPage;
