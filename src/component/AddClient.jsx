import React, { useState } from "react";
import cross from "../assets/svg/cross.svg";
import "../css/App.css";

const AddClient = ({
  // setClientDetials,
  // setAddClientDetials,
  // clientDetials,
  setAddDetails,
  setClientDetails
}) => {
  const [client, setClient] = useState({
    Serial_No: 1,
    Name: "",
    Ph_no: 0,
    Address: "",
    Pan_no: "",
    Site: "",
  });

  // const handleSubmit =(prev)=>{
  //     setClientDetials((prev)=>[...prev,client]),
  //     setAddClientDetials(false),
  //     setClient((prev)=>({...prev,Serial_No:prev.Serial_No + 1}))
  // }

  const handleSubmit = () => {
    setClientDetails((prev) => [...prev, client]);
    setAddDetails(false);
    // setClient((prev,)=>({
    //   ...prev,
    //   Serial_No: 2
    // }))
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
            <h2>CLIENT DETAILS</h2>
          </header>
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setClient((prev) => ({ ...prev, Name: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => {
                setClient((prev) => ({ ...prev, Ph_no: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => {
                setClient((prev) => ({ ...prev, Address: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Pan Number"
              onChange={(e) => {
                setClient((prev) => ({ ...prev, Pan_no: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Site Address"
              onChange={(e) => {
                setClient((prev) => ({ ...prev, Site: e.target.value }));
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
