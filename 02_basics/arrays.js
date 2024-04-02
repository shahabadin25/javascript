//array

const myArr=[0,2,3,4,5];

//arrays are objects that store multiple data having same or different datatype 
// arrays are in js and resizable

console.log(myArr[0]);

//arrays cannot be accessed using string 
//console.log(myArr["one"]); this is wrong 

const myHeros=["shaktiman","naagraj"];
const myArr2=new Array(1,2,3,4);

//array methods

// myArr.push(6);
// myArr.pop(6);
// myArr.unshift(9);//adds data at the beginning of the array
// myArr.shift();//removes the 1st element
// console.log(myArr.includes(9));//checks in the array whether data exits or not 
// console.log(myArr.indexOf(2));//gives the value present at index 2
// const newArr=myArr.join(); //binds the array and converts them into string
// console.log(newArr);
// console.log(myArr);

//slice and splice
//in slice original array is not manipulated
// console.log("A ",myArr);
// const myn1=myArr.slice(1,3);//slice displays on those values which are present in the given range of index
// console.log(myn1);
// console.log("B ",myArr);
// //in splice original array is manipulated,in original array it removes the slice portion
// const myn2=myArr.splice(1,3);
// console.log("C ",myArr);
// console.log(myn2);

const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

//so access flash 
//console.log(marvel_heros[3][1]);


//concat merges 2 arrays and returns a new arrar
const allHeros=marvel_heros.concat(dc_heros);
console.log(allHeros);

//spread operator is better to use
const all_new_heros=[...marvel_heros,...dc_heros];//this is called spread operator
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity); //flat() merges all the arrarys into arrays into  a single array
//Infinity is the depth upto to which u want to combine the arrays into arrays into a single array ... it can be a number too

console.log(real_another_array);



console.log(Array.isArray("Adin"));//isArray() checks whether it is an array or not
console.log(Array.from("Adin"));//converts into an array
console.log(Array.from({name: "adin"}));


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//returns e new array from the set of elements.
