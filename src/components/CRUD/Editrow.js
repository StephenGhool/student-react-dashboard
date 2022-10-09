import React ,{Fragment, useEffect} from 'react'


const Editrow = ({formdata, handleform}) => {
  return (
    <Fragment>
        <button type="submit">
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
   </Fragment>
  )
}

export default Editrow