//create an object with key-value pair (each value type is commented individuallly)
var javascript = {
    name: "Javascript", //string
    libraries: ["React", "Angular", "Vue"], //array 
    printLibraries: function() {
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    }, //function
};
//function call 
javascript.printLibraries();