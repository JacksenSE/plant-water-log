import supabase from "../Config/supabaseClient"
import { useEffect, useState } from 'react'

// components
import PlantCard from "../Cards/PlantCard"

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [Plants, setPlants] = useState(null)

    
  useEffect(() => {
    const fetchPlants = async () => {
      const { data, error } = await supabase
        .from('Plants')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the Plants')
        setPlants(null)
      }
      if (data) {
        setPlants(data)
        setFetchError(null)
      }
    }

    fetchPlants()

  }, [])

  return (
    <div className="comp Plants">
      {fetchError && (<p>{fetchError}</p>)}
      {Plants && (
        <div className="Plants">
          {/* order-by buttons */}
          <div className="Plants-grid">
            {Plants.map(Plants => (
              <PlantCard key={Plants.id} Plants={Plants} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home