import React from "react";
import SideBar from "../component/SideBar";
import Master from './Master.jsx'
import "../css/App.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <SideBar />
        <div className="content">
         <Master/>
        </div>
      </div>
    </>
  );
};

export default Home;
