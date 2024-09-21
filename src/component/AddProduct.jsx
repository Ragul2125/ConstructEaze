import React, { useState } from "react";
import cross from "../assets/svg/cross.svg";
import "../css/App.css";

const AddClient = ({
  setProductDetails,
  setAddDetails
}) => {
  const [product, setProduct] = useState({
    Serial_No: 1,
    Item_Code:1 ,
    Item_Name:"" ,
    Category: "",
    Unit: ""
  });

  // const handleSubmit =(prev)=>{
  //     setClientDetials((prev)=>[...prev,client]),
  //     setAddClientDetials(false),
  //     setClient((prev)=>({...prev,Serial_No:prev.Serial_No + 1}))
  // }

  const handleSubmit = () => {
    setProductDetails((prev) => [...prev, product]);
    setAddDetails(false);
    setProduct((prev) => ({
      ...prev,
      Serial_No: clientDetials.length, // Increment Serial_No after submission
    }));
  };

  return (
    <div className="bg">
      <div className="card">
        <div className="cross">
          <img
            src={cross}
            alt="cross"
            onClick={() => {
              setAddDetails(false);
            }}
          />
        </div>
        <div className="card-content">
          <header>
            <h2>PRODUCT DETAILS</h2>
          </header>
          <div className="input-box">
            <input
              type="text"
              placeholder="Item code"
              onChange={(e) => {
                setProduct((prev) => ({ ...prev, Item_Code: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Item Name"
              onChange={(e) => {
                setProduct((prev) => ({ ...prev, Item_Name: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Category"
              onChange={(e) => {
                setProduct((prev) => ({ ...prev, Category: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Unit"
              onChange={(e) => {
                setProduct((prev) => ({ ...prev, Unit: e.target.value }));
              }}
            />
          </div>
          <div className="btn">
            <button onClick={handleSubmit}>Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClient;
