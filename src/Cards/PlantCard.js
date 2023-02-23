import { Link } from "react-router-dom"
import supabase from "../Config/supabaseClient"
const PlantCard = ({ Plants }) => {

  const handleDelete = async() =>{
    const {data, error} = await supabase
    .from('Plants')
    .delete()
    .eq('id', Plants.id)

    if (error){
    console.log(error)
  }
    if (data){
      console.log(data)
    }
  }

    return (
      <div className="Plants-card">
        <h3 className="label">Plant: {Plants.Type}</h3>
        <p classname='label2'>Water: {Plants.Water}</p>
        <div className="Sunlight">Sunlight: {Plants.Sunlight}</div>
        <div className="buttons">
            <Link to={'/' + Plants.id}>
            <i className="edit">edit</i>
            </Link>
            <Link to={'/'}>
            <i className="delete" onClick={handleDelete}>delete</i>
            </Link>
        </div>
      </div>
    )
  }
  
  export default PlantCard