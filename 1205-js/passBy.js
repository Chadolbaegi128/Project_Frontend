var foo={
    val:10
};

var boo = foo;
console.log(foo.val, boo.val);
console.log(foo === boo);

boo.val = 20;
console.log(foo.val, boo.val);
console.log(foo === boo);

var a = 1;
var b = a;

console.log(a, b);
console.log(a === b);

a = 10;
console.log(a, b);
console.log(a === b);