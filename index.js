function SnapCrackle (maxValue){

  let retornoString = ''
  let primo

  for(let i = 1; i <= maxValue; i++){

    primo = NumPrimo(i)

    if((i % 1 === 0) && (i % 5 === 0)){
      if(primo){
        retornoString += 'SnapCracklePrime, '
      }else if((i % 2 === 0) && (i % 5 === 0)){
        retornoString += 'Crackle, ' 
      }else{
        retornoString += 'SnapCrackle, '
      }
    }else if(i % 5 === 0){
      if(primo){
        retornoString += 'CracklePrime, '
      //}else if(i % 2 === 0){
      //  retornoString += 'Crackle, '
      }else{
        retornoString += 'Crackle, '
      }
    }else if(i % 2 === 0){
      if(primo){
        retornoString += 'Prime, '
      }else{
        retornoString += i + ', '
      }
    }else if(i % 1 === 0) {
      if(primo){
        retornoString += 'SnapPrime, '
      }else{
        retornoString += 'Snap, '
      }
    }
  }
  document.write(retornoString)
}

function NumPrimo (num){

  let contador = 0
  let retornoResult = ''

  for(let x = 1; x <= num; x++){

    if(num === 2){
      return true
    }

   if(num % x === 0){
        contador++
    }
  
    if((num % 2 === 0) || (contador > 2) || (num === 1)){
      return false      
    }
  }
  return true
}