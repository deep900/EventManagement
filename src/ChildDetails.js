import React from "react";
import { useState } from "react";
import "./css/childItems.css";

const ChildDetails = ({ items }) => {
  const foodItems = ["Vegeterian", "Non-Vegeterian", "Food Not Required"];
  /*[
    { id: "Child1" },
    { id: "Child2" },
    { id: "Child3" },
  ]);*/
  return (
    <div
      className={items.length > 0 ? "childItemsPresent" : "childItemsAbsent"}
    >
      {items.map((item) => (
        <>
          <label className="label gridItem">Name</label>
          <input
            type="text"
            placeholder={item}
            className="inputElement gridItem"
            autoComplete="on"
            key={item}
          ></input>
          <label className="label gridItem">Food Preference</label>
          <select className="inputElement gridItem">
            <option>Vegetarian</option>
            <option>Non-Vegetarian</option>
            <option>Food not required</option>
          </select>
        </>
      ))}
    </div>
  );
};

export default ChildDetails;
