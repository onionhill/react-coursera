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
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
      order: "Order a delivery",
    },
    {
      image: Bruschetta1,
      title: "Greek Salad",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
      order: "Order a delivery",
    },
    {
      image: Creme,
      title: "Greek Salad",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
      order: "Order a delivery",
    },
  ];

  const mappedItems = menuItems.map((dish) => {
    return (
      <div className="Dish">
        <img src={dish.image} alt={dish.title} />
        <h4>{dish.title}</h4>
        <p>{dish.description}</p>
        <button>{dish.order}</button>
      </div>
    );
  });

  return <div>{mappedItems}</div>;
};

export default Dish;
