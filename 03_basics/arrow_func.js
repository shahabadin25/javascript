const user={
    username:"adin",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()


//console.log(this); //this generates an empty object in the terminal here but generates  window object in the browser


// function chai()
// {   
//     let usename="adin shahab";
//     console.log(this.username);
//     //inside a function thi keyword doesnt work ,this only works with objects
// }
// chai();


// const chai=function(){
//     let username="hitesh"
//     console.log(this.username);
// }

//in ES6
// const chai=()=>{
//     let username="hitesh"
//     console.log(this.username);
// }

//chai();
// const addTwo=(num1,num2)=>{
//     return num1+num2; //explicit  return
// }
//const addTwo=(num1,num2)=>num1+num2; //implicit return

//const addTwo1=(num1,num2)=>(num1+num2); //implicit return
const addTwo1=(num1,num2)=>({username:"adin"});
//to return an object it must be wrapped in parenthesis


console.log(addTwo1(3,4));

