import React, { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import mytable from "./table"
import "./App.css";
import { Products } from "./components/students";

const API_URL = "http://ec2-34-229-81-144.compute-1.amazonaws.com/allstudent";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setstudents] = useState([]);

  useEffect(() => {
    searchstudents();
  }, []);

  const searchstudents = async (title) => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data)
    setstudents(data.Search);
  };

  console.log(searchTerm)

  return (
    <div className="app">
      <h1>Student Dashboard</h1>

      <div className="search">
        <input
          // value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for students"
        />
        <img
          src={SearchIcon}
          alt="search"
          // onClick={() => searchstudents(searchTerm)}
        />
      </div>

      <div className="container">
        <Products/>
      </div>

    </div>
  );
};

export default App;