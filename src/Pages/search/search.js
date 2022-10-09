import React, { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import { Products } from "../students";
import axios from "axios";
// import DeleteIcon from '@mui/icons-material/Delete';

const API_URL = "http://ec2-34-229-81-144.compute-1.amazonaws.com/allstudent";

export const SearchApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setstudents] = useState([]);
  const [deletestudents, setdelete] = useState(false);
  const [isedit, setisedit] = useState(false)
  const [issave, setissave] = useState(false)
  const [products , setProducts] = useState ([]) ;

  const fetchProducts = async () => {
    const response = await axios.get(API_URL).catch( err => console.log (err)) ;
      
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

  // load students on start
  useEffect (() => {
    fetchProducts();
    setdelete(false)
  }, []);  

  // reload students when someone is deleted
  useEffect (() => {
    fetchProducts();
    setdelete(false)
    console.log(fetchProducts())
  }, [deletestudents]);  

  // handles for editing and deleting student
  const HandleDelete =() => {
    setdelete(true)
  }

  // handles onclick of edit button
  const HandleEdit =() => {
    setisedit(!isedit)
    setissave(false)
  }
  
  // handles onclick of save button
  const HandleSave = () => {
    setisedit(false)
    setissave(true)
    fetchProducts();
  }
  
  return (
    <div className="app">
      <h1>Student Dashboard</h1> 
      <div className="search">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for students" />
        <img
          src={SearchIcon}
          alt="search"
          // onClick={() => search(searchTerm)} 
          />
  
        <div>
            <button onClick={HandleDelete}>Delete</button>
            <button onClick={HandleEdit}>{!isedit? <h3>Edit</h3>:<h3>Cancel</h3>}</button>
            <button onClick={HandleSave}>Save</button>
        </div>
        
      </div>
        <Products products={search(products)} isstudentdelete={deletestudents} isedit={isedit} issave={issave}/>
    </div>
  );
};

