import React, { useState } from "react";
import "../Site/Site.css";
import AddTask from "../Site/AddTask.jsx";
import editIcon from "../assets/svg/edit.svg"; // Make sure to replace with actual path
import deleteIcon from "../assets/svg/delete.svg"; // Make sure to replace with actual path

const TodoPg = () => {
  const [todoHeading] = useState([
    "Serial_No",
    "Start Date",
    "End Date",
    "Task",
  ]);

  const [todoRows, setTodoRows] = useState([
    {
      Serial_No: 1,
      Start_Date: "2024-09-21",
      End_Date: "2024-09-22",
      Task: "Complete project setup",
    },
    {
      Serial_No: 2,
      Start_Date: "2024-09-23",
      End_Date: "2024-09-24",
      Task: "Design UI",
    },
    {
      Serial_No: 3,
      Start_Date: "2024-09-25",
      End_Date: "2024-09-26",
      Task: "Develop frontend",
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [tempEditRow, setTempEditRow] = useState({});
  const [addTask, setAddTask] = useState(false);

  // Edit function
  const handleEdit = (index) => {
    setEditIndex(index);
    setTempEditRow({ ...todoRows[index] }); // Copy the row to temporary state
  };

  // Save function (when editing a row)
  const handleSave = () => {
    const updatedRows = [...todoRows];
    updatedRows[editIndex] = tempEditRow; // Update the row with new values
    setTodoRows(updatedRows);
    setEditIndex(null); // Exit edit mode
  };

  // Delete function
  const handleDelete = (index) => {
    const updatedRows = todoRows.filter((_, i) => i !== index);
    setTodoRows(updatedRows);
  };

  return (
    <div className="todopg">
      {addTask && <AddTask setAddTask={setAddTask} setTodoRows={setTodoRows} />}
      <h1>TODO</h1>
      <div className="Search-add">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="add-upload">
          <button onClick={() => setAddTask(true)}>Add</button>
        </div>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              {todoHeading.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
              <th>Actions</th> {/* New column for Edit/Delete buttons */}
            </tr>
          </thead>
          <tbody>
            {todoRows.map((details, index) => (
              <tr key={index}>
                {editIndex === index ? (
                  <>
                    <td>{details.Serial_No}</td>
                    <td>
                      <input
                        type="date"
                        value={tempEditRow.Start_Date}
                        onChange={(e) =>
                          setTempEditRow({
                            ...tempEditRow,
                            Start_Date: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={tempEditRow.End_Date}
                        onChange={(e) =>
                          setTempEditRow({
                            ...tempEditRow,
                            End_Date: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={tempEditRow.Task}
                        onChange={(e) =>
                          setTempEditRow({
                            ...tempEditRow,
                            Task: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={() => setEditIndex(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{details.Serial_No}</td>
                    <td>{details.Start_Date}</td>
                    <td>{details.End_Date}</td>
                    <td>{details.Task}</td>
                    <td>
                      <div className="icons">
                        <img
                          src={editIcon}
                          alt="Edit"
                          onClick={() => handleEdit(index)}
                          style={{ cursor: "pointer" }}
                        />
                        <img
                          src={deleteIcon}
                          alt="Delete"
                          onClick={() => handleDelete(index)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoPg;
