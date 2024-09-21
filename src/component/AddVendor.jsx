import React, { useState } from "react";
import cross from "../assets/svg/cross.svg";
import "../css/App.css";

const AddVendor = ({
 setVendorDetails,
  setAddDetails
}) => {
  const [vendor, setVendor] = useState({
    Serial_No: 1,
    Name:"" ,
    Address:"",
    GSTin:"" ,
    Phone_Number: "",
  });

 

  const handleSubmit = () => {
    setVendorDetails((prev) => [...prev, vendor]);
    setAddDetails(false);
    setVendor((prev) => ({
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
            <h2>VENDOR DETAILS</h2>
          </header>
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setVendor((prev) => ({ ...prev, Name: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => {
                setVendor((prev) => ({ ...prev, Address: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="GSTin"
              onChange={(e) => {
                setVendor((prev) => ({ ...prev, GSTin: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Category"
              onChange={(e) => {
                setVendor((prev) => ({ ...prev, Phone_Number: e.target.value }));
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

export default AddVendor;
