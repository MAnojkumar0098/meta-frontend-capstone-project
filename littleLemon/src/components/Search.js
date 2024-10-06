import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css"; // Import your CSS file

const SearchComponent = () => {
  const [usn, setUsn] = useState("");
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch all companies data on component mount
    axios
      .get("http://localhost:3008")
      .then((response) => setCompanies(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (usn.trim() === "") {
      setError("Please enter a USN."); // Validate input
      return;
    }
    setError(null); // Clear error if input is valid

    // Send the USN to the backend for processing
    axios
      .post("http://localhost:3008/search", { usn })
      .then((response) => {
        setCompanies(response.data); // Update the companies state with the search results
        console.log("Search results:", response.data);
      })
      .catch((error) => {
        console.error("Error processing USN: ", error);
        setError("Error fetching data. Please try again."); // Handle errors
      });
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={usn}
          onChange={(e) => setUsn(e.target.value)}
          placeholder="Enter Food"
          className="usn-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error if any */}
      <h2>Results:</h2>
      <ul className="results-list">
        {companies.length > 0 ? (
          companies.map((company) => (
            <li key={company.RollNumber} className="company-item">
              {company.RollNumber} - {company.Name} - {company.Department} -{" "}
              {company.Phone} - {company.Email} - {company.CGPA} -{" "}
              {company.PlacementCompany}
            </li>
          ))
        ) : (
          <li>No results found.</li> // Message if no results are present
        )}
      </ul>
    </div>
  );
};

export default SearchComponent;
