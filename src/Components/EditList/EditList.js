import React from 'react';
import './EditList.css';


function EditList({current, lists, setList}) {
    function handInputname(event) {
        const value= event.target.name;
        const newlist = lists.map((li) =>(
            li.id === current.id ? {...li, name:value} : li

        ))

    setList(newlist)

    }

    function handInputsuntime(event) {
        const value= event.target.suntime;
       const newlist = lists.map((li) =>(
            li.id === current.id ? {...li, suntime:value} : li
        ))

    setList(newlist)

       }

       function handInputwatertime(event) {
        const value= event.target.watertime;
       const newlist = lists.map((li) =>(
            li.id === current.id ? {...li, watertime:value} : li
        ))
         setList(newlist)
       }

   

    return(
        <tr>
            <td> <input type="text" onChange={handInputname} name='name' value={current.name}/> </td>
            <td> <input type="text" onChange={handInputsuntime} name='suntime' value={current.suntime}/> </td>
            <td> <input type="text" onChange={handInputwatertime} name='watertime' value={current.watertime}/> </td>
            <td><button type='submit'/>Update</td>
        </tr>
    )
}

export default EditList;