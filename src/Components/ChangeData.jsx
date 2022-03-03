import React from 'react'
import { useParams } from "react-router-dom";

const ChangeData = () => {
    const {selectedid} = useParams();
    return (
    <div>
         <div>Edit this Data: {selectedid}</div>
    </div>
  )
}

export default ChangeData
