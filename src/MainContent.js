import React from "react";
import "./css/maincontent.css";
import ChildDetails from "./ChildDetails";
import { useState } from "react";

const REGISTER_URL = "/registerForm";

const MainContent = () => {
  const handleSubmit = async (event) => {
    //console.log(event);
    event.preventDefault();
    try {
      const rawResponse = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          email,
          foodPreference,
        }),
      });
      const response = await rawResponse.json();
      console.log(response.data);
    } catch (err) {
      if (!err?.response) {
        console.log("No response from server");
      }
    }
  };

  const handleChildSelected = (e) => {
    console.log("selected the child component.");
    console.log(e.target.value);
    const selectedVal = e.target.value;
    const items = [];
    if (selectedVal === "Select") {
      setChildItems(items);
      return;
    }
    for (let i = 1; i <= selectedVal; i++) {
      items.push("Name of the Child " + i);
    }
    setChildItems(items);
  };
  const [childItems, setChildItems] = useState([]);
  const [firstName, setFirstName] = useState([""]);
  const [lastName, setlastName] = useState([""]);
  const [phoneNumber, setphoneNumber] = useState([""]);
  const [email, setemail] = useState([""]);
  const [foodPreference, setfoodPreference] = useState([""]);
  return (
    <div className="maincontent">
      <img className="banner"></img>
      <form>
        <div className="gridContainer">
          <label className="label gridItem">First Name</label>
          <input
            className="inputElement gridItem"
            type="text"
            placeholder="First Name"
            autoComplete="on"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label className="label gridItem">Second Name</label>
          <input
            type="text"
            placeholder="Second Name"
            className="inputElement gridItem"
            autoComplete="on"
            onChange={(event) => setlastName(event.target.value)}
          ></input>
          <label className="label gridItem">Contact Number </label>
          <input
            type="text"
            placeholder="Contact Number with country code [Example:+65 45231267]"
            className="inputElement gridItem"
            autoComplete="on"
            onChange={(event) => setphoneNumber(event.target.value)}
          ></input>
          <label className="label gridItem">Email Address</label>
          <input
            type="text"
            placeholder="Email Address"
            className="inputElement gridItem"
            autoComplete="on"
            onChange={(event) => setemail(event.target.value)}
          ></input>
          <label className="label gridItem">Food Preference</label>
          <select
            className="inputElement gridItem"
            onChange={(event) => {
              console.log(event);
              const val = event.target.value;
              setfoodPreference(val);
            }}
          >
            <option>Vegetarian</option>
            <option>Non Vegetarian</option>
            <option>Non Vegetarian Hallal</option>
            <option>Food not required</option>
          </select>
          <label className="label gridItem">Child Accompanying</label>
          <select
            className="inputElement gridItem"
            onChange={handleChildSelected}
          >
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <div className="childDiv">
            <label className="childDetails">Child Details</label>
          </div>
          <ChildDetails items={childItems} />
        </div>
        <div className="buttonBar">
          <label className="button" onClick={handleSubmit}>
            Submit
          </label>
          <label className="button cancelButton">Cancel</label>
        </div>
      </form>
    </div>
  );
};

export default MainContent;
