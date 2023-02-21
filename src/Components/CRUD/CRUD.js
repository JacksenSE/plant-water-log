import React from 'react';
import {useEffect, useState } from 'react';
import './CRUD.css';
import AddList from '../AddList/AddList';

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

    return (
        <div className='crud'>
            <div>
            <AddList setList = {setList}/>
            <table>
                {
                    lists.map((current) => (
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.watertime}</td>
                            <td>{current.suntime}</td>
                            <td>
                                <button className='edit'>Edit</button>
                                <button className='delete'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </div>
        </div>
    )        
}

export default CRUD;