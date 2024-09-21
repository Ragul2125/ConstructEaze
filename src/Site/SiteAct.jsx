import React from 'react'
import "../css/App.css"
import Todo from "./Todo-Pg"
import SideBar from "../component/SideBar";

const SiteAct = () => {
  return (
    <div className='Site'>
      <SideBar/>
      <Todo/>
    </div>
  )
}

export default SiteAct
