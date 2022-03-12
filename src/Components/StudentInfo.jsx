import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {Link,Outlet} from "react-router-dom";

function StudentInfo({index,Name,Age,Course,Batch}) {
  return (
      <> 
      
        <TableBody>
            <TableRow className='tbl_data'
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {Name}
              </TableCell>
              <TableCell>{Age}</TableCell>
              <TableCell>{Course}</TableCell>
              <TableCell>{Batch}</TableCell>
              <TableCell><Link to={"/student-desc/"+ index}>Edit</Link></TableCell>
            </TableRow>
        </TableBody>
    
    <Outlet/>
    </>
  )
}

export default StudentInfo
