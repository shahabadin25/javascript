//promises are used to handle async part of code
const cart=["shoes","pants","kurta"]

createOrder(cart); //orderID

proceedToPayment(orderId);

//callback function

createOrder(function(){
    proceedToPayment(orderId);
})

//api

createorder(cart,function(){
    proceedToPayment(orderId);
});
 //promise -empty object with some data value in it

 const promise=createOrder(cart);