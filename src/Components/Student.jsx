import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link, Outlet} from "react-router-dom";

const Student = () => {
  function createData(name, age, course, batch) {
    return { name, age, course, batch };
  }
  const row = [
    createData('John','27','MERN','September'),
    createData('Elton','22','MEAN','October'),
    createData('Michael','24','MERN','March'),
    createData('Ryan','25','MERN','November'),
    createData('Dwight','26','MERN','December'),
  ];

  
  return (
    <>
    <div>
        <h1 className='std_head'>Student Details</h1>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='tbl_head'>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Batch</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow className='tbl_data'
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.batch}</TableCell>
              <TableCell><Link to="/edit_data">Edit</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <Outlet/>
    </>
  )
}

export default Student
