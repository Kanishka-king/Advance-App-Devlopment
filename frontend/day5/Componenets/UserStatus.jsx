import React, { useState } from "react";
import './UserStatus.css';
import data from "./TemplateData.json";
import NavBar from "../NavBar";

function UserStatus() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Function to check if the input is a valid number
  const isValidNumber = (input) => {
    const parsedNumber = parseInt(input, 10);
    return !isNaN(parsedNumber) && parsedNumber > 0;
  };

  const filteredData = isValidNumber(searchTerm)
    ? data.filter((val) => val.id.toString().includes(searchTerm))
    : [];

  const handleTrackButtonClick = () => {
    setShowResults(true);
  };

  return (
    <div>
      <NavBar/>
  
    <div className="bod">
    <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="number"
            placeholder="Search by ID..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        
        <button className="button-42 " onClick={handleTrackButtonClick}>Track</button>
        {showResults && isValidNumber(searchTerm) && (
          <div className="template_Container">
            {filteredData.length === 0 ? (
              <p>No matching data found.</p>
            ) : (
              filteredData.map((val) => (
                <div className="template" key={val.id}>
                  <div>
                    <strong>ID:</strong> {val.id}
                  </div>
                  <div>
                    <strong>Name:</strong> {val.name}
                  </div>
                  <div>
                    <strong>Mobile:</strong> {val.mobile}
                  </div>
                  <div>
                    <strong>Email:</strong> {val.email}
                  </div>
                  <div>
                    <strong>Aadhar No:</strong> {val.aadharNo}
                  </div>
                  <div>
                    <strong>Scheme:</strong> {val.scheme}
                  </div>
                  <div>
                    <strong>Loan Amount:</strong> {val.loanAmount}
                  </div>
                  <div>
                    <strong>Current Salary:</strong> {val.currentSalary}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

    </div>
    </div>
  );
}

export default UserStatus;
