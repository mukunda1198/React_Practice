import React from "react";

const Pollyfill = () => {
  //-----------------------------------------------------------------------------------
  // Map Pollyfill
  const arr = [9, 7, 8, 4, 5, 6, 1, 2, 3];
  Array.prototype.mymap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      temp.push(cb(this[i], i, this));
    }
    return temp;
  };

  let myMaparr = arr.mymap((value) => value * 2);
  console.log(myMaparr);
  //-----------------------------------------------------------------------------------
  //Filter Pollyfill
  Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        temp.push(this[i]);
      }
    }
    return temp;
  };
  let myFilter = arr.myFilter((value) => value !== 2);
  console.log(myFilter);
  //-----------------------------------------------------------------------------------
  //Reduce Polyfilll
  Array.prototype.myReduce = function (cb, intialValue) {
    let acc = intialValue;
    for (let i = 0; i < this.length; i++) {
      acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
  };

  let myReduce = arr.myReduce((acc, curr, index, arr) => {
    return acc * curr;
  }, 0);
  console.log(myReduce);
  //-----------------------------------------------------------------------------------
  // calll pollyfill
  let person = {
    name: "mukund",
    age: 34,
  };
  let data = function (text) {
    console.log(" My name is", this.name, "age is", this.age, "doing", text);
  };
  Function.prototype.myCall = function (context = {}, ...args) {
    context.fn = this;
    return context.fn(...args);
  };

  data.myCall(person, "I am Running");
  //-----------------------------------------------------------------------------------
  // apply pollyfill

  Function.prototype.myCall = function (context = {}, args = []) {
    context.fn = this;
    return context.fn(...args);
  };

  const applydata = function (yes, ok) {
    console.log(this.name, yes, ok);
  };

  applydata.myCall(person, ["pok", "ok"]);
  //-----------------------------------------------------------------------------------
  // Memo Pollyfill
  const memoize = function (fn) {
    const cache = {};
    return function () {
      //arg as key to store the result
      const KEY = JSON.stringify(arguments);
      //if the result is present for the given key return it
      if (cache[KEY]) {
        return cache[KEY];
      }

      //else compute and store the result and return the result
      const evaluatedValue = fn(...arguments);
      cache[KEY] = evaluatedValue;
      return evaluatedValue;
    };
  };

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return factorial(n - 1) * n;
  }
  const memoizedFactorial = memoize(factorial);
  let a = memoizedFactorial(100); // first call, slow
  console.log("=================================", a);
  //-----------------------------------------------------------------------------------

  //  Promise.ALL polyfill
  const userName = function (username) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(username);
      }, 1000);
    });
  };

  const likeVideo = function (likes) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(likes);
      }, 2000);
    });
  };
  const shareVideo = function (platform) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(platform);
      }, 1000);
    });
  };

  const myPromiseAll = function (taskList) {
    let results = [];
    let promisesCompleted = 0;
    return new Promise((res, rej) => {
      taskList.forEach((promises, index) => {
        promises
          .then((value) => {
            results[index] = value;
            promisesCompleted += 1;
            if (promisesCompleted === taskList.length) {
              res(results);
            }
          })
          .catch((err) => console.log("ERR:", err));
      });
    });
  };

  myPromiseAll([userName("mukund"), likeVideo("15"), shareVideo("whatspap")])
    .then((responce) => console.log(responce))
    .catch(console.error);
  //-----------------------------------------------------------------------------------

  return <div>Ppollyfill</div>;
};

export default Pollyfill;
