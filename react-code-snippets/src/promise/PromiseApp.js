import React from "react";
const promise1 = new Promise((res, rej) => {
    console.log("Start Async")
    if ("cart") {
     
      const orderId = "1426";
      if (orderId) {
        setTimeout(() => {
          console.log("=====Inside Async await");
          res(orderId);
        }, 5000);
      }
    }
  });
const PromiseApp = () => {
    const createOrder = (cart) => {
        console.log("Hiii===== Inside Function")
        const promise = new Promise((res, rej) => {
          if (cart) {
           
            const orderId = "1426";
            if (orderId) {
              setTimeout(() => {
                console.log("=====Inside setTimeout");
                res(orderId);
              }, 10000);
            }
          }
        });
        console.log("Hiii=====Inside promise")
        return promise
      };

const proccedPayment = (orderID) => {
return new Promise((res, rej) =>{
res("PAyment SucessFull")
})
}

const handlePromice = async() =>{
    console.log("inside Asynv")
    await promise1
    console.log("Await done")
  
}
handlePromice()
    
const promise = createOrder("cart Order")
promise.then((orderId) => {
return proccedPayment(orderId)
})
.then((paymentSTtaus) =>{
    console.log(paymentSTtaus)
})

 
  return <div>PromiseApp</div>;
};

export default PromiseApp;

// promise.all
// Promise.all Reslove all promise and then only return responce 
// if any other failed it will give failed

// promise.allSetteld
// this prmise waits to run all promise
// if nay one of the fail still run another promise
// and it will give err [err, res, err,]

//promise.race
// promise.race is which ever promise resolve first it will give res
// any of promise failed at this instatnt it will throw err
//

//promise.any
// this promise is success seeking promise
// when promise gets succes it will return responce

// Async Await
//  await is wait for code be to be excuted then only proccedPayment
//  promice is totally different it will excuate other lines and then last will excaute
// see example and consaole behviour in promise app
