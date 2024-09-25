import "./css/App.css";
import { useState } from "react";
import SiteAct from "./Site/SiteAct.jsx"
import Home from './pg/Home.jsx'
function App() {
  const [createProject,setCreateProject] = useState(false)
  return (
    <>
      <SiteAct/>
    </>
  );
}

export default App;
