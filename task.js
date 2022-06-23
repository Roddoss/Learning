/*var yes = 'Да';
var isbrother = prompt('Есть ли брат?') === yes;
var brothername = isbrother ? prompt('Как его зовут?') : alert('Жаль');
var iscousin = brothername ? alert('Привет, ' + brothername) : prompt('А есть двоюродные?') === yes;
var cousinname = iscousin ? prompt('Как его зовут?') : iscousin !== undefined && alert('Очень жаль')
cousinname && alert('Привет, '+ cousinname)*/

/*let years = +prompt('Сколько Вам лет?')
let LastNumber = (years % 10)
let isTeenager = (years >= 11 && years <= 14)
if (isTeenager) {
 alert('Отлично, тебе '+ years +' лет.')
} else {
switch (LastNumber) {
case 1:
 alert('Отлично, тебе '+ years +' год.');
 break;
case 2:
case 3:
case 4:
 alert('Отлично, тебе ' + years + ' года.');
 break;
default: alert('Отлично, тебе '+ years +' лет.');
} 
}*/
 
/*let years = +prompt('Сколько Вам лет?')
let LastNumber = (years % 10)
let isTeenager
isTeenager = (years >= 11 && years <= 14)
 if (LastNumber === 1 && isTeenager == false ) {
    alert('Отлично, тебе '+ years +' год.');
 } else if  (2 <= LastNumber && LastNumber <= 4 && (isTeenager == false )) {
    alert('Отлично, тебе ' + years + ' года.');
 } else if (LastNumber >= 0 && years) {
    alert('Отлично, тебе '+ years + ' лет');
 } else {
    alert('Что-то пошло не по плану.');
 }*/

// let Number1 = +prompt('Введите первое число');
// let Number2 = +prompt('Введите второе число');
// let Number3 = +prompt('Введите третье число');
// if (Number1 >= Number2 && Number1>= Number3) {
//    alert(Number1);
// } else if (Number2 >= Number3) {
//    alert(Number2);
// } else { 
// alert(Number3);
//  }

let Number1 = +prompt('Введите первое число');
let Number2 = +prompt('Введите второе число');
let Operation = prompt('Выберите операцию: +,-,*,/');
if (Number1 === Number1 && Number2 === Number2) {
   if (Operation === "+") {
      alert(Number1 + Number2)
   } else if (Operation === "-") {
   alert(Number1 - Number2); 
   } else if (Operation === "*") {
   alert(Number1 * Number2) ;
   } else if (Operation === "/") {
   alert(Number1 / Number2);
   } else {
      alert('Что ты творишь....')
   } 
} else {
   alert('Что ты творишь....')
}


// let Number1 = +prompt('Введите первое число');
// let Number2 = +prompt('Введите второе число');
// let Operation = prompt('Выберите операцию: +,-,*,/');
// switch (Operation) {
//    case '+':
//       alert(Number1 + Number2);
//       break;
//    case '-':
//       alert(Number1 - Number2)
//       break;
//    case '*':
//       alert(Number1 * Number2)
//       break;
//    case '/':
//       alert(Number1 / Number2)
//       break;
// }