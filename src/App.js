import React from 'react'
import Student from './Components/Student'
import Edit from './Components/Edit';
import Home from './Components/Home';
import Header from './Components/Header';
import Contact from './Components/Contact';
import ChangeData from './Components/ChangeData';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './Components/style.css'

const App = () => {
  return (
    <div>
      <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/home"/> }/>
                <Route path="/home" element={< Home />}/>
                <Route path="/student" element={<Student />}/>
                <Route path="/edit_data/:selectedid" element={<ChangeData/>}>
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Edit/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App
