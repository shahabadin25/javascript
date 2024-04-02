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
console.log("A ",myArr);
const myn1=myArr.slice(1,3);//slice displays on those values which are present in the given range of index
console.log(myn1);
console.log("B ",myArr);
//in splice original array is manipulated,in original array it removes the slice portion
const myn2=myArr.splice(1,3);
console.log("C ",myArr);
console.log(myn2);

