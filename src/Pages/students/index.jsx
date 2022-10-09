
import axios from "axios";
import React, { useEffect, useMemo, useState, Fragment} from "react";
import { useTable, useColumnOrder, useBlockLayout, useResizeColumns, 
  useRowSelect} from "react-table";
import { Checkbox } from "../../components/CRUD/Checkbox";
import { DeleteStudent } from "../../components/CRUD/DeleteStudent";
import Readonlyrow from "../../components/CRUD/Readonlyrow";
import Editrow from "../../components/CRUD/Editrow";

export const Products = ({products, isstudentdelete, isedit, issave}) => {
    const productsData = useMemo(() => [...products], [products]);
    const [editrowid, seteditrowid] = useState(null);
    
    const [FormData, setFormData] = useState({
        "StudentName": "Student Name",
        StudentMomName: "Mother's Name",
        StudentDadName: "Father's Name",
        StudentSchool: "School",
        StudentAge: "Student Age",
        StudentAbscent: "Days Abscent",
        StudentGuardian: "Guardian",
    });
   
    const cols_rename = {  
        "StudentName": "Student Name",
        "StudentMomName": "Mother's Name",
        "StudentDadName": "Father's Name",
        "StudentSchool": "School",
        "StudentAge": "Student Age",
        "StudentFamsize": 0,
        "StudentParentalStatus": "Parental Status",
        "StudentMomEdu": 0,
        "StudentDadEdu": 0,
        "StudentGuardian": "Guardian",
        "StudentStudytime": 0,
        "StudentFailCourse": 0,
        "StudentHasInternet": "string",
        "StudentFreetime": 0,
        "StudentEntertainment": 0,
        "StudentHealth": 0,
        "StudentAbscent": "Days Abscent",
        "StudentPredictedPerformance": 0
    }

    const productsColumns = useMemo(
        () =>
          products[0]
            ? Object.keys(products[0])
                .filter((key) => key !== "StudentPredictedPerformance")
                .filter((key) => key !== "StudentHealth")
                .filter((key) => key !== "StudentDadEdu")
                .filter((key) => key !== "StudentMomEdu")
                .filter((key) => key !== "StudentParentalStatus")
                .filter((key) => key !== "StudentHasInternet")
                .filter((key) => key !== "StudentFailCourse")
                .filter((key) => key !== "StudentFreetime")
                .filter((key) => key !== "StudentEntertainment")
                .filter((key) => key !== "StudentStudytime")
                .filter((key) => key !== "StudentFamsize")
                .map((key) => {
                  if (key === "image")
                    return {
                      Header: key,
                      accessor: key,
                      Cell: ({ value }) => <img src={value} />,
                      maxWidth: 70,
                    };
    
                  return { Header: cols_rename[key], accessor: key, minWidth:600};
                })
            : [],
        [products]
      );

    const defaultColumn = React.useMemo(
        () => ({
          minWidth: 30,
          width: 50,
          maxWidth: 202
        }),
        []
      );

    const tableInstance = useTable(
      {
        columns:productsColumns, 
        data:productsData,
        defaultColumn
      },
      useColumnOrder,
      useBlockLayout,
      useResizeColumns,
      useRowSelect,
      hooks => {
        hooks.visibleColumns.push((columns) => [
          // Let's make a column for selection
          {
            id: 'selection',
            Header: '',
            Cell: ({ row }) => (
                <Checkbox {...row.getToggleRowSelectedProps()} className="checkbox" />
            ),
          },
          ...columns,
        ])
      }
    )

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setColumnOrder, 
      resetResizing, selectedFlatRows} = tableInstance
    
    // function used to handle the submission of edits to database
    const handleeditsubmit = () =>{
      const UPDATE_URL = "http://ec2-34-229-81-144.compute-1.amazonaws.com/update"
      console.log("Submitting")
      console.log(FormData)
      console.log(JSON.stringify(FormData))
      const response = axios.post(UPDATE_URL, 
                JSON.stringify(FormData),
                {headers: {"accept": "application/json", "content-type": "application/json"
        },})
        .catch(err => console.log(err.response.data['details']))
        .catch(err => console.log(err)) ;
      console.log(response)
    }

    // used to set column order on setup - runs only once
    useEffect (() => {
        setColumnOrder(['StudentName','StudentAge','StudentSchool','StudentMomName','StudentDadName']);
      }, []);  

    // handle the deleting of row
    useEffect(()=>{
      {isstudentdelete && DeleteStudent(selectedFlatRows)}
    },[selectedFlatRows])
    
    // updates the "FormData" values during edit mode - FormData is sent to database
    const handleeditform = (event)=>{
      if (event.target.id ==="StudentName") {
        setFormData({ ... FormData ,  StudentName: event.target.value})
      }
      else if(event.target.id ==="StudentAge"){
        setFormData({ ... FormData ,  StudentAge: event.target.value})
      }
      else if(event.target.id ==="StudentMomName"){
        setFormData({ ... FormData ,  StudentMomName: event.target.value})
      }
      else if(event.target.id ==="StudentDadName"){
        setFormData({ ... FormData ,  StudentDadName: event.target.value})
      }
      else if(event.target.id ==="StudentSchool"){
        setFormData({ ... FormData ,  StudentSchool: event.target.value})
      }
      else if(event.target.id ==="StudentGuardian"){
        setFormData({ ... FormData ,  StudentGuardian: event.target.value})
      }
      else{
        setFormData({ ... FormData ,  StudentAbscent: event.target.value})
      }
    }

    // sets the ID of the row to be edited and prefills the edit row with previous data
    useEffect(()=>{
      selectedFlatRows.map( selectedrow => {
        if (isedit) {
          seteditrowid(selectedrow.id)
        } 
       
        const data = {
          "StudentName": selectedrow.values['StudentName'],
          StudentMomName: selectedrow.values['StudentMomName'],
          StudentDadName: selectedrow.values['StudentDadName'],
          StudentSchool: selectedrow.values['StudentSchool'],
          StudentAge: selectedrow.values['StudentAge'],
          StudentAbscent: selectedrow.values['StudentAbscent'],
          StudentGuardian: selectedrow.values['StudentGuardian'],
        }
        setFormData(data)
        
      })

      if (!isedit){
        seteditrowid(null)
      }
    },[isedit])

    // calls the submit function when save button clicked
    useEffect(()=>{
      {issave && handleeditsubmit()}
    },[issave])

    return <form  onSubmit={handleeditsubmit} className="movie">
                <div {...getTableProps} className="table">
                    <div >
                        {headerGroups.map((headerGroup) => (
                            <div{...headerGroup.getHeaderGroupProps()} className="tr">
                                {headerGroup.headers.map((column) =>(
                                    <div {...column.getHeaderProps()} className="th">
                                        {column.render("Header")}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div {...getTableBodyProps()} className="tbody">
                      <Fragment>
                        <div>
                        {rows.map((row) => (
                            <Fragment>
                                {editrowid!==row.id? (
                                  <Readonlyrow row={row} preprow={prepareRow} className="tr"/>
                                ):(
                                  <Editrow formdata={FormData } handleform = {handleeditform}className="tr"/>
                                
                                )}
                            </Fragment>
                                
                          ))}

                        </div>
                     
                    </Fragment>
                    </div>
                </div>
            </form>
}
