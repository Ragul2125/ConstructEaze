import React, { useState } from "react";
import "../css/Dashboard.css";
import CreateProject from "../component/createProject.jsx"
import logo from "../assets/Image/logo.png";
import "../css/Project.css"

const Dashboard = ({createProject,setCreateProject}) => {
  const [project,setProject]=useState([{Name:"gopal School",site:"pondy"},{Name:"gopal School",site:"pondy"},{Name:"gopal School",site:"pondy"}])
  return (
    <div className="dashboard">
      {createProject && <CreateProject setCreateProject={setCreateProject} setProject={setProject} />}
      <div className="header">
        <h1>Projects</h1>
        <div className="search-create">
          <div className="search">
            <input type="text" placeholder="search" />
            <button>Search</button>
          </div>
          <button onClick={()=>{setCreateProject(true)}}>+create</button>
        </div>
      </div>
      <div className="content">
        {project.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-name">
              <img src={logo} alt="Icon" />
              <h3>{project.Name}</h3>
            </div>
            <div className="project-site">
              <p>{project.site}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
