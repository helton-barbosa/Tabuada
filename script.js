function tabuada(){
   let numero = window.document.querySelector('input#numero')
   let tabuada = window.document.querySelector('select#selTab')

   if(numero.value.length == 0){
      tabuada.innerHTML = ''
      window.alert("Por favor, entre com um número!")
   } else {
      let num = Number(numero.value)
      let contador = 1
      tabuada.innerHTML = ''
      while(contador <= 10){
         let item = document.createElement('option')
         item.text = `${num}  x  ${contador}  =  ${num*contador}`
         item.value = `tab${contador}`
         tabuada.appendChild(item)
         contador++
      }
   }
}
