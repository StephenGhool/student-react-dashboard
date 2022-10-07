
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useTable, useColumnOrder, useBlockLayout, useResizeColumns, 
  useRowSelect,useAbsoluteLayout} from "react-table";
import { Checkbox } from "../../components/Checkbox";
import { DeleteStudent } from "../../components/DeleteStudent";

export const Products = ({products, isstudentdelete}) => {
    const productsData = useMemo(() => [...products], [products]);

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
          maxWidth: 200
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
                <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ])
      }
    )

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setColumnOrder, 
      resetResizing, selectedFlatRows} = tableInstance

    useEffect (() => {
        setColumnOrder(['StudentName','StudentAge','StudentSchool','StudentMomName','StudentDadName']);
      }, []);  

    useEffect(()=>{
      {isstudentdelete && DeleteStudent(selectedFlatRows)}
    },[selectedFlatRows])
    
    return <div className="movie">
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
                        {rows.slice(0, 10).map((row) => {
                            prepareRow(row);
                            return <div {...row.getRowProps()} className="tr"> 
                                {row.cells.map((cell,idx) => (
                                <div {...cell.getCellProps()} className="td">
                                    {cell.render("Cell")}
                                </div>
                            ))}
                            </div>
                            
                        })}
                    </div>

                    {/* <div>
                        <pre>
                          <code>
                            {JSON. stringify(
                              {
                                selectedFlatRows:selectedFlatRows.map((row) => row.original),
                              },
                              null,
                              2
                            )}
                          </code>
                        </pre>
                    </div> */}
                </div>

            </div>
}


// const data = useMemo(
//     () => [
//         {
//             "StudentAge": 0,
//             "StudentSchool": "string",
//             "StudentName": "strings",
//         },
//         {
//             "StudentAge": 0,
//             "StudentSchool": "string",
//             "StudentName": "strings",
//         },
//     ],[]
 
//  );

//  const columns = useMemo(
//     () => [
//         {
//             Header : " Student Name",
//             accessor: "StudentName"
//         },
//         {
//             Header : " School",
//             accessor: "StudentSchool"
//         }
//    ],[]);