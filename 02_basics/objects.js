//objects can be declared by 2 ways -literal and constructor
//constructor declare objects as singleton that is only single 
//instance is created
//literals declare objects as non singleton

const  mySym1=Symbol("key1");// symbol is a datatype in JS
const  mySym2=Symbol("key2");// symbol is a datatype in JS

const JsUser={
    name: "Hitesh",
    "full name":"adin shahab",
    age:18,
    mySym1:"mykey1",//this will make mySym a string
    [mySym2]:"mykey2",//this is the correct syntax to access it as symbol
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLogindays:["Monday","Saturday"]
}//object literal

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// //full name cannot be declared using . notation it has tp declared using string notation
// console.log(typeof JsUser.mySym1);
// //if the symbol object in accesed in this way 
// //then it is accessed as string rather than symbol 
// console.log(typeof JsUser[mySym2]);//this will make it symbol


JsUser.email="adin@email.com";//changing the value of the object
// Object.freeze(JsUser);//changes in this object will not be propagated showing no error
//console.log(JsUser);


JsUser.greetings=function(){
    console.log("Hello Js User");
}


JsUser.greetings2=function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetings);//it will be reference to the ()
console.log(JsUser.greetings2());
