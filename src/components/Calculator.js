import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result,  setResult] = useState(0);
  const [activeOperation, setActiveOperation] = useState(null);

  const handleNum1Change = (e) => {
    setNum1(parseFloat(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(parseFloat(e.target.value));
  };

  const handleAdd = () => {
    setResult(num1 + num2);
    setActiveOperation('add');
  };

  const handleSubtract = () => {
    setResult(num1 - num2);
    setActiveOperation('subtract');
  };

  const handleMultiply = () => {
    setResult(num1 * num2);
    setActiveOperation('multiply');
  };

  const handleDivide = () => {
    if (num2 === 0) {
      setResult('Error: Division by zero');
    } else {
      setResult(num1 / num2);
    }
    setActiveOperation('divide');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Simple Calculator</h1>
      <div className="bg-white rounded-lg shadow-md p-6 w-64">
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          className="border border-gray-400 p-2 mb-2 w-full"
        />
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          className="border border-gray-400 p-2 mb-4 w-full"
        />
        <div className="flex justify-around">
          <button
            onClick={handleAdd}
            className={`${
              activeOperation === 'add' ? 'border-black border-4' : 'border-gray-400'
            } bg-blue-500 text-white p-2 w-1/4 hover:bg-blue-600 transition duration-300 ease-in-out border border-solid`}
          >
            Add
          </button>
          <button
            onClick={handleSubtract}
            className={`${
              activeOperation === 'subtract' ? 'border-black border-4' : 'border-gray-400'
            } bg-red-500 text-white p-2 w-1/4 hover:bg-red-600 transition duration-300 ease-in-out border border-solid`}
          >
            Subtract
          </button>
          <button
            onClick={handleMultiply}
            className={`${
              activeOperation === 'multiply' ? 'border-black border-4' : 'border-gray-400'
            } bg-green-500 text-white p-2 w-1/4 hover:bg-green-600 transition duration-300 ease-in-out border border-solid`}
          >
            Multiply
          </button>
          <button
            onClick={handleDivide}
            className={`${
              activeOperation === 'divide' ? 'border-black border-4' : 'border-gray-400'
            } bg-yellow-500 text-white p-2 w-1/4 hover:bg-yellow-600 transition duration-300 ease-in-out border border-solid`}
          >
            Divide
          </button>
        </div>
        <p className="text-xl font-bold mt-4">Result: {result}</p>
      </div>
    </div>
  );
}

export default Calculator;