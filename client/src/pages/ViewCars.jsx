import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCars, deleteCar } from '../services/CarsAPI'
import { getColorHex } from '../utilities/calcPrice'
import '../App.css'

const ViewCars = ({ title }) => {
  const [cars, setCars] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    document.title = title
    fetchCars()
  }, [title])

  const fetchCars = async () => {
    try {
      const data = await getAllCars()
      setCars(data)
    } catch (err) {
      setError('Could not load cars.')
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteCar(id)
      setCars(cars.filter(car => car.id !== id))
    } catch (err) {
      setError('Could not delete car.')
    }
  }

  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div className='view-cars'>
      <h1>Your Custom Cars</h1>
      {cars.length === 0 && <p>No cars yet. Go build one!</p>}
      <div className='car-list'>
        {cars.map(car => (
          <div key={car.id} className='car-card' style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <div style={{ backgroundColor: getColorHex(car.color), width: '100%', height: '80px', borderRadius: '8px' }}></div>
            <p><strong>Color:</strong> {car.color}</p>
            <p><strong>Wheels:</strong> {car.wheels}</p>
            <p><strong>Engine:</strong> {car.engine}</p>
            <p><strong>Price:</strong> ${Number(car.price).toLocaleString()}</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to={`/customcars/${car.id}`}>View</Link>
              <Link to={`/edit/${car.id}`}>Edit</Link>
              <button onClick={() => handleDelete(car.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewCars