import "./App.css";
import { useState } from "react";
//let counter = 5;

function App() {
  let [counter, setCounter] = useState(15);

  const reduceValue = () => {
    if (counter - 1 >= 0) {
      setCounter((counter -= 1));
      console.log("value Subtracted", counter);
    } else {
      alert("The value cannot be reduced more");
    }
  };

  const addValue = () => {
    if (counter + 1 <= 20) {
      setCounter((counter += 1));
      console.log("value added", counter);
    } else {
      alert("The value cvannot be increrased more");
    }
  };
  return (
    <>
      <h1>Hooks ke project </h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Increase Value{counter}</button>
      <br />
      <button onClick={reduceValue}>Decrease Value{counter}</button>
    </>
  );
}

export default App;
