import React,{createContext, useState} from 'react'

export const StudentData =createContext();

export const DataProvider=(props)=>{
    const[stdData,setStdData]=useState([
        {
            id:1,
            Name:'Elton',
            Age:'22',
            Course:'MEAN',
            Batch:'October'
        },
        {
            id:2,
            Name:'Michael',
            Age:'24',
            Course:'MERN',
            Batch:'March'
        },
        {
            id:3,
            Name:'Ryan',
            Age:'25',
            Course:'MERN',
            Batch:'November'
        }
    ])
    return(
        <StudentData.Provider value={[stdData,setStdData]}>
            {props.children}
        </StudentData.Provider>
    )
}