import React from "react";
import Student from "./Components/Student";
import Edit from "./Components/Edit";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import { DataProvider } from "./Components/Context";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./Components/style.css";
import AddStudent from "./Components/AddStudent";

const App = () => {
  return (
    <div>
      <DataProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student-desc/:index" element={<Edit />} />
            <Route path="/student-desc" element={<AddStudent/>}/>
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
};

export default App;
