const BASE_URL = '/api/cars'

export const getAllCars = async () => {
  const response = await fetch(BASE_URL)
  if (!response.ok) throw new Error('Failed to fetch cars')
  return response.json()
}

export const getCarById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`)
  if (!response.ok) throw new Error('Failed to fetch car')
  return response.json()
}

export const createCar = async (car) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  })
  if (!response.ok) throw new Error('Failed to create car')
  return response.json()
}

export const updateCar = async (id, car) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  })
  if (!response.ok) throw new Error('Failed to update car')
  return response.json()
}

export const deleteCar = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
  if (!response.ok) throw new Error('Failed to delete car')
  return response.json()
}