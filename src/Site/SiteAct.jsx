import React from 'react'
import "../css/App.css"
import Todo from "./Todo-Pg"
import SideBar from "../component/SideBar";
import Notes from "../Site/Notes"
import AddNotes from './AddNotes';
const SiteAct = () => {
  return (
    <div className='Site'>
      <SideBar/>
      <AddNotes/>
    </div>
  )
}

export default SiteAct
