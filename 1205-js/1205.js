// /* 1. add 함수 생성 */
// let add=(x,y)=>x+y;
// let substract=function(a,b){
//     return a-b;
// }

// /* 2. 함수 호출한 결과 웹 화면에 출력 */
// document.write(substract(3,2));
// document.write('<br>');
// document.write(add(2,2));
// document.write('<br>');
// document.write('Hello Elice');
// console.log(false == 0); // true

var a = 1;      
var b = a;          

console.log(a, b); // 1 1
console.log(a === b); // true(a, b 모두 number형 타입에다 1이라는 같은 값을 가지고 있다.)

b = 10;                                                                         
console.log(a, b); // 1 10  
console.log(a === b); // 숫자형 변수 b에 10을 넣었지만 똑같은 숫자형 변수인 a의 값은 변하지 않는다. 