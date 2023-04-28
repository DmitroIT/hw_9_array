let arr1 = [];
for (let i = 10; i <= 20; i++) {
  arr1.push(i);
}
//выводим на страницу в один ряд цифры от 10 до 20
let str1 = arr1.join(",");
console.log(`Выводим в строку числа от 10 до 20: \n ${str1}`);

//квадраты чисел от 10 до 20
let arr6 = [];
for (i = 10; i <= 20; i++) {
  let square = i * i;
  arr6.push(square);
}
console.log(`Выводим квадраты всех чисел от 10 до 20: \n ${arr6}`);

let start = 10;
let stop = 20;
console.log(`Таблица умножения на 7 для чисел от ${start} и до ${stop}:`);
for (i = start; i <= stop; i++) {
  let mult = i * 7;
  console.log(`${i} x 7 = ${mult}`);
}

//произведение всех чисел от 15 до 35
let multypl = 1;
for (let i = 15; i <= 35; i++) {
  multypl *= i;
}
console.log(`Произведение всех целых чисел от 15 до 35: \n ${multypl}`);

//цикл для цифр от 1 до 500
let arr3 = [];
for (let i = 1; i <= 500; i++) {
  arr3.push(i);
}
//находим сумму всех чисел от 1 до 500
let sumArr3 = arr3.reduce((acc, item) => acc + item, 0);

// находим количество элементов
let arr3Leng = arr3.length;

//находим среднеарифметическое для чисел от 1 до 500
let average = sumArr3 / arr3.length;
console.log(`Среднеарифметическое всех целых чисел от 1 до 500: \n ${average}`);

//числа от 30 до 80
let arr4 = [];
for (i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    arr4.push(i);
  }
}
//console.log(`Выводим все парные числа от 30 до 80: \n ${arr4}`)
let arr4Sum = arr4.reduce((acc, item) => acc + item, 30);
console.log(
  `Выводим сумму только четных чисел в диапазоне от 30 до 80: \n ${arr4Sum}`
);

let arr5 = [];
for (i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    arr5.push(i);
  }
}
console.log(`Выводим числа в диапазоне от 100 до 200 кратные 3: \n ${arr5}`);
