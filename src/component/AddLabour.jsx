import React, { useState } from "react";
import cross from "../assets/svg/cross.svg";
import "../css/createProject.css";

const AddClient = ({
  setLabourDetails,
  setAddDetails
}) => {
  const [labour, setLabour] = useState({
    Serial_No: 1,
    Name:1 ,
    Gender:"",
    Phone_Number:"" ,
    Category: "",
    Wages_Per_Shift: ""
  });

  // const handleSubmit =(prev)=>{
  //     setClientDetials((prev)=>[...prev,client]),
  //     setAddClientDetials(false),
  //     setClient((prev)=>({...prev,Serial_No:prev.Serial_No + 1}))
  // }

  const handleSubmit = () => {
    setLabourDetails((prev) => [...prev, labour]);
    setAddDetails(false);
    setLabour((prev) => ({
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
            <h2>LABOUR DETAILS</h2>
          </header>
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setLabour((prev) => ({ ...prev, Name: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Gender"
              onChange={(e) => {
                setLabour((prev) => ({ ...prev, Gender: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => {
                setLabour((prev) => ({ ...prev, Phone_Number: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Category"
              onChange={(e) => {
                setLabour((prev) => ({ ...prev, Category: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Wages per shift"
              onChange={(e) => {
                setLabour((prev) => ({ ...prev, Wages_Per_Shift: e.target.value }));
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
