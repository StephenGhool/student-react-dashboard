import React, { useState, useEffect } from "react";
// import "./App.css";
import { Sidebar } from "./components/sidebar";
import {SearchApp} from "./Pages/search"
import {CreateStudent} from "./Pages/new_student"
import {NewStudent} from "./Pages/create_student"
import { Routes, Route } from "react-router-dom";
const API_URL = "http://ec2-34-229-81-144.compute-1.amazonaws.com/allstudent";

const App = () => {
  return (
    <div>
      {/* <div className="header">
        <h1>Student Dashboard</h1> 
      </div> */}
     

      <div> <Sidebar/> </div>

      <Routes> 
        <Route path="/" element={<SearchApp/>} />
        {/* <Route path="/create" element={<CreateStudent/>} /> */}
        <Route path="/newstudent" element={<NewStudent/>} />
      </Routes>
      
    
    </div>
  );
};

export default App;