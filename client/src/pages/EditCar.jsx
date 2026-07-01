import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCarById, updateCar } from '../services/CarsAPI'
import { WHEEL_OPTIONS, ENGINE_OPTIONS, COLOR_OPTIONS, calculateTotalPrice, getColorHex } from '../utilities/calcPrice'
import { getComboError } from '../utilities/validation'
import '../App.css'

const EditCar = ({ title }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [color, setColor] = useState('')
  const [wheels, setWheels] = useState('')
  const [engine, setEngine] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = title
    const fetchCar = async () => {
      try {
        const data = await getCarById(id)
        setColor(data.color)
        setWheels(data.wheels)
        setEngine(data.engine)
      } catch (err) {
        setError('Could not load this car.')
      } finally {
        setLoading(false)
      }
    }
    fetchCar()
  }, [id, title])

  if (loading) return <p>Loading...</p>

  const price = calculateTotalPrice(wheels, engine)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const comboError = getComboError(wheels, engine)
    if (comboError) { setError(comboError); return }
    setError(null)
    try {
      await updateCar(id, { color, wheels, engine, price })
      navigate(`/customcars/${id}`)
    } catch (err) {
      setError('Something went wrong updating your car.')
    }
  }

  return (
    <div className='edit-car'>
      <h1>Edit Car #{id}</h1>

      <div style={{ backgroundColor: getColorHex(color), width: '300px', height: '150px', borderRadius: '12px', margin: '1rem 0' }}></div>

      <form onSubmit={handleSubmit}>
        <label>
          Color
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            {COLOR_OPTIONS.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
        </label>

        <label>
          Wheels
          <select value={wheels} onChange={(e) => setWheels(e.target.value)}>
            {WHEEL_OPTIONS.map(w => <option key={w.value} value={w.value}>{w.label} (+${w.price})</option>)}
          </select>
        </label>

        <label>
          Engine
          <select value={engine} onChange={(e) => setEngine(e.target.value)}>
            {ENGINE_OPTIONS.map(en => <option key={en.value} value={en.value}>{en.label} (+${en.price})</option>)}
          </select>
        </label>

        <h2>Total: ${price.toLocaleString()}</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type='submit'>Save Changes</button>
      </form>
    </div>
  )
}

export default EditCar