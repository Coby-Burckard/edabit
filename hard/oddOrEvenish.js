function oddishOrEvenish(numStr){
  const numSum = numStr.toString().split('').map(num => +num).reduce((prev, current) => prev + current)
  return (numSum % 2) === 0 ? "Evenish" : "Oddish" 
}

console.log(oddishOrEvenish('1231'))