import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Outlet, useNavigate } from "react-router-dom";
import { StudentData } from "./Context";
import StudentInfo from "./StudentInfo";

const Student = () => {
  let navigate = useNavigate();

  const [stdData] = useContext(StudentData);

  const add_student = () => {
    navigate("/student-desc");
  };
  return (
    <>
      <div>
        <h1 className="std_head">Student Details</h1>
        <button className="addBtn" onClick={add_student}>
          Add Student
        </button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="tbl_head">
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Batch</TableCell>
                <TableCell>Change</TableCell>
              </TableRow>
            </TableHead>
              
            {stdData.map((student, index) => (
              <StudentInfo
                key={index}
                index={student.id}
                Name={student.Name}
                Age={student.Age}
                Course={student.Course}
                Batch={student.Batch}
              />
              ))}
          </Table>
        </TableContainer>
      </div>
      <Outlet />
    </>
  );
};

export default Student;
