import React from 'react'

const AddNotes = () => {
  return (
    <div className='addnotes'>
      <header><h1>Add Notes</h1></header>
      <textarea  placeholder='Enter Your Notes here...'/>
      <div className="btn">
      <button>Add Note</button>
      </div> 
         
    </div>
  )
}

export default AddNotes
