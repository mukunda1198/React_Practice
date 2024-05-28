// import { useState } from 'react';
// const data = {
//     name: 'Tom',
//     age: 35,
//     address: {
//         country: 'United States',
//         state: 'Texas',
//         postalCode: 73301
//     }
// }
// export default function ReactBatching() {
//   const [count, setCount] = useState(0);
//   const [user, setUser] = useState(data)
//   const [message, setMessage] = useState('Batching');
//   console.log('Application re-rendered');
//   const handleAsyncFetch = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1"
//       ).then(() => {
//         // trigger only one(1) re-render due to
//         console.log("Second")
//         setCount(count +1);
//         setMessage('Automatic batching');
//         console.log("first")
//       });
//   }
//   const handleObjcet = () => {

//     const updatedAddress = { ...user.address,
//         postalCode: 75015 };
//       const updatedUser = { ...user, address:
//         updatedAddress };
//       setUser(updatedUser);
// console.log("data",user)
//   }
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleAsyncFetch}>
//         Click Me!</button>
//         <button onClick={handleObjcet}>

//         Click Me! to update object</button>
//         {user.address?.postalCode }
//     </>
//   )
// }

import { useState, useMemo } from "react";
function factorial1(number) {
    console.log("first")
  if (number <= 0) {
    return "Number should be positive value.";
  } else if (number === 1) {
    return 1;
  } else {
    return number * factorial1(number - 1);
  }
}
export default function ReactBatching() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
  const factorial = useMemo(() => factorial1(number), [number]);
  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Factorial: {factorial}</h2>
      <input
        type="number"
        value={number}
        onClick={() => setNumber(number + 1)}
      />
    </>
  );
}