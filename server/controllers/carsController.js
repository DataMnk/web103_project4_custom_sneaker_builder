import { pool } from '../config/database.js'

export const getAllCars = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cars ORDER BY id')
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getCarById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query('SELECT * FROM cars WHERE id = $1', [id])
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createCar = async (req, res) => {
  try {
    const { color, wheels, engine, price } = req.body
    const result = await pool.query(
      'INSERT INTO cars (color, wheels, engine, price) VALUES ($1, $2, $3, $4) RETURNING *',
      [color, wheels, engine, price]
    )
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateCar = async (req, res) => {
  try {
    const { id } = req.params
    const { color, wheels, engine, price } = req.body
    const result = await pool.query(
      'UPDATE cars SET color=$1, wheels=$2, engine=$3, price=$4 WHERE id=$5 RETURNING *',
      [color, wheels, engine, price, id]
    )
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteCar = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM cars WHERE id = $1', [id])
    res.json({ message: 'Car deleted' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
