import React from "react";
import SideBar from "../component/SideBar";
import Mainpg from '../pg/Main-pg.jsx'
import "../css/App.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <SideBar />
        <div className="content">
         <Mainpg/>
        </div>
      </div>
    </>
  );
};

export default Home;
