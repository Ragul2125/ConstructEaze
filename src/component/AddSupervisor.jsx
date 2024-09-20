import React, { useState } from "react";
import cross from "../assets/svg/cross.svg";
import "../css/createProject.css";

const AddVendor = ({
    setSupervisorDetails,
    setAddDetails
}) => {
  const [Supervisor, setSuperVisor] = useState({
    Serial_No: 1,
    Name:"" ,
    Email_Id:"",
    Password:"" ,
  });

 

  const handleSubmit = () => {
    setSupervisorDetails((prev) => [...prev, Supervisor]);
    setAddDetails(false);
    setSuperVisor((prev) => ({
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
            <h2>SUPERVISOR DETAILS</h2>
          </header>
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setSuperVisor((prev) => ({ ...prev, Name: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Email Id"
              onChange={(e) => {
                setSuperVisor((prev) => ({ ...prev, Email_Id: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => {
                setSuperVisor((prev) => ({ ...prev, Password: e.target.value }));
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
