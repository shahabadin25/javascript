//const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// }) //forEach loop doesnt return any values
// console.log(values);


//const myNums=[1,2,3,4,5,6,7,8,9,10];
// const newNums=myNums.filter((num)=> num>4)
// //filter returns values
// //if we open a scope that is {} then to return a value we must write the return keyword
// console.log(newNums);


// const newNums=[];
// myNums.forEach((nums)=>{
//     if(nums>4){
//         newNums.push(nums);
//     }
// })

// console.log(newNums);

// const mynumbers=[1,2,3,4,5,6,7,8,9,10];

// //const newNums=mynumbers.map((num)=>num+10)
// //map() returns values automatically

// //chaining
// const newNums=mynumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40);
// console.log(newNums);

//reduce

const myNums=[1,2,3];
// const myTotal=myNums.reduce(function(accumulator,currentValue){
//     console.log(`accumulator:${accumulator} and currentValue=${currentValue}`);
//     return accumulator+currentValue;
// },0)

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    }
]


const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);