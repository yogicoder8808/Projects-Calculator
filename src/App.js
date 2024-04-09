import { useState } from 'react';
import './App.css';
import {evaluate} from 'mathjs';


function App() {
  const [result,setResult] = useState("");
  const [exchangeRate, setExchangeRate] = useState(null);

  const fetchExchangeRate = async () => {
    try{
      const response = await fetch ('https://exchange-rates.abstractapi.com/v1/live/?api_key=3cf3ef34653b4b77ba73a5067bef9f76&base=USD&target=INR');
      const data = await response.json();
      console.log(data)
      const rate = data.exchange_rates.INR;
      setExchangeRate(rate)
      const response1 = await fetch ('https://exchange-rates.abstractapi.com/v1/live/?api_key=3cf3ef34653b4b77ba73a5067bef9f76&base=INR&target=USD');
      const data1 = await response1.json();
      console.log(data1)
      const rate1 = data1.exchange_rates.USD;
      setExchangeRate(rate1)
    }catch(error){
      console.error('Error:', error)
    }
  }

  const handleClick = async(value) => {
    // if(value==="="){
    //     setResult(evaluate (result))
    //   }
    if (value === "="){
      if(result === "" || parseFloat(result)===0){
        setResult("")
      } else {
        try {
          setResult (evaluate (result))
        }catch (error){
          setResult("Error", error)
        }
      }
      
    }else if (value=== "c"){
        setResult("");
      }else if (value=== "USD-INR"){
        if(!exchangeRate) await fetchExchangeRate();
        setResult(prevResult => prevResult + `*${exchangeRate}`)
    }else if (value === "INR-USD"){
      if(!exchangeRate) await fetchExchangeRate();
      setResult(prevResult => prevResult + `/${exchangeRate}`)
    }else{
      setResult(result + value)
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


