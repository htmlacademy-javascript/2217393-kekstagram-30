// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы.
// 1. посчитать количество символов в строке
// 2. сравнить количество с заданным значением
// 3. если строка больше, то возвращаем false
// 4. если меньше или равно, то true

/**
 * Функция для проверки длины строки
 * @param {Int} maxLength - максимальная длина строки
 * @param {string} myString - исходная строка
 * @return {boolean} - результат сравнения
 */
function checkStringLength(maxLength, myString) {
  return myString.length <= maxLength;
}

let check = checkStringLength(19, 'returns my functions');
console.log(check);
check = checkStringLength(20, 'returns to functions');
console.log(check);
check = checkStringLength(19, 'returns 222functions');
console.log(check);


// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
// 1. Нормализовать строку - выровнять символы и убрать пробелы
// 2. Создать новую пустую строку
// 3. С помощью цикла перевернуть строку и посимвольно вставить в новую
// 4. Сравнить полученную строку с нормализованной
// 5. Если строки равны, то это палиндром, true
// 6. Если не равны, то false

/**
 * Функция для проверки, является ли строка палиндромом
 * @param {string} anyString - любая введённая строка
 * @returns {boolean} - результат проверки
 */

function isItPalindrom(anyString) {
  const normalizeString = anyString.toLowerCase().replaceAll(' ', '');
  let comparedString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    comparedString += normalizeString[i];
  }
  return comparedString === normalizeString;
}

check = isItPalindrom('нКвд');
console.log(check);
check = isItPalindrom('А роза упала на лапу Азора');
console.log(check);
check = isItPalindrom('Дед');
console.log(check);
