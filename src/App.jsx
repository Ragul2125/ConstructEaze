import "./css/App.css";
import { useState } from "react";
import Dashboard from "./component/Dashboard";
import Login from "./Login";
import Home from "./pg/Home";
import SideBar from "./component/SideBar";
import AddClient from "./component/AddClient";
function App() {
  const [createProject,setCreateProject] = useState(false)
  return (
    <>
      {/* <Login/>
      <Dashboard createProject={createProject} setCreateProject={setCreateProject}/> */}
      <Home/>
    </>
  );
}

export default App;
