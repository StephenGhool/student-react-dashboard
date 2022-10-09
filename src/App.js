import React from "react";
// import "./App.css";
import { Sidebar } from "./components/sidebar";
import {SearchApp} from "./Pages/search/search"
import {CreateStudent} from "./Pages/form/new_student"
import {NewStudent} from "./Pages/form/create_student"
import { Routes, Route } from "react-router-dom";
const API_URL = "http://ec2-34-229-81-144.compute-1.amazonaws.com/allstudent";

const App = () => {
  return (
    <div>
      <div> <Sidebar/> </div>

      <Routes> 
        <Route path="/" element={<SearchApp/>} />
        <Route path="/newstudent" element={<NewStudent/>} />
      </Routes>
      
    </div>
  );
};

export default App;