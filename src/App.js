import React, { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import mytable from "./table"
import "./App.css";
import { Products } from "./components/students";
import { Sidebar } from "./components/sidebar";
import axios from "axios";

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

  const [products , setProducts] = useState ([]) ;
  const fetchProducts = async () => {
    const response = await axios.get("http://ec2-34-229-81-144.compute-1.amazonaws.com/allstudent").catch( err => console.log (err)) ;
      
    if (response) {
      const products = response.data ;
      console.log ("Products :" , products) ;
      setProducts(products) ;
    }
  };

  const keys = ["StudentName", "StudentDadName", "StudentMomName","StudentSchool"];
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(searchTerm.toLowerCase()))
      );
    };

  useEffect (() => {
    fetchProducts();
  }, []);  

  return (
    <div className="app">
      <h1>Student Dashboard</h1>

      <div>
        <Sidebar/>
        
      </div>
      
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
        <Products products={search(products)}/>
      </div>

    </div>
  );
};

export default App;