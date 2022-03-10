import React,{useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] =useState(false)
  const cartStatus = cart ? "in-cart" : ""
  const buttonText = cart ? "Remove From Cart" : "Add to Cart"
  const buttonClass = cart ? "remove" : "add"
  function cartClick (){
    setCart(!cart);
  }

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={cartClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
