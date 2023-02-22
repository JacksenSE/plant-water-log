import React from 'react';
import './AddList.css';
import {useRef, useState} from 'react';


function AddList({setList}) {
    const nameRef = useRef()
    const suntimeRef = useRef()
    const watertimeRef = useRef()

    function handleSubmit(event) {
   event.preventDefault();
   const name = event.target.elements.name.value;
   const suntime = event.target.elements.suntime.value;
   const watertime = event.target.elements.watertime.value;
   const newlist = {
    id: 3,
    name,
    suntime,
    watertime 

   }
   setList((prevList)=>{
    return prevList.concat(newlist)
   }) 

nameRef.current.value = ""
suntimeRef.current.value = ""
watertimeRef.current.value = ""

    }
    return(
 <form className="addlist" onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="Enter Name" ref={nameRef}/>
    <input type="text" name="suntime" placeholder="Enter Sun Time" ref={suntimeRef}/>
    <input type="text" name="watertime" placeholder="Enter Water Time" ref={watertimeRef}/>
    <button type="submit">Add</button>
 </form>

    )
}
 export default AddList;