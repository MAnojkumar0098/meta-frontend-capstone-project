import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchComponent from "./components/Search";
import Experts from "./components/Experts";
import Footer from "./components/Footer";
import './App.css';
import FormField from "./FormField";

function App() {
  const [companies, setCompanies] = useState([]); // State for all companies
  const [usn, setUsn] = useState(""); // State for USN input
  const [error, setError] = useState(null); // State for error handling


  return (
    <div className="app-container">
      <Navbar />
      <SearchComponent />
    <br/>
      <form>
        <FormField label="Date" htmlFor="booking-date">
          <input type="date" id="booking-date" name="booking-date" />
        </FormField>
        <FormField label="Time" htmlFor="booking-time">
          <select id="booking-time" name="booking-time"></select>
        </FormField>
        <FormField label="Number of guests" htmlFor="booking-number-guests">
          <input
            type="number"
            id="booking-number-guests"
            name="booking-number-guests"
            required={true}
          />
        </FormField>
        <FormField label="Occasion" htmlFor="booking-occasion">
          <select
            id="booking-occasion"
            name="booking-occasion"
            required={true}
          ></select>
        </FormField>
        <button className="button-primary" type="submit">
          Make your reservation
        </button>
      </form>

      <Experts />
      <Footer />
    </div>
  );
}

export default App;
