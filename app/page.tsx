import Image from 'next/image'
import { Input } from 'postcss';
'use client'
import { use, useState } from 'react'

export default function Home() {

  return (
    <div>
      <h1 className='text-center'>Laskin</h1>
      <div>
        <Laskin />
      </div>
    </div>
  )
}

function Laskin(){
  const [input, setInput] = useState(0);
  const [operator, setOperator] = useState("");
  const [history, setHistory] = useState(0);
  
  function handleNumberClick(value: any){
    setInput(value);
  }

  function handleOperatorClick(value: any){
    setOperator(value);
    setHistory(input);
    setInput(0);
  }

  function handleCalculateClick(){
    const num1 = history;
    const num2 = input;

    let result = 0;

    if(operator === "+"){
      result = num1+ num2;
    } else if (operator === "-"){
      result = num1 - num2;
    }

    setInput(result);

  }

  function clearAll(){
    setHistory(0);
    setInput(0);
    setOperator("");
  }

  return(
    <div>
      <div className='flex justify-center'>
        <div className='h-96 w-1/4 bg-slate-500 p-2 rounded-lg'>
          <div className=''>
            <input readOnly value={input}></input>
          </div>
          <div className='flex gap-3'>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleNumberClick(1)}>1</button>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleNumberClick(2)}>2</button>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleNumberClick(3)}>3</button>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleOperatorClick("+")}>+</button>
          </div>
          <div className='flex gap-3'>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleNumberClick(4)}>4</button>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleNumberClick(5)}>5</button>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleNumberClick(6)}>6</button>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleOperatorClick("-")}>-</button>
          </div>
          <div className='flex gap-3'>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleNumberClick(7)}>7</button>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleNumberClick(8)}>8</button>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleNumberClick(9)}>9</button>
            <button className='p-1 border rounded-full bg-slate-400' onClick={() => handleNumberClick(0)}>0</button>
          </div>
          <div className='flex gap-3'>
            <button className='p-1 border rounded-full bg-slate-400' onClick={clearAll}>C</button>
            <button className='p-1 border rounded-full bg-slate-400' onClick={handleCalculateClick}> =</button>
          </div>
        </div>

      </div>
    </div>
  )
}