import React, { useState } from "react";
import AddClient from "../component/AddClient.jsx";
import editIcon from "../assets/svg/edit.svg";
import deleteIcon from "../assets/svg/Delete.svg";
import AddProduct from "../component/AddProduct.jsx";
import AddLabour from "../component/AddLabour.jsx";
import AddVendor from "../component/AddVendor.jsx"
import AddSupervisor from '../component/AddSupervisor.jsx'
const Client = () => {
  // Heading Arrays
  const [clientHeading] = useState([
    "Serial_No",
    "Name",
    "Ph_no",
    "Address",
    "Pan_no",
    "Site",
  ]);
  const [productHeading] = useState([
    "Serial_No",
    "Item_Code",
    "Item_Name",
    "Category",
    "Unit",
  ]);
  const [labourHeading] = useState([
    "Serial_No",
    "Name",
    "Gender",
    "Phone_Number",
    "Category",
    "Wages_Per_Shift",
  ]);
  const [vendorHeading] = useState([
    "Serial_No",
    "Name",
    "Address",
    "GSTin",
    "Phone_Number",
  ]);
  const [supervisorHeading] = useState([
    "Serial_No",
    "Name",
    "Email_Id",
    "Password",
  ]);

  // Table data
  const [clientDetails, setClientDetails] = useState([
    {
      Serial_No: 1,
      Name: "Client A",
      Ph_no: "9000999900",
      Address: "City A",
      Pan_no: "ABCDE1234F",
      Site: "Site A",
    },
    {
      Serial_No: 2,
      Name: "Client B",
      Ph_no: "8000888800",
      Address: "City B",
      Pan_no: "FGHIJ5678K",
      Site: "Site B",
    },
  ]);

  const [productDetails, setProductDetails] = useState([
    {
      Serial_No: 1,
      Item_Code: "P001",
      Item_Name: "Product A",
      Category: "Category A",
      Unit: "Piece",
    },
    {
      Serial_No: 2,
      Item_Code: "P002",
      Item_Name: "Product B",
      Category: "Category B",
      Unit: "Box",
    },
  ]);

  const [labourDetails, setLabourDetails] = useState([
    {
      Serial_No: 1,
      Name: "Worker A",
      Phone_Number: "9999999999",
      Gender:"Male",
      Category: "Electrician",
      Wages_Per_Shift: 500,
    },
    {
      Serial_No: 2,
      Name: "Worker B",
      Gender:"Female",
      Phone_Number: "8888888888",
      Category: "Plumber",
      Wages_Per_Shift: 600,
    },
  ]);

  const [vendorDetails, setVendorDetails] = useState([
    {
      Serial_No: 1,
      Name: "Vendor A",
      Address: "Street A",
      GSTin: "22AAAAA0000A1Z5",
      Phone_Number: "7000770077",
    },
    {
      Serial_No: 2,
      Name: "Vendor B",
      Address: "Street B",
      GSTin: "33BBBBB1111B2Z6",
      Phone_Number: "6000660066",
    },
  ]);

  const [supervisorDetails, setSupervisorDetails] = useState([
    {
      Serial_No: 1,
      Name: "Supervisor A",
      Email_Id: "sup_a@example.com",
      Password: "passA123",
    },
    {
      Serial_No: 2,
      Name: "Supervisor B",
      Email_Id: "sup_b@example.com",
      Password: "passB456",
    },
  ]);

  // Table selector
  const [selectedTable, setSelectedTable] = useState("supervisor");
  const [editIndex, setEditIndex] = useState(null); // To track the index of the row being edited
  const [tempEditRow, setTempEditRow] = useState({}); // To temporarily hold the row being edited

  // Function to get the correct headings based on selectedTable
  const getHeadings = () => {
    switch (selectedTable) {
      case "client":
        return clientHeading;
      case "product":
        return productHeading;
      case "labour":
        return labourHeading;
      case "vendor":
        return vendorHeading;
      case "supervisor":
        return supervisorHeading;
      default:
        return [];
    }
  };

  // Function to get the correct table data based on selectedTable
  const getTableData = () => {
    switch (selectedTable) {
      case "client":
        return clientDetails;
      case "product":
        return productDetails;
      case "labour":
        return labourDetails;
      case "vendor":
        return vendorDetails;
      case "supervisor":
        return supervisorDetails;
      default:
        return [];
    }
  };

  // Set the correct state for table data based on selected table
  const setTableData = (data) => {
    switch (selectedTable) {
      case "client":
        setClientDetails(data);
        break;
      case "product":
        setProductDetails(data);
        break;
      case "labour":
        setLabourDetails(data);
        break;
      case "vendor":
        setVendorDetails(data);
        break;
      case "supervisor":
        setSupervisorDetails(data);
        break;
      default:
        break;
    }
  };

  // Edit function
  const handleEdit = (index) => {
    setEditIndex(index);
    setTempEditRow({ ...getTableData()[index] }); // Copy the row data to temporary state for editing
  };

  // Save function (called when saving the edited row)
  const handleSave = () => {
    const updatedData = [...getTableData()];
    updatedData[editIndex] = tempEditRow; // Save the edited row from the temporary state
    setTableData(updatedData);
    setEditIndex(null); // Exit edit mode
  };

  // Delete function
  const handleDelete = (index) => {
    const updatedData = getTableData().filter((_, i) => i !== index);
    setTableData(updatedData);
  };

  const [addDetails, setAddDetails] = useState(false);

  const getAdd = () => {
    switch (selectedTable) {
      case "client":
        return (
          <AddClient
            setClientDetails={setClientDetails}
            setAddDetails={setAddDetails}
          />
        );
      case "product":
        return (
          <AddProduct
            setProductDetails={setProductDetails}
            setAddDetails={setAddDetails}
          />
        );
      case "labour":
        return (
          <AddLabour
            setLabourDetails={setLabourDetails}
            setAddDetails={setAddDetails}
          />
        );
        case "vendor":
          return (
            <AddVendor
              setVendorDetails={setVendorDetails}
              setAddDetails={setAddDetails}
            />
          );
          case "supervisor":
            return (
              <AddSupervisor
                setSupervisorDetails={setSupervisorDetails}
                setAddDetails={setAddDetails}
              />
            );
      default:
        return null;
    }
  };

  return (
    <div className="Client">
      {addDetails && getAdd()}
      <header>
        <h1>{selectedTable.toUpperCase()} FORM</h1>
      </header>
      <div className="Search-add">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="add-upload">
          <button>Upload</button>
          <button onClick={() => setAddDetails(true)}>Add</button>
        </div>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              {getHeadings().map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
              <th>Actions</th> {/* Actions column for Edit/Delete */}
            </tr>
          </thead>
          <tbody>
            {getTableData().map((row, index) => (
              <tr key={index}>
                {editIndex === index ? (
                  // Editable row
                  <>
                    {getHeadings().map((heading, idx) => (
                      <td key={idx}>
                        <input
                          type="text"
                          value={tempEditRow[heading]}
                          onChange={(e) =>
                            setTempEditRow({
                              ...tempEditRow,
                              [heading]: e.target.value,
                            })
                          }
                        />
                      </td>
                    ))}
                    <td>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={() => setEditIndex(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  // Regular row
                  <>
                    {getHeadings().map((heading, idx) => (
                      <td key={idx}>{row[heading]}</td>
                    ))}
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

export default Client;
