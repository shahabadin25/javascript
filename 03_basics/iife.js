//Immediately Invoked Function Expression(IIFE)

//it is required for users to create a function and immediately excute it
//IIFE is used to remove pollution from the global scope's variables or declarations
(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();//it is very important to put a semicolon here becoz the iife has invoked the function but doesnt know where to end it semicolon will signify the end of the invoking function

( (name)=>{
    //unamed iife with parameter passing
    console.log(`DB CONNECTED TWO ${name}`);
} )('joe jonas')