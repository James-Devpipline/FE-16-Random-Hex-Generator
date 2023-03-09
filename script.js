/* 
Challenge: 
Write a program that will return a random hexadecimal value. 
Hexadecimal values => # -> a-f -> 0-9
randomHex => #aaa670
randomHex => #be7380
*/

function randomHexGenerator() {
  const hexCharacters = "ABCDEF1234567890"
  let hexFinal = ''

  for (let i = 0; i < 6; i++) {
    hexFinal += hexCharacters[Math.floor(Math.random() * hexCharacters.length)]
  }
  return alert(`Your randomly Generated Hex code is: #${hexFinal}`)
}

randomHexGenerator()