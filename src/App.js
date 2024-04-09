import { useState } from 'react';
import './App.css';
import {evaluate} from 'mathjs';


function App() {
  const [result,setResult] = useState("");

  const handleClick = (value) => {
    if(value==="="){
      try{
        setResult(evaluate (result))
      }catch (error) {
        setResult("Error");
      }
    }else if (value=== "c"){
      setResult("");
    } else if (value=== "USD-INR"){
      setResult(prevResult => prevResult + "*84")
    }else if (value === "INR-USD"){
      setResult(prevResult => prevResult + "/84")
    }else{
      setResult(result+value)
    }
  }

  return (
    <div className="App">
      <div className='calculator'>
        <input type='text' value={result} readOnly/>
        <div className='buttons'>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("c")}>c</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("=")}>=</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("USD-INR")}>$ to INR</button>
          <button onClick={() => handleClick("INR-USD")}>INR to $</button>

        </div>

      </div>
   
    </div>
  );
}

export default App;


// eval

// const handleClick = (value) => {
//   if(value==="="){
//     try{
//       setResult(eval(result))
//     }catch (error) {
//       setResult("Error");
//     }
//   }else if (value=== "c"){
//     setResult("");
//   }else{
//     setResult(result+value)
//   }
// }