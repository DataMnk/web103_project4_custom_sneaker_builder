import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCar } from '../services/CarsAPI'
import { WHEEL_OPTIONS, ENGINE_OPTIONS, COLOR_OPTIONS, calculateTotalPrice, getColorHex } from '../utilities/calcPrice'
import { getComboError } from '../utilities/validation'
import '../App.css'

const CreateCar = ({ title }) => {
  const [color, setColor] = useState(COLOR_OPTIONS[0].value)
  const [wheels, setWheels] = useState(WHEEL_OPTIONS[0].value)
  const [engine, setEngine] = useState(ENGINE_OPTIONS[0].value)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => { document.title = title }, [title])

  const price = calculateTotalPrice(wheels, engine)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const comboError = getComboError(wheels, engine)
    if (comboError) { setError(comboError); return }
    setError(null)
    try {
      await createCar({ color, wheels, engine, price })
      navigate('/customcars')
    } catch (err) {
      setError('Something went wrong saving your car. Try again.')
    }
  }

  return (
    <div className='create-car'>
      <h1>Customize Your Car</h1>

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

        <button type='submit'>Save Car</button>
      </form>
    </div>
  )
}

export default CreateCar