import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Link } from "react-router-dom"
import "./form.css"
import axios from "axios";

export function NewStudent(props){
    const [values , setValues] = useState( {
        StudentName: "",
        StudentMomName: "",
        StudentDadName: "",
        StudentSchool: "",
        StudentAge: "",
        StudentFamsize: "",
        StudentParentalStatus: "",
        StudentMomEdu: "",
        StudentDadEdu: "",
        StudentGuardian: "",
        StudentStudytime: "",
        StudentFailCourse: "",
        StudentHasInternet: "",
        StudentFreetime: "",
        StudentEntertainment: "",
        StudentHealth: "",
        StudentAbscent: "",
        StudentPredictedPerformance: "0"
          
       }) ;

    const [submitted , setSubmitted] = useState(false);

    const [existing , setalertexisting] = useState(false);

    const handleNameInputChange = (event) => {
        setValues({ ... values , StudentName: event.target.value})
    } 

    const handleMomNameInputChange = (event) => {
        setValues({ ... values , StudentMomName: event.target.value})
    } 

    const handleDadNameInputChange = (event) => {
        setValues({ ... values , StudentDadName: event.target.value})
    } 

    const handleAgeInputChange = (event) => {
        setValues({ ... values , StudentAge: event.target.value})
    } 

    const handleGenderInputChange = (event) => {
        setValues({ ... values , StudentGender: event.target.value})
    } 

    const handleParentStatusInputChange = (event) => {
        setValues({ ... values , StudentParentalStatus: event.target.value})
    } 

    const handleFamilyMembersInputChange = (event) => {
        setValues({ ... values , StudentFamsize: event.target.value})
    } 

    const handleGuardianInputChange = (event) => {
        setValues({ ... values , StudentGuardian: event.target.value})
    } 

    const handleMomEduInputChange = (event) => {
        setValues({ ... values , StudentMomEdu: event.target.value})
    } 

    const handleDadEduInputChange = (event) => {
        setValues({ ... values , StudentDadEdu: event.target.value})
    } 

    const handleStudyTimeInputChange = (event) => {
        setValues({ ... values , StudentStudytime: event.target.value})
    } 

    const handleFreetimeInputChange = (event) => {
        setValues({ ... values , StudentFreetime: event.target.value})
    } 

    const handleEntertainmentInputChange = (event) => {
        setValues({ ... values , StudentEntertainment: event.target.value})
    } 

    const handleAbscentInputChange = (event) => {
        setValues({ ... values , StudentAbscent: event.target.value})
    } 

    const handleFailedCourseInputChange = (event) => {
        setValues({ ... values , StudentFailCourse: event.target.value})
    } 

    const handleInternetStatusInputChange = (event) => {
        setValues({ ... values , StudentHasInternet: event.target.value})
    } 

    const handleHealthInputChange = (event) => {
        setValues({ ... values , StudentHealth: event.target.value})
    } 

    const handleSchoolInputChange = (event) => {
        setValues({ ... values , StudentSchool: event.target.value})
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
          
        // const data = {
        //     "StudentName": "stringghhol",
        //     "StudentMomName": "string",
        //     "StudentDadName": "string",
        //     "StudentSchool": "string",
        //     "StudentAge": 0,
        //     "StudentFamsize": 0,
        //     "StudentParentalStatus": "string",
        //     "StudentMomEdu": 0,
        //     "StudentDadEdu": 0,
        //     "StudentGuardian": "string",
        //     "StudentStudytime": 0,
        //     "StudentFailCourse": 0,
        //     "StudentHasInternet": "string",
        //     "StudentFreetime": 0,
        //     "StudentEntertainment": 0,
        //     "StudentHealth": 0,
        //     "StudentAbscent": 0,
        //     "StudentPredictedPerformance": 0
        //   }
        
        
        // Add a response interceptor
        axios.interceptors.response.use(function (response) {
            setSubmitted(true)
            setalertexisting(false)
            return response;
        }, function (error) {
                switch (error.response.status) {
                  case 400:
                    setalertexisting(true)
                    setSubmitted(false)
                    break;
                }
             
                if (error.response.status == 400) {
                }
            return Promise.reject(error);
        });

        const response = axios.post("http://ec2-34-229-81-144.compute-1.amazonaws.com/create", 
                JSON.stringify(values),
                {headers: {"accept": "application/json", "content-type": "application/json"
        },})
        .catch(err => console.log(err.response.data['details']))
        .catch(err => console.log(err)) ;
        
    }
return (
    <div className="app">
        <h1>Add Student</h1> 
        <div className="form-container">
            <form action="#" id="details-form" onSubmit={handleSubmit}>
            
                <div class="form first">
                    <div class="details personal" >
                        <span class="title"><h2>Personal Details</h2></span>

                        <div class="fields">
                            <div class="input-field">
                                <label>Full Name</label>
                                <input 
                                    onChange={handleNameInputChange}
                                    value={values.StudentName}
                                    type="text" 
                                    placeholder="Enter your name" 
                                    id="student-name"
                                    required/>
                                </div>

                            <div class="input-field">
                                <label>Age</label>
                                <input 
                                    onChange={handleAgeInputChange}
                                    value={values.StudentAge}
                                    type="number" 
                                    placeholder="How old are you ?" 
                                    required
                                    id="age"/>
                            </div>

                            <div class="input-field">
                                <label>Gender</label>
                                <select  onChange={handleGenderInputChange} value={values.StudentGender} required id="gender">
                                    <option disabled selected>Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>

                            <div class="input-field">
                                <label>School</label>
                                <input 
                                    onChange={handleSchoolInputChange}
                                    value={values.StudentSchool}
                                    type="text" 
                                    placeholder="Enter present school" 
                                    id="student-school"
                                    required/>
                                </div>
                        </div>
                    </div>

                    <div class="details ID">
                        <span class="title"><h2>Parental Details</h2></span>

                        <div class="fields">
                            <div class="input-field">
                                <label>Mother's Name</label>
                                <input 
                                    onChange={handleMomNameInputChange}
                                    value={values.StudentMomName}
                                    type="text" 
                                    placeholder="Enter your name" 
                                    id="mothers-name"
                                    required/>
                            </div>

                            <div class="input-field">
                                <label>Father's Name</label>
                                <input 
                                    onChange={handleDadNameInputChange}
                                    value={values.StudentDadName}
                                    type="text" 
                                    placeholder="Enter your name" 
                                    id="fathers-name"
                                    required/>
                            </div>

                            <div class="input-field">
                                <label>Parental Status</label>
                                <select required id="parental-status" onChange={handleParentStatusInputChange} value={values.StudentParentalStatus}>
                                    <option disabled selected>Select status</option>
                                    <option>Apart</option>
                                    <option>Together</option>
                                </select>
                            </div>

                            <div class="input-field">
                                <label>Family Members</label>
                                <input 
                                    onChange={handleFamilyMembersInputChange}
                                    value={values.StudentFamsize}
                                    type="number" 
                                    placeholder="No. of Family Members" 
                                    required 
                                    id="family-num"/>
                            </div>

                            <div class="input-field">
                                <label>Guardian</label>
                                <select onChange={handleGuardianInputChange} value={values.StudentGuardian} required id="guardian" >
                                    <option disabled selected>Select Guardian</option>
                                    <option>Mother</option>
                                    <option>Father</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div class="input-field">
                                <label>Mother's Education</label>
                                <input 
                                    onChange={handleMomEduInputChange}
                                    value={values.StudentMomEdu}
                                    type="number" 
                                    placeholder="Scale of 1 to 4" 
                                    required id="mom-edu"/>
                            </div>

                            <div class="input-field">
                                <label>Father's Education</label>
                                <input 
                                    onChange={handleDadEduInputChange} 
                                    value={values.StudentDadEdu}
                                    type="number" 
                                    placeholder="Scale of 1 to 4"
                                    required id="dad-edu"/>
                            </div>
                        
                            
                        </div>
                    </div>
                    
                    <div class="details address">
                        <span class="title"><h2>Student Performance</h2></span>

                        <div class="fields">
                            <div class="input-field">
                                <label>Hours Spent Studying (Daily)</label>
                                <input 
                                    onChange={handleStudyTimeInputChange} 
                                    value={values.StudentStudytime}
                                    type="number" 
                                    placeholder="Study time" 
                                    required 
                                    id="studying"/>
                            </div>

                            <div class="input-field">
                                <label>Freetime (hours)</label>
                                <input 
                                    onChange={handleFreetimeInputChange} 
                                    value={values.StudentFreetime}
                                    type="text" 
                                    placeholder="Approximate free time (hrs)" 
                                    required id="freetime"/>
                            </div>

                            <div class="input-field">
                                <label>Entertainment (hours)</label>
                                <input 
                                    onChange={handleEntertainmentInputChange} 
                                    value={values.StudentEntertainment}
                                    type="text" 
                                    placeholder="Hours spent on entertainment" 
                                    required id="entertainment"/>
                            </div>

                            <div class="input-field">
                                <label>Days Abscent</label>
                                <input 
                                    onChange={handleAbscentInputChange} 
                                    value={values.StudentAbscent}
                                    type="text" 
                                    placeholder="Number of days abscent from school" 
                                    required id="abscent"/>
                            </div>

                            <div class="input-field">
                                <label>Courses Failed</label>
                                <input 
                                    onChange={handleFailedCourseInputChange} 
                                    value={values.StudentFailCourse}
                                    type="text" 
                                    placeholder="Number of courses failed" 
                                    required id="failed"/>
                            </div>

                            <div class="input-field">
                                <label>Internet Status</label>
                                <select id="internet" onChange={handleInternetStatusInputChange} value={values.StudentHasInternet}>
                                    <option disabled selected>Do you have internet ?</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>

                            <div class="input-field">
                                <label>Health</label>
                                <input 
                                    onChange={handleHealthInputChange} 
                                    value={values.StudentHealth}
                                    type="number" 
                                    placeholder="How healthy are you ? (1 to 5)" 
                                    id="health"/>
                            </div>
                        </div> 
                    </div>

                    <div class="buttons">
                        <button type="submit" onclick={handleSubmit} class="submit">
                            <span class="btnText"><h3>Submit</h3></span>
                            <i class="uil uil-navigator"></i>
                        </button>
                        {submitted ? <div className="success-message "> Student Added</div>: null}
                        {existing ? <div className="existing-message "> Student Already Exists</div>: null}
                    </div>
                    
                </div> 
            </form>
        </div>
    </div>
);
}
