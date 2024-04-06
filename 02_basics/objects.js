//objects can be declared by 2 ways -literal and constructor
//constructor declare objects as singleton that is only single 
//instance is created
//literals declare objects as non singleton

// const  mySym1=Symbol("key1");// symbol is a datatype in JS
// const  mySym2=Symbol("key2");// symbol is a datatype in JS

// const JsUser={
//     name: "Hitesh",
//     "full name":"adin shahab",
//     age:18,
//     mySym1:"mykey1",//this will make mySym a string
//     [mySym2]:"mykey2",//this is the correct syntax to access it as symbol
//     email:"abc@gmail.com",
//     isLoggedIn:false,
//     lastLogindays:["Monday","Saturday"]
// }//object literal

// // console.log(JsUser.email);
// // console.log(JsUser["email"]);
// // console.log(JsUser["full name"]);
// // //full name cannot be declared using . notation it has tp declared using string notation
// // console.log(typeof JsUser.mySym1);
// // //if the symbol object in accesed in this way 
// // //then it is accessed as string rather than symbol 
// // console.log(typeof JsUser[mySym2]);//this will make it symbol


// JsUser.email="adin@email.com";//changing the value of the object
// // Object.freeze(JsUser);//changes in this object will not be propagated showing no error
// //console.log(JsUser);


// JsUser.greetings=function(){
//     console.log("Hello Js User");
// }


// JsUser.greetings2=function(){
//     console.log(`Hello Js User, ${this.name}`);
// }

// console.log(JsUser.greetings());
// console.log(JsUser.greetings);//it will be reference to the ()
// console.log(JsUser.greetings2());


//*****************OBJECTS part 2*********************************************** */
const tinderUser1=new Object() //singleton object
console.log(tinderUser1);

const tinderUser={};//non singleton object
tinderUser.id="123abc";
tinderUser.name="sammy";
tinderUser.ifLoggedIn=false;

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"adin",
            lastname:"shahab"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname);
//? infront of full name is given so that there is a check if there exists a full name or not 
//console.log(tinderUser1);

const obj1={1:"a", 2:"b"};
const obj2={3:"a", 4:"b"};

//const obj3={obj1,obj2};
const obj3=Object.assign(obj1,obj2);//joins two objects
//obj1 is target and obj2 is the source
const obj4=Object.assign({},obj1,obj2);//joins two objects
//{} is target and obj1 and obj2 is the source
//both does the same 

const obj6={...obj1,...obj2}//using spread operator 
console.log(obj3);
// const users={
    
//         {...
        
//         },
//         {...},
//         {
//             ...
//         }
    
// }
// users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//enquires whether the object has this property or not







//****************OBJECTS part 3****************************** */

// const course={
//     coursename:"js in hindi",
//     price:"999",
//     courseInstructor:"hitesh"
// }
// //course.courseInstructor


// //datatype {what value to extract } =from where to extract
// const {courseInstructor :instructor}=course;
// //we can also change the name of the varible of to something 
// //else like course instructor can be accessed using instructor
// //this is known as destructuring.
// console.log(courseInstructor);

//API are just values from backend which does not 
// {
//     "name":"adin",
//    " coursename":"js in hindi",
//     "price":"free"
// }//api

//apis can be presented in array format
// {
//     {},
//     {},
//     {}
// }