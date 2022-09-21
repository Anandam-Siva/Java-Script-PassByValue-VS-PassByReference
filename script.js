//////Pass BY Value///////

let x = 10;

function test(num) {
    num += 1;
    console.log(" the result inside the function", num);
}

console.log(x);
test(x)
console.log("after calling a function the x value is", x);


/////Pass By Reference///////////

let siva = {
    "name": "siva",
    "age": 30

}

function test1(address) {
    address.age = 25;
    console.log(" inside the function siva age is", address.age)
}
console.log(siva);
test1(siva);
console.log("after calling a function the siva age is ", siva.age);// here the age of the siva was changed to 25 years because the object and arrays take the value pass by reference


