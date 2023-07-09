let value1 = 1990;
let max = 1993;
let value2 = Math.floor(Math.random() * max);
let result = value1 + value2 / 5 + 17;
console.log(result);

/*
value2 = Math.floor(Math.random() * max)
Приоритетность операторов JS.
Сначала выполняются действия в скобках - в данном случае сначало выполняется
функция Math.random(), затем перемножение.
Далеее следует выполнение функции Math.floor.
И завершается всё присвоением значения в переменную value2. 

let result = value1 + value2 / 5 + 17 
В данном случаем сначала выполнится деление, затем операции сложения. 
Результат присвоится в переменную result. 

*/
