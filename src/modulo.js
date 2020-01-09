export const firstname = 'Daniel'
export const lastname = 'Ferreira de Almeida'
export const profession = 'web developer'

export default function view(x, y){
  return `FullName: ${firstname} ${lastname} \nId: ${Math.floor(Math.random()*(x - y) + y)}`
  } 


// export {firstname, lastname, profession, view}
