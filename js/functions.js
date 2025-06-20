//Стрелочная функция для проверки длины строки
const checkLine = (str = '186', maxLength = '40') => str.length <= maxLength;

//Функция на проверку полиндромности
function checkPalindrome(str = '') {
  const removedStr = str.replaceAll(' ', '').toLowerCase(); // Delete string. Convert a string to uppercase

  let reversedStr = ''; // Generate a new string
  for(let i = removedStr.length - 1; i >= 0; i--) { // Generate of cycle 'for'
    const char = removedStr[i];
    reversedStr += char;
  }
  return removedStr === reversedStr; // Comparison operates
}
