function bitwiseAND(n1, n2) {
  const s1 = n1.toString(2).split('')
  const s2 = n2.toString(2).split('')
  correctArrayLengths(s1, s2)
  const bAnd = s1.map((value, index) => value === '1' && s2[index] === '1' ? '1': '0').join('')
  return parseInt(bAnd, 2)
}

function bitwiseOR(n1,n2) {
  const s1 = n1.toString(2).split('')
  const s2 = n2.toString(2).split('')
  correctArrayLengths(s1, s2)
  const bAnd = s1.map((value, index) => (value === '1' || s2[index] === '1') ? '1': '0').join('')
  return parseInt(bAnd, 2)
}

function bitwiseXOR(n1,n2) {
  const s1 = n1.toString(2).split('')
  const s2 = n2.toString(2).split('')
  correctArrayLengths(s1, s2)
  const bAnd = s1.map((value, index) => ((value === '1' || s2[index] === '1') && value !== s2[index]) ? '1': '0').join('')
  return parseInt(bAnd, 2)
}

function correctArrayLengths(s1,s2) {
  if (s1.length === s2.length){
    return 
  } else if (s1.length > s2.length) {
    s2.unshift('0')
    return correctArrayLengths(s1, s2)
  } else {
    s1.unshift('0')
    return correctArrayLengths(s1, s2)
  }
}