import 'dotenv/config'
import { pool } from './database.js'

const createCarTable = async () => {
  await pool.query(`
    DROP TABLE IF EXISTS cars;
    CREATE TABLE cars (
      id SERIAL PRIMARY KEY,
      color VARCHAR(50),
      wheels VARCHAR(50),
      engine VARCHAR(50),
      price NUMERIC
    );
  `)
  console.log('Tabla cars creada ✅')
  pool.end()
}

createCarTable()