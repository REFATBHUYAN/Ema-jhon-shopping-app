import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashRestore,
  faCheckToSlot,
} from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleCartClear, children }) => {
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
      <button
        onClick={handleCartClear}
        className="my-3 font-bold bg-red-600 text-white rounded-md w-full"
      >
        Clear Cart <FontAwesomeIcon icon={faTrashRestore} />
      </button>
      {/* <button className="my-3 font-bold bg-orange-700 text-white rounded-md w-full">
        Proceed Checkout <FontAwesomeIcon icon={faCheckToSlot} />
      </button> */}
      {children}
    </div>
  );
};

export default Cart;
