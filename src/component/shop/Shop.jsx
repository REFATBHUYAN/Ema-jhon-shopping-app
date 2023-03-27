import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import Product from "../product/Product";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = product.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [product]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="flex">
      <div className="w-3/4 grid grid-cols-3 gap-3 m-4">
        {product.slice(0, 20).map((item) => (
          <Product
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="w-1/4 bg-[rgba(255,153,0,0.3)] p-8">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;