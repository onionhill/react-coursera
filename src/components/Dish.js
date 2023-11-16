import React from "react";
import "../components/styles/Dish.css";

import Salad from "../components/assets/salad.jpg";
import Bruschetta1 from "../components/assets/bruschetta1.jpg";
import Creme from "../components/assets/creme.jpg";

const Dish = () => {
  const menuItems = [
    {
      image: Salad,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
      order: "Order a delivery",
    },
    {
      image: Bruschetta1,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
      order: "Order a delivery",
    },
    {
      image: Creme,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
      order: "Order a delivery",
    },
  ];

  const mappedItems = menuItems.map((dish) => {
    return (
      <>
        <div className="card">
          <div className="image-container">
            <img src={dish.image} alt={dish.title} />
          </div>
          <div className="dish-card-text">
            <h3>{dish.title}</h3>
            <h3>{dish.price}</h3>
            <p>{dish.description}</p>
          </div>

          <button>{dish.order}</button>
        </div>
      </>
    );
  });

  return <div className="dish-cards">{mappedItems}</div>;
};

export default Dish;