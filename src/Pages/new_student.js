import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Link } from "react-router-dom"

export function CreateStudent(props){
    
    return (
    <div>
        <header>
            Student information
            <link rel="stylesheet" href="form.css"/>
        </header>
        <body>
            <form action="#" id="details-form">
                <div class="form first">
                    <div class="details personal" >
                        <span class="title">Personal Details</span>

                        <div class="fields">
                            <div class="input-field">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your name" required id="student-name"/>
                            </div>

                            <div class="input-field">
                                <label>Age</label>
                                <input type="int" placeholder="How old are you ?" required id="age"/>
                            </div>

                            <div class="input-field">
                                <label>Gender</label>
                                <select required id="gender">
                                    <option disabled selected>Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="details ID">
                        <span class="title">Parental Details</span>

                        <div class="fields">
                            <div class="input-field">
                                <label>Parental Status</label>
                                <select required id="parental-status">
                                    <option disabled selected>Select status</option>
                                    <option>Apart</option>
                                    <option>Together</option>
                                    
                                </select>
                            </div>

                            <div class="input-field">
                                <label>Family Members</label>
                                <input type="int" placeholder="No. of Family Members" required id="family-num"/>
                            </div>

                            <div class="input-field">
                                <label>Guardian</label>
                                <select required id="guardian">
                                    <option disabled selected>Select Guardian</option>
                                    <option>Mother</option>
                                    <option>Father</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div class="input-field">
                                <label>Mother's Education</label>
                                <input type="int" placeholder="Scale of 1 to 4" required id="mom-edu"/>
                            </div>

                            <div class="input-field">
                                <label>Father's Education</label>
                                <input type="int" placeholder="Scale of 1 to 4" required id="dad-edu"/>
                            </div>
                        
                            
                        </div>
                    </div>

                        <button class="nextBtn">
                            <span class="btnText">Next</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                    </div> 

                <div class="performance-form">
                    <div class="details address">
                        <span class="title">Performance</span>

                        <div class="fields">
                            <div class="input-field">
                                <label>Hours Spent Studying (Daily)</label>
                                <input type="int" placeholder="" required id="studying"/>
                            </div>

                            <div class="input-field">
                                <label>Freetime (hours)</label>
                                <input type="text" placeholder="Approximate free time (hrs)" required id="freetime"/>
                            </div>

                            <div class="input-field">
                                <label>Entertainment (hours)</label>
                                <input type="text" placeholder="Hours spent on entertainment" required id="entertainment"/>
                            </div>

                            <div class="input-field">
                                <label>Days Abscent</label>
                                <input type="text" placeholder="Number of days abscent from school" required id="abscent"/>
                            </div>

                            <div class="input-field">
                                <label>Courses Failed</label>
                                <input type="text" placeholder="Number of courses failed" required id="failed"/>
                            </div>

                            <div class="input-field">
                                <label>Internet Status</label>
                                <select required id="internet">
                                    <option disabled selected>Do you have internet ?</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>

                            <div class="input-field">
                                <label>Health</label>
                                <input type="number" placeholder="How healthy are you ? (1 to 5)" required id="health"/>
                            </div>
                        </div>
                        
                        <div class="buttons">
                            <div class="backBtn">
                                <i class="uil uil-navigator"></i>
                                <span class="btnText">Back</span>
                            </div>
                            
                            <button type="button" onclick="get_form_data()" class="sumbit">
                                <span class="btnText">Submit</span>
                                <i class="uil uil-navigator"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </body>
    </div>);
}