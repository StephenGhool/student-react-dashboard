import React, {useMemo}from "react";
import axios from "axios";


function DeleteStudent(selectedrows) {
    // Steps:
    // 1. Get the studentname/studentid from the selected rows
    // 2. Post name to URL -parse in the url itselsf
    const URL = "http://ec2-34-229-81-144.compute-1.amazonaws.com/student_delete/"
    selectedrows.map( selectedrow => {
        const student = selectedrow.values['StudentName'];
        console.log(student)
        const response = axios.get(URL.concat(student)).catch( err => console.log (err)) ;
        
   return response})

    return 
}

export {DeleteStudent}