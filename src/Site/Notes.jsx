import React, { useState } from "react";
import editIcon from "../assets/svg/edit.svg";
import deleteIcon from "../assets/svg/Delete.svg";
import downloadIcon from "../assets/svg/download.svg"
const Notes = () => {
    const [heading,setHeading]=useState(["Gopal school","Gopal School","Gopal School","Gopal School"])
  return (
    <div className="Notes">
      <header>
        <h1>Notes</h1>
      </header>
      <div className="Search-add">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <button>Add Notes</button>
      </div>
      <div className="cards">
        {heading.map((heading,index)=>(
            <div className="notes-card" key={index }>
            <p>{heading}</p>
            <img src={editIcon} alt="Edit" />
            <img src={deleteIcon} alt="Delete" />
            <img src={downloadIcon} alt="Download" />
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Notes;
