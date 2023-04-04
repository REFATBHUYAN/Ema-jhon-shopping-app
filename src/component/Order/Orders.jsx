import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="flex w-3/4 mx-auto min-h-full items-center mt-14 gap-4">
      <div className="w-1/2 ">
        {cart.map((ct) => (
          <ReviewItem
            reviewItem={ct}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className=" w-1/3 bg-[rgba(255,153,0,0.3)] text-center rounded-md p-4 h-full">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
