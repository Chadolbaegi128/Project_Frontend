function myFunc(){
    let a = 10;
    let b = 20;
    function add(first, second){
        return first + second;
    }
    return add(a, b);
}

console.log(myFunc());
