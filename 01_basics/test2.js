// let score=null;
//  console.log(typeof(score));

//  let valueInNumber=Number(score);
//  console.log(typeof valueInNumber);
//  console.log(valueInNumber);


 //number is converted to number
 //number + string is converted in NaN
 //true=>1
 
//  let isLoggedIn=1;
//  let booleanIsLoggedIn=Boolean(isLoggedIn);
//  console.log(booleanIsLoggedIn);

 //1 =>true
 //""=> false
 //"hitesh=>true"

//  let someNumber=33;
//  let stringNumber=String(someNumber);
//  console.log(typeof stringNumber);

 //****************operations********** */
let value=3;
let negValue= -value;
// console.log(negValue);

// console.log(2**3);//2^3;

let str1="hello";
let str2="adin";
let str3=str1+str2;
//console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");



///*************************** */
//memory is of 2 types
//stack -- primitive(copy of value)
//heap --non primitive(reference of the value)
//in heap changes are done in original value
// let myYoutubeName="adin shahab";//primitive 

// let anotherName=myYoutubeName;
// anotherName="chaiaurCode";
// console.log(myYoutubeName);
// console.log(anotherName);

let user={
    email:"user@gmail.com",
    upi:"123"
}
let userTwo=user;
userTwo.email="adin@gmail.com";
console.log(user.email);
console.log(userTwo.email);



