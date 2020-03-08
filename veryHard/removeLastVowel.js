function removeLastVowel(sentence){
  return sentence.split(' ').map(word => removeLastVowelWord(word)).join(' ')
}

function removeLastVowelWord (word){
  const vowels = 'AEIOUaeiou'.split('')
  const wordArr = word.split('')

  for (let i = wordArr.length - 1; i>=0; i--){
    if(vowels.includes(wordArr[i])){
      const newWord = [...wordArr]
      newWord.splice(i, 1)
      return newWord.join('')
    }
  }
}

console.log(removeLastVowel('absd fnseedf sdfu abc'))