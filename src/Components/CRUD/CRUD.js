import React from 'react';
import {useEffect, useState } from 'react';
import './CRUD.css';
import AddList from '../AddList/AddList';
import EditList from '../EditList/EditList';


function CRUD() {
    const list= [
        {
            id: 1,
            name: "Pothos",
            suntime: "Indirect Sunlight",
            watertime: "Sunday",
        },
        {
            id: 2,
            name: "Snake Plant",
            suntime: "Indirect Sunlight",
            watertime: "Monday",
        },
    ]
const [lists, setList] = useState(list)
const [updateState, setUpdateState, ] = useState(-1)

    return (
        <div className='crud'>
            <div>
            <AddList setList = {setList}/>
            <form onSubmit={handleSubmit} />
            <form>
            <table>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.watertime}</td>
                            <td>{current.suntime}</td>
                            <td>
                                <button className='edit'onClick={() => handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )     
    
    function handleEdit(id) {
     setUpdateState(id)

    }

    function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id)
    setList(newlist)

}

    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const suntime = event.target.elements.suntime.value
        const watertime = event.target.elements.watertime.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, suntime:suntime, watertime:watertime} : li
        ))

      setList(newlist)  
      setUpdateState(-1)
    }
}

export default CRUD;