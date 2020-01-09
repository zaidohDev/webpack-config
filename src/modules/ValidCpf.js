export default class ValidCpf{
  constructor(cpfSent){
    Object.defineProperty(this, 'cleanCpf', {
      enumerable: true,
      configurable: false,
      get: function(){
        return cpfSent.replace(/\D+/g, '')
      }
    })
  }
  
  isSequence(){
    return this.cleanCpf.charAt(0).repeat(this.cleanCpf.length) === this.cleanCpf
  }
  
  static createDigit(cpfPartial){
    // usando for
    // let total = 0
    // let reverse = cpfPartial.length + 1
    
    // for (let stringNum of cpfPartial) {
    //   total += (reverse * Number(stringNum))
    //   reverse--
    // }

    //usando reduce
    const cpfArray = Array.from(cpfPartial)
    let regressive = cpfArray.length + 1

    const total = cpfArray.reduce((acc, val) => {
      acc += regressive * Number(val)
      regressive--
      return acc
    }, 0)

    const digit = 11 - (total % 11)
	  return digit <= 9 ? String(digit): '0' 
  }

    generateNewCpf(){
    const cpfPartial = this.cleanCpf.slice(0, -2)
    const digit1 = ValidCpf.createDigit(cpfPartial) 
    const digit2 = ValidCpf.createDigit(cpfPartial + digit1)  
    const newCpf = cpfPartial + digit1 + digit2
    if(this.newCpf !== this.cleanCpf) return false
    return newCpf
  }

  valid(){
    if(!this.cleanCpf) return false
    if(typeof this.cleanCpf !== 'string') return false
    if(this.cleanCpf.length !== 11) return false
    if(this.isSequence()) return false 
    
    this.generateNewCpf()
    
    return true
  }
}

const validCpf = new ValidCpf('629.580.973-15')
if (validCpf.valid()) {
  console.log('válido')
} else {
  console.log('inválido')
}