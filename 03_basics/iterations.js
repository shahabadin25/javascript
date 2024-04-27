// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//for of
//["","",""]
//[{},{},{}]

// const arr=[1,2,3,4,5];
// for (const num of arr) {
// //on what we are applying the for each loop 
// console.log(num);    
// }

// const greetings ="hello world";
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

//maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
//no duplicate values
// const map =new Map()
// map.set('IN',"India");
// map.set('USA',"United States of America");
// map.set('FR',"France");
// // //map.set('key,value);

// for(const key in map)
// {
//     console.log(key);
// }
//maps are not iterable so it cannot be iterated using for in loop

// console.log(map);

// for (const [key,value] of map) {
//     //[key,value] array destructuring 
//     console.log(key,':-',value);
// }

//for of is not iteratable over objects 


//for in
// const myObject={
//     js:'javascript',
//     cpp:'C++',
//     rb:"ruby",
//     swift:"swift by apple"
// }

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// const programming=["js","rb","py","java","cpp"];
// for(const key in programming)
// {
//     console.log(programming[key]);
// }


// const coding=["js","ruby","java","python","cpp"]

// coding.forEach(function (item){
//     //since this is a callback function it doesnt have a name
//     //since this function is running inside a array so value of array will be caught up as function parameter automatically

//     console.log(item);
// })


// coding.forEach( (item)=>{
    
//     console.log(item);
// } )



// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe); //passing function reference in forEach loop 

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding=[
    {
        language:"javascript",
        languageFileName:"ja"
    },
    {
        language:"java",
        languageFileName:"js"
    },
    {
        language:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.language);
})