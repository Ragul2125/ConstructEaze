import React, { useState } from "react";
import cross from '../assets/svg/cross.svg'
import "../css/App.css";

const createProject = ({setCreateProject,setProject}) => {
    const [detials,setDetials]=useState({
        Name:"",
        site:""
    })
  return (
    <div className="bg">
        
      <div className="card">
        <div className="cross">
            <img src={cross} alt="cross" onClick={()=>{setCreateProject(false)}}/>
        </div>
        <div className="card-content">
          <header><h2>Create Project</h2></header>
          <div className="input-box">
            <input type="text" placeholder="Enter your project Name" onChange={(e)=>{setDetials((prev)=>({...prev,Name:e.target.value}))}}/>
            <input type="text" placeholder="Enter your Site" onChange={(e)=>{setDetials((prev)=>({...prev,site:e.target.value}))}}/>
          </div>
          <div className="btn">
            <button onClick={()=>{setProject((prev)=>[...prev,detials])}}>Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createProject;
