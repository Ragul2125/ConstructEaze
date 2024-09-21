import React, { useState } from "react";
import cross from "../assets/svg/cross.svg";
import "../css/App.css";

const AddTask = ({
    setAddTask,
    setTodoRows
}) => {
  const [task, setTask] = useState({
    Serial_No: 1,
    Start_Date: "",
    End_Date:"",
    Task:""
  });

  const handleSubmit = () => {
    setTodoRows((prev) => [...prev, task]);
    setAddTask(false);
    
  };

  return (
    <div className="bg">
      <div className="card">
        <div className="cross">
          <img
            src={cross}
            alt="cross"
            onClick={() => {
                setAddTask(false);
            }}
          />
        </div>
        <div className="card-content">
          <header>
            <h2>ADD TASK</h2>
          </header>
          <div className="input-box">
            <input
              type="date"
              placeholder="Start Date"
              onChange={(e) => {
                setTask((prev) => ({ ...prev, Start_Date: e.target.value }));
              }}
            />
            <input
              type="date"
              placeholder="End Date"
              onChange={(e) => {
                setTask((prev) => ({ ...prev, End_Date: e.target.value }));
              }}
            />
            <input
              type="text"
              placeholder="Task"
              onChange={(e) => {
                setTask((prev) => ({ ...prev, Task: e.target.value }));
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

export default AddTask;
