import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTrash,
  faTrashRestore,
} from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ reviewItem, handleRemoveFromCart }) => {
  const { id, img, price, name, quantity } = reviewItem;
  return (
    <div className="rounded-md border-2 mb-4 p-2 flex">
      <img className="w-20 h-20 rounded-md mr-3" src={img} alt="" />
      <div className="flex justify-between items-center w-full">
        <div>
          <h2 className="font-bold">{name}</h2>
          <p>
            Price:<small className="text-orange-500"> ${price}</small>
          </p>
          <p>
            Quantity:<small> ${quantity}</small>
          </p>
        </div>
        <button
          onClick={() => handleRemoveFromCart(id)}
          className="h-10 w-10 rounded-full bg-orange-200 hover:bg-orange-400 text-orange-600"
        >
          <FontAwesomeIcon icon={faTrashRestore} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
