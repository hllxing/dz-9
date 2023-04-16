let arrLength = 0;
arrLength = parseInt(prompt('Введите длину массива'));

let arr = [];
console.log('Пустой массив' + arr);
for (let i = 0; i < arrLength; i++){
    let enteredValue = prompt(`Введите #${i + 1} элемент массива`);
    arr.push(enteredValue);
}

console.log('Ваш массив: ' + arr);

arr.sort((a, b) => a - b);
console.log('Рассортированный массив: ' + arr);

arr.splice(1,3);
console.log('Конечный массив: ' + arr);