//1. Сумма квадратов массива

/*function square(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0);
}
console.log(square([5, 3, 2, 7, 9, 6]));

//1.1
let arr = [8,3,7,24,35,28,12,0];
let arr2 = [];
for(let i = 0; i < arr.length; i++) {
  arr[i] *= arr[i];
  arr2.push(arr[i]);
}
console.log(arr2);
for(var j = 0, sum = 0; j < arr2.length; j++) {
  sum += arr2[j];
}
console.log(sum);*/

//2. Вывести индексы нулевых элементов массива, а потом удалить нули


//3. Самое длинное слово в предложении и его индекс 
/*function longWord(str) {
  let strSplit = str.split(' ');
  let lngWord = 0;
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > lngWord){
	lngWord = strSplit[i].length;
     }
  }
  return lngWord;
}
console.log(longWord("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, placeat."));*/

//4. Среднюю длину слова в предложении
