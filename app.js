// let dict = new Map();

// dict.set(1, 'one');
// dict.set(2, 'two');
// dict.set('language', 'хэл');
// dict.set('car', 'машин');
// dict.set('sun', 'нар');
// dict.set('аав', 'father');
// dict.set(2, 'сар');

// dict.delete('language');

// // console.log(dict.get(2));
// dict.forEach( (value, key) => console.log(key + ' ===> ' + value));

// for (let [a, b] of dict)
// {
//     console.log(a + ' түлхүүрийн утга нь ' + b);
// }

// console.log(dict.size)

// console.log(dict.has('cap'));

let text = `гол гол гол адах гол молөкулын`;

// console.log(text);

// Бүх үгийг салгаж аваад массивт хийе
let words = text.split(" ");
// console.log(words);

// Үг бүрээ Map руу хийнэ
let myMap = new Map();
words.forEach((el) => myMap.set(el, 1));

// Map Ийн хэмжээг харна
console.log("Нийт давхардаагүй үгийн тоо : " + myMap.size);
