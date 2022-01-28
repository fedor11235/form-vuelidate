const taleValidator = val => /^[\d]{11}$/.test(val)
const dateValidator = val => !(new Date(val) > new Date())

export {taleValidator, dateValidator}