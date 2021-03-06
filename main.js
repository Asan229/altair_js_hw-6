/* 1. Население Bishkek City равняется 2000000 жителей.
Население New Balykchy равняется 1000 жителей. 
Напишите программу, которая определяет разницу в числе жителей между двумя городами. */

let bishkekSity = 2000000;
let newBalykchy = 1000;

let difference = bishkekSity - newBalykchy;
console.log(difference);

/* 2. В углу прямоугольного двора размером 50х30 стоит прямоугольный дом размером 20х10. 
Подсчитать площадь дома, свободную площадь двора и длину забора. 
Примечание: в углу, где дом, забора нет.  */

let yard = 50 * 30; // Площадь двора 1500
let house = 20 * 10; // Площадь дома 200

let fenceLength = yard * 2; // Длина забора
console.log(fenceLength);

let freeArea = yard - house;
console.log(freeArea);

/* 3. В браузере запрашиваются два числа. Если первое больше второго, 
то вычислить их сумму, иначе - произведение. 
После этого компьютер должен вывести **`alert ЗАДАЧА РЕШЕНА` */

let a = prompt("Введите первое число: ");
let b = prompt("Введите второе число: ");

if (a > b) {
  alert("Задач решена! " + a + b);
} else {
  alert("Задач решена! " + a * b);
}

/* 4. Дракон каждый год отращивает по три головы, но после того, 
как ему исполнится 100 лет - только по две. 
Сколь-ко голов и глаз у дракона, которому N лет? */

/* 5. Пусть браузер, узнав возраст человека, дальнейшую беседу ведет по двум вариантам. 
Если возраст больше 17, то компьютер должен задать вопрос: "В каком институте ты учишься?" 
и получив ответ, глубокомысленно заметить "Хороший институт". 
Если же возраст меньше или равен 17, то соответственно - "В какой школе ты учишься?" 
и "Неплохая школа". После этого, каков бы ни был вариант, компьютер должен попрощаться: 
"До следующей встречи!".  */

let person = prompt("Введите свой возраст: ");

if (person >= 17) {
  prompt("В каком институте ты учишься?");
  prompt("Хороший институт");
} else if (person >= 7 && person <= 17) {
  prompt("В какой школе ты учишься?");
  prompt("Неплохая школа");
} else {
  prompt("До следующей встречи!");
}
