import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../Config/supabaseClient'


const Create = () => {
const navigate = useNavigate()
    const [Type, setType]= useState('')
    const [Water, setWater]= useState('')
    const [Sunlight, setSunlight]= useState('')
    const [formError, setFormError]= useState('')

const handleSubmit = async (e) => {
    e.preventDefault()

    if (!Type || !Water || !Sunlight){
        setFormError('Fill all fields out.')
        return
    }
    
    const {data, error } = await supabase
    .from('Plants')
    .insert([{Type, Water, Sunlight}])
    if (error){
        console.log(error)
        setFormError('Fill all fields out.')
    }
    if(data){
        console.log(data)
        setFormError(null)
        navigate('/')
    }


}

    return(
        <div className="comp create">
 <form onSubmit={handleSubmit}>
        <label htmlFor="Type">Type:</label>
        <input 
          type="text" 
          id="Type"
          value={Type}
          onChange={(e) => setType(e.target.value)}
        />

        <label htmlFor="Water">Water:</label>
        <input
        type="text"
          id="Water"
          value={Water}
          onChange={(e) => setWater(e.target.value)}
        />

        <label htmlFor="Sunlight">Sunlight:</label>
        <input 
          type="text"
          id="Sunlight"
          value={Sunlight}
          onChange={(e) => setSunlight(e.target.value)}
        />

        <button>Add Plants</button>

        {formError && <p className="error">{formError}</p>}
      </form>
        </div>
    )
    }
    export default Create