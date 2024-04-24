//if statement

// const isUserLoggedIn=true;
// if(condition){

// }
//=== checks value as well as datatype

// const score=200

// if(score>100)
// {
//     let power="fly";//scope of power is in the if block only
//     console.log(`User power:${power}`);
// }

// console.log(`User power:${power}`); //power is out of scope


// const uderLoggedIn=true;
// const debitCard=true;

// if(userLoggin && debitCard && 2==3){
//     console.log("Allow to buy course");
// }



//switch case
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//truthy and fasly values
const userEmail="hi@ai"
if(userEmail)// it is a truthy value..becoz the value is present..and is assumed to be true
{
    console.log("Got user email");
}
else
{
    console.log("Dont have user email");
}

//false ,0 .-0 ,BigInt 0n, "",null,undefined,NaN are called falsy value

//truthy value "0","false"," ",[],{},function(){},

// if(userEmail.length===0)
// {
//     console.log()
// }

//check if the object is empty or not

const emptyObj={}
if(Object.keys(emptyObj).length===0)
{
    console.log("object is empty");
}

//Nullish Coalescing Operator (??): null undefined

// let val1;
// // val1=5??10
// // var1=null?? 10
// var1=undefined??15



console.log(val1);