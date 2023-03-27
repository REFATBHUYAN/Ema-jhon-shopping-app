import React from "react";

const Cart = ({ cart }) => {
  //   const { cart } = props;
  //   console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
    quantity = quantity + product.quantity;
  }
  let tex = (total * 7) / 100;
  let grandTotal = total + tex + shipping;

  return (
    <div className="pl-3">
      <h4 className="font-bold text-2xl">Order Summary</h4>
      <p className="my-3">Selected Item: {quantity}</p>
      <p className="my-3">Total Price: $ {total}</p>
      <p className="my-3">Total Shipping: {shipping}</p>
      <p className="my-3">Tex: {tex.toFixed(2)}</p>
      <p className="my-3 font-bold text-2xl">
        Grand Total: {grandTotal.toFixed(2)}
      </p>
    </div>
  );
};

export default Cart;
