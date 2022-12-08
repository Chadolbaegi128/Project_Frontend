var foo = {
    val : 10
};

var bar = {
    val : 10
};

console.log(foo.val, bar.val); // 서로 다른 객체라서 값이 같더라도 타입이 다를 수 밖에 없다.
console.log(foo === bar);

var baz = bar;
baz.val = 20;
console.log(foo.val, baz.val, bar.val);
console.log(foo === baz);

console.log(1+3); // 4
console.log(1+"3"); // 13
console.log("1"+"3"); // 13

console.log(typeof(1+3)); // 데이터 타입: number        
console.log(typeof(1+"3")); // 데이터 타입: string
console.log(typeof("1"+"3")); // 데이터 타입: string

console.log(1+1-3); // -1 
console.log(1+1-"3"); // -1
console.log("1"+"1"-"3"); // 8

console.log(typeof(1-3)); // 데이터 타입: number
console.log(typeof(1-"3")); // 데이터 타입: number
console.log(typeof("1"-"3")); // 데이터 타입: number


