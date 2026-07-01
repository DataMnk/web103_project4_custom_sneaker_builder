export const WHEEL_OPTIONS = [
    { value: 'standard', label: 'Standard', price: 0 },
    { value: 'sport', label: 'Sport', price: 2000 },
    { value: 'offroad', label: 'Off-Road', price: 3000 },
  ]
  
  export const ENGINE_OPTIONS = [
    { value: 'v6', label: 'V6', price: 0 },
    { value: 'v8', label: 'V8', price: 5000 },
    { value: 'electric', label: 'Electric', price: 8000 },
  ]
  
  export const COLOR_OPTIONS = [
    { value: 'red', label: 'Red', hex: '#e63946' },
    { value: 'blue', label: 'Blue', hex: '#1d3557' },
    { value: 'black', label: 'Black', hex: '#1a1a1a' },
    { value: 'white', label: 'White', hex: '#f1faee' },
  ]
  
  const BASE_PRICE = 20000
  
  export const calculateTotalPrice = (wheels, engine) => {
    const wheelPrice = WHEEL_OPTIONS.find(w => w.value === wheels)?.price || 0
    const enginePrice = ENGINE_OPTIONS.find(e => e.value === engine)?.price || 0
    return BASE_PRICE + wheelPrice + enginePrice
  }
  
  export const getColorHex = (color) => {
    return COLOR_OPTIONS.find(c => c.value === color)?.hex || '#cccccc'
  }