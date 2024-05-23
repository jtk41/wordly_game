// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const words = ['ворон', 'кабан', 'кофта', 'карта', 'санки', 'марка'];
const word = words[Math.floor(Math.random() * words.length)];
const life = 5;
const letters = ['_', '_', '_', '_', '_'];
for (let i = life; i > 0; i -= 1) {
  const answer = readlineSync.question('Введите слово: ');
  if (answer.toLowerCase() === word) {
    console.log('Вы победили!');
    break;
  }
  if (answer.toLowerCase() !== word) {
    answer
      .toLowerCase()
      .split('')
      // eslint-disable-next-line no-return-assign
      .forEach((letter) => (word.includes(letter) ? (letters[word.indexOf(letter)] = letter) : console.log(`Буквы: ${letter} нет в слвое`)));
  }
  console.log(letters.join(' '));
}

console.log(`Загаданным словом было: ${word}`);
