import ValidCpf from './ValidCpf'

export default class GeratorCpf {
   rand (min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min))
   }
 formated(cpf){
   return (
     cpf.slice(0, 3) + '.' +
     cpf.slice(3, 6) + '.' +
     cpf.slice(6, 9) + '-' +
     cpf.slice(9, 11) 
   )
 }
  generateNewCpf(){
     const cpfWithoutDigit = this.rand()
     const digit1 = ValidCpf.createDigit(cpfWithoutDigit)
     const digit2 = ValidCpf.createDigit(cpfWithoutDigit + digit1)
     const newCpf = cpfWithoutDigit + digit1 + digit2

     return this.formated(newCpf)
   } 
}