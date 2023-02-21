import React from 'react';
import './AddList.css';

function AddList({setList}) {
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

    }
    return(
 <form className="addlist" onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="Enter Name" />
    <input type="text" name="suntime" placeholder="Enter Sun Time" />
    <input type="text" name="watertime" placeholder="Enter Water Time" />
    <button type="submit">Add</button>
 </form>

    )
}
 export default AddList;