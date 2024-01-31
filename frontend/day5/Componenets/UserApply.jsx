

// UserApply.jsx
import React, { useState } from 'react';
import NavBar from '../NavBar';
import sharedState from './SharedState';
import './UserApply.css';
import { useNavigate } from 'react-router-dom';

const UserApply = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  const [showPopup, setShowPopup] = useState(!isLoggedIn);  // Track the visibility of the popup
  const [formData, setFormData] = useState({
    // Fields from the first page
    name: '',
    email: '',
    mobile: '',
    branch: '',
    scheme: sharedState.content,
    amount: '',
    purpose: '',

    // Additional fields for the second page
    panCard: '',
    salary: '',
    aadharNo: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    branch: '',
    scheme: '',
    amount: '',
    purpose: '',
    panCard: '',
    salary: '',
    aadharNo: '',
    address: '',
    document: '',
    aadharPhoto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));

    // Validation logic for each field
    switch (name) {
      case 'name':
        if (!value.trim()) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: 'Name is required',
          }));
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: 'Invalid email address',
          }));
        }
        break;
      case 'mobile':
        if (!/^[0-9]{10}$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            mobile: 'Invalid mobile number',
          }));
        }
        break;
      // Add validation for other fields as needed
      default:
        break;
    }

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSubmit = (e) => {
   
    // Additional validation logic for the entire form (if needed)
    // ...

    // Check if any errors exist before submitting
    if (Object.values(errors).some((error) => error !== '')) {
      // Handle errors or prevent form submission
      return;
    }

    // ... (Your existing form submission logic)

    // Display success message or handle post-submission actions
    setStatus('Form submitted successfully!');
  };

  const handlePopupOK = () => {
    setShowPopup(false);
    // Redirect to the login page after clicking OK
    navigate('/login');  // Update '/login' with the actual path to your login page
  };

  return (
    <div>
      <div className="agriculture-loan-container">
        <NavBar />
        <br /><br /><br/><br/>
        <h2>Agriculture Loan - Page {currentPage}</h2>

        {showPopup && (
          <div className="popup-overlay active">
            <div className="popup active">
              <p>Please log in to submit the application.</p>
              <br/><br/>
              <button type="button" onClick={handlePopupOK} className="button">
                <div className="button-top">OK</div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
              </button>
            </div>
          </div>
        )}

        <form action="#" method="post" onSubmit={handleSubmit}>
          {/* ... (Your existing JSX code) */}
          {currentPage === 1 && (
            <>
              {/* Fields for Page 1 */}
              <div className="form-row">
                <label htmlFor="name">FULL NAME:</label>
                <input type="text" id="name" name="name" onChange={handleChange} required />
                <span className="error-message">{errors.name}</span>
              </div>

              <div className="form-row">
                <label htmlFor="email">EMAIL:</label>
                <input type="email" id="email" name="email" onChange={handleChange} required />
                <span className="error-message">{errors.email}</span>
              </div>

              <div className="form-row">
                <label htmlFor="mobile">MOBILE NUMBER:</label>
                <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" onChange={handleChange} required />
                <span className="error-message">{errors.mobile}</span>
              </div>

              <div className="form-row">
                <label htmlFor="branch">BRANCH NAME: </label>
                <input type="text" id="branch" name="branch" onChange={handleChange} required />
                <span className="error-message">{errors.branch}</span>
              </div>
              
              <h5 style={{ color: 'red', paddingLeft: '400px' }}>
                *If you apply Loan Under Any scheme Please Specify Below
              </h5>

              <div className="form-row">
                <label htmlFor="scheme">SCHEME NAME: </label>
                <input type="text" id="scheme" name="scheme"  onChange={handleChange} />
              </div>

              <div className="form-row">
                <label htmlFor="amount">Loan Amount:</label>
                <input type="number" id="amount" name="amount"  onChange={handleChange} required />
              </div>

              <div className="form-row">
                <label htmlFor="purpose">Loan Purpose:</label>
                <select id="purpose" name="purpose"  onChange={handleChange} required>
                  <option value="" disabled>Select a purpose</option>
                  <option value="crop">Crop Cultivation</option>
                  <option value="equipment">Purchase Equipment</option>
                  <option value="land">Land Development</option>
                </select>
              </div>

              {/* ... (Your existing JSX code) */}
            </>
          )}
          {/* ... (Your existing JSX code) */}
          {currentPage === 2 && (
            <>
              {/* Fields for Page 2 */}
              <div className="form-row">
                <label htmlFor="panCard">PAN Card Number:</label>
                <input type="text" id="panCard" name="panCard" onChange={handleChange} required />
                <span className="error-message">{errors.panCard}</span>
              </div>

              <div className="form-row">
                <label htmlFor="salary">Applicant Salary:</label>
                <input type="number" id="salary" name="salary" onChange={handleChange} required />
                <span className="error-message">{errors.salary}</span>
              </div>

              <div className="form-row">
                <label htmlFor="aadharNo">Aadhar Number:</label>
                <input type="text" id="aadharNo" name="aadharNo" onChange={handleChange} required />
                <span className="error-message">{errors.aadharNo}</span>
              </div>

              <div className="form-row">
                <label htmlFor="address">Address:</label>
                <textarea id="address" name="address" onChange={handleChange} required />
                <span className="error-message">{errors.address}</span>
              </div>
              <div className="form-row">
                <label htmlFor="document">Attach Document:</label>
                <input type="file" id="document" name="document" accept=".pdf, .doc, .docx" onChange={handleChange} required />
                <span className="error-message">{errors.document}</span>
              </div>

              <div className="form-row">
                <label htmlFor="aadharPhoto">Attach Aadhar Photo:</label>
                <input type="file" id="aadharPhoto" name="aadharPhoto" accept="image/*" onChange={handleChange} required />
                <span className="error-message">{errors.aadharPhoto}</span>
              </div>
            </>
          )}

          {currentPage==1&&(<div className="radio-buttons-container">
            <label>
              <input
                type="radio"
                id="page1"
                name="page"
                value={1}
                checked={currentPage === 1}
                onChange={() => handlePageChange(1)}
              />
              Page 1
            </label>

            <label>
              <input
                type="radio"
                id="page2"
                name="page"
                value={2}
                checked={currentPage === 2}
                onChange={() => handlePageChange(2)}
              />
              Page 2
            </label>
          </div>)}
          {currentPage==2&&(<div>
            <div className="radio-buttons-container">
            <label>
              <input
                type="radio"
                id="page1"
                name="page"
                value={1}
                checked={currentPage === 1}
                onChange={() => handlePageChange(1)}
              />
              Page 1
            </label>

            <label>
              <input
                type="radio"
                id="page2"
                name="page"
                value={2}
                checked={currentPage === 2}
                onChange={() => handlePageChange(2)}
              />
              Page 2
            </label>
           
          </div>
            <br/><br/><br/>
            {isLoggedIn && <button className='buttonn1' type="submit">Submit Application</button>}
              </div>)}

          
        </form>
        {status &&( <div className="popup-overlay active">
            <div className="popup active">
              <p>You Submit the form Succesfully.</p>
              <br/><br/>
              <button type="button" onClick={handlePopupOK} className="button">
                <div className="button-top">OK</div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
              </button>
            </div>
          </div>)}
      </div>
    </div>
  );
};

export default UserApply;
