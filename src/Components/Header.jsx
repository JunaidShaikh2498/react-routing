import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to="/home" className="header_nav">Home</Link>
        <Link to="/student" className="header_nav">Student</Link>
        <Link to="/contact" className="header_nav">Contact US</Link>
      </div>
    )
  }
}

export default Header
