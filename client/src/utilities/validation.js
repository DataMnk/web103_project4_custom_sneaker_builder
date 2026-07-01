export const isValidCombo = (wheels, engine) => {
    if (engine === 'electric' && wheels === 'offroad') {
      return false
    }
    return true
  }
  
  export const getComboError = (wheels, engine) => {
    if (!isValidCombo(wheels, engine)) {
      return 'Electric engines are not compatible with Off-Road wheels.'
    }
    return null
  }