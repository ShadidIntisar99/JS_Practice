//form a nested object
const user = {
    name: 'Shadid',
    age: 22,
    education: {
        degree: "BSc"
    }
};

//var name = user["name"];

//destructuring 
/*const { name: title } = user;
console.log(title);*/

//nested call and also set a default value for object so that if there is no property,
//return undefined and not an error
const { education: { degree: x } = {} } = user;
console.log(x);