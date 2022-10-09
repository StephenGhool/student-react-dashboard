import React ,{useEffect} from 'react'
import { Checkbox } from './Checkbox'
// import { Icon } from '@mui/material';
// import CheckIcon from '@mui/icons-material/Check';


const Editrow = ({formdata, handleform}) => {
    

    const handleeditstudentname = (event) => {
      // setnewformdata({ ... newformdata , StudentName: event.target.value})
    }
  return (
    <div>
        
        <button type="submit">
          {/* <CheckIcon className="checkbox"/> */}
          cancel
        </button>

        <input 
        type="text" 
        placeholder="Enter your name" 
        value={formdata.StudentName}
        onChange ={handleform}
        id="StudentName"/>

        <input 
        type="text" 
        placeholder="Enter your Age" 
        value={formdata.StudentAge}
        onChange ={handleform}
        id="StudentAge"/>


        <input 
        type="text" 
        placeholder="Enter your School" 
        value={formdata.StudentSchool}
        onChange ={handleform}
        id="StudentSchool"/>

        <input 
        type="text" 
        placeholder="Enter Mother's name" 
        value={formdata.StudentMomName}
        onChange ={handleform}
        id="StudentMomName"/>

        <input 
        type="text" 
        placeholder="Enter Father's name" 
        value={formdata.StudentDadName}
        onChange ={handleform}
        id="StudentDadName"/>

        <input 
        type="text" 
        placeholder="Enter Guardian" 
        value={formdata.StudentGuardian}
        onChange ={handleform}
        id="StudentGuardian"/>

        <input 
        type="text" 
        placeholder="Enter days abscent" 
        value={formdata.StudentAbscent}
        onChange ={handleform}
        id="StudentAbscent"/>
    </div>
  )
}

export default Editrow