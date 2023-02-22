import supabase from "../Config/supabaseClient"
import { useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom"





const Update = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [Type, setType]= useState('')
    const [Water, setWater]= useState('')
    const [Sunlight, setSunlight]= useState('')
    const [formError, setFormError]= useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!Type || !Water || !Sunlight){
            setFormError('Fill all fields out.')
            return
        }
        const {data, error } = await supabase
        .from("Plants")
        .update({Type, Water, Sunlight})
        .eq('id', id)
        
        if (error) {
            console.log(error)
            setFormError('Fill all fields out')
        }
        if (data) {
            console.log(data)
            setFormError(null)
            navigate('/')

        }
    }

    useEffect(() => {
        const fetchPlants = async () => {
            const {data, error } = await supabase
            .from('Plants')
            .select()
            .eq('id', id)
            .single()

            if (error){
                navigate('/', {replace : true })
            }
        
        if (data) {
            setType(data.Type)
            setWater(data.Water)
            setSunlight(data.Sunlight)
        }
    }
    fetchPlants()
    },[id, navigate])
    

    return(
        <div className="comp update">
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

        <button>Update Plants</button>

        {formError && <p className="error">{formError}</p>}
      </form>
        </div>
    )
    }
    export default Update