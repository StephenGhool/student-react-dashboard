import React, {Fragment} from 'react'

const Readonlyrow = ({row, preprow}) => {
    preprow(row);
  return (
    <div {...row.getRowProps()} className="tr"> 
         {row.cells.map((cell,idx) => (
            <div {...cell.getCellProps()}>
                {cell.render("Cell")}
            </div>
        ))}
    </div>
  )
}

export default Readonlyrow