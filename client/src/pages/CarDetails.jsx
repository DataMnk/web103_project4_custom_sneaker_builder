import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCarById } from '../services/CarsAPI'
import { getColorHex } from '../utilities/calcPrice'
import '../App.css'

const CarDetails = ({ title }) => {
  const { id } = useParams()
  const [car, setCar] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    document.title = title
    const fetchCar = async () => {
      try {
        const data = await getCarById(id)
        setCar(data)
      } catch (err) {
        setError('Could not load this car.')
      }
    }
    fetchCar()
  }, [id, title])

  if (error) return <p style={{ color: 'red' }}>{error}</p>
  if (!car) return <p>Loading...</p>

  return (
    <div className='car-details'>
      <h1>Car #{car.id}</h1>
      <div style={{ backgroundColor: getColorHex(car.color), width: '300px', height: '150px', borderRadius: '12px' }}></div>
      <p><strong>Color:</strong> {car.color}</p>
      <p><strong>Wheels:</strong> {car.wheels}</p>
      <p><strong>Engine:</strong> {car.engine}</p>
      <p><strong>Price:</strong> ${Number(car.price).toLocaleString()}</p>
      <Link to={`/edit/${car.id}`}>Edit this car</Link>
      <br />
      <Link to='/customcars'>Back to all cars</Link>
    </div>
  )
}

export default CarDetails