import React,{useState,useContext} from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { StudentData } from './Context';


function Edit() {
  let navigate = useNavigate();
  const [stdData] = useContext(StudentData);
  let {index}= useParams();
  console.log(index);
  let [name,setName]=useState(stdData[index-1].Name)
  let [age,setAge]=useState(stdData[index-1].Age)
  let [course,setCourse]=useState(stdData[index-1].Course)
  let [batch,setBatch]=useState(stdData[index-1].Batch)
  let [tempObj] = useState(stdData[index-1])
  console.log(tempObj);


  const EditStudent=()=>{
    
     tempObj={
        name,
        age,
        course,
        batch,
        id:index
      }
     
      navigate("/student")
      console.log(tempObj);
  }

  const Back=()=>{
    navigate("/student")
  }

    stdData.map((student) => { 
      if((student.id)==index)
      return(
    <>
    <div className='edit_data'>
        <input type="text" name='name' value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" name='age' value={age} placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
        <input type="text" name='course' value={course} placeholder="Course" onChange={(e)=>setCourse(e.target.value)}/>
        <input type="text" name='batch' value={batch} placeholder="Batch" onChange={(e)=>setBatch(e.target.value)}/>
        <button onClick={EditStudent} className="edit_student">Submit</button>
        <button onClick={Back} className="edit_student">Cancel</button>
    </div>
        
    </>
    )
    return null;
    }
  )
  
}


export default Edit
