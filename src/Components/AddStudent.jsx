import { StudentData } from './Context';
import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";


const AddStudent = () => {
    const navigate = useNavigate();
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[course,setCourse]=useState('')
    const[batch,setBatch]=useState('')
    const[stdData,setStdData]=useContext(StudentData)
    
    const AddStudent=()=>{
      let stdObj={
        id:stdData.length+1,
        Name:name,
        Age:age,
        Course:course,
        Batch:batch
      }
      setStdData([...stdData,stdObj])
      navigate("/student")
    }
    const Back=()=>{
      navigate("/student")
    }

  return (
    <>
    <div className='ip_fields'>  
        <input className='ip1' type="text" id='name' name='name' value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <input className='ip2' type="text" id='age' name='age' value={age} placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
        <input className='ip3' type="text" id='course' name='course' value={course} placeholder="Course" onChange={(e)=>setCourse(e.target.value)}/>
        <input className='ip4' type="text" id='batch' name='batch' value={batch} placeholder="Batch" onChange={(e)=>setBatch(e.target.value)}/>
        <button onClick={AddStudent} className="sub_student">Submit</button> <br/><br/><br/>
        <button onClick={Back} className="go_back">Cancel</button>
    </div>

    
</>
  )
}

export default AddStudent
