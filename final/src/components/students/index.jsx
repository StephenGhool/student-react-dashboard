
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";


export const Products = ({products}) => {
    const productsData = useMemo(() => [...products], [products]);

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
    
                  return { Header: key, accessor: key };
                })
            : [],
        [products]
      );

    const tableInstance = useTable({columns:productsColumns, data:productsData})

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
    
    return <div className="movie">
                <table {...getTableProps}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr{...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) =>(
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);

                            return <tr {...row.getRowProps()}> 

                                {row.cells.map((cell,idx) => (
                                <td {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                </td>
                            ))}
                            </tr>
                            
                        })}
                    </tbody>

                </table>

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