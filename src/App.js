import { useState } from "react"

function App() {
  const createDigits = () => {
    let digits = []
    for (let i = 1; i < 10; i++) {
      digits.push(<button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>)
    }
    return digits
  }

  const [result, setResult] = useState("")
  const [calc, setCalc] = useState("")

  const operators=["*","/",".","+","-"]

  const updateCalc=(value)=>{
    if((operators.includes(value) && calc==="") || (operators.includes(value) && operators.includes(calc.slice(-1)))){
      return
    }
    setCalc(calc+value)

    if(!operators.includes(value)){
      setResult(eval(calc+value))
    }
  }
  const calculate=()=>{
    setCalc(eval(calc).toString())
  }

  const correction=()=>{
    if(calc===""){
      return
    }
    setCalc(calc.slice(0,-1))
  }
  const reset=()=>{
    setCalc("")
    setResult("")
  }

  return (
    <div className="App">
      <div className="calculator">

        <h1>Calculator</h1>
        <div className="display">
          <span>{result? <span>({result}){" "}</span> : ""}</span>
          <p>{calc || "0"}</p>
        </div>

        <div className="operators">
          <button onClick={()=>updateCalc("*")}>*</button>
          <button  onClick={()=>updateCalc("/")} >/</button>
          <button  onClick={()=>updateCalc("+")}>+</button>
          <button  onClick={()=>updateCalc("-")}>-</button>
          <button onClick={()=>correction()}>correct</button>
          <button onClick={()=>reset()} >C</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={()=>updateCalc(0)}>0</button>
          <button  onClick={()=>updateCalc(".")}>.</button>

          <button onClick={()=>calculate()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
