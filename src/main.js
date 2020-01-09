import './assets/css/style.css'

import GenerateCpf from './modules/GenerateCpf';

(function(){
  const generate = new GenerateCpf()
  const cpfGenerated = document.querySelector('.cpf-generated')
  cpfGenerated.innerHTML = generate.generateNewCpf()
})()