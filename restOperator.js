//when we do not know number of parameters,
//arguments return an object with that many number of parameters called in function

/*function myFunc() {
    console.log(arguments);
}*/
//rest operators return an array 
//...params should be the last parameter in function 
function myFunc(a, ...params) {
    console.log(a);
    console.log(params);
}
myFunc(5, 6, 7, 8, 9);