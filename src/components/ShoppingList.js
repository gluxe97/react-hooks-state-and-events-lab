import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory]=useState("All");
  

function changed(event){
  setSelectedCategory(event.target.value);
}
const filtered =items.filter((products) => {
  if(selectedCategory === "All")
  return true;
  else {
    return products.category === selectedCategory;
  }})


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changed} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
