import React, { useEffect } from 'react';

export default function Calculator() {
  const handleAdd = () => {
    const result = Number(document.getElementById('input1').value) + Number(document.getElementById('input2').value);
    document.getElementById('result').value = result;
  };

  const handleSubtract = () => {
    const result = Number(document.getElementById('input1').value) - Number(document.getElementById('input2').value);
    document.getElementById('result').value = result;
  };

  const handleMultiply = () => {
    const result = Number(document.getElementById('input1').value) * Number(document.getElementById('input2').value);
    document.getElementById('result').value = result;
  };

  const handleDivide = () => {
    const result = Number(document.getElementById('input1').value) / Number(document.getElementById('input2').value);
    document.getElementById('result').value = result;
  };

  const handleModulus = () => {
    const result = Number(document.getElementById('input1').value) % Number(document.getElementById('input2').value);
    document.getElementById('result').value = result;
  };

  const handlePower = () => {
    const result = Number(document.getElementById('input1').value) ** Number(document.getElementById('input2').value);
    document.getElementById('result').value = result;
  };

  const handleRoot = () => {
    const result = Number(document.getElementById('input1').value) ** (1 / Number(document.getElementById('input2').value));
    document.getElementById('result').value = result;
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <label htmlFor="input1">Number 1:</label>
        <input type="text" id="input1" />
        <label htmlFor="input2">Number 2:</label>
        <input type="text" id="input2" />
        <button type="button" onClick={handleAdd}>+</button>
        <button type="button" onClick={handleSubtract}>-</button>
        <button type="button" onClick={handleMultiply}>*</button>
        <button type="button" onClick={handleDivide}>/</button>
        <button type="button" onClick={handleModulus}>%</button>
        <button type="button" onClick={handlePower}>^</button>
        <button type="button" onClick={handleRoot}>√</button>
      </div>
      <div>
        <h2>Result</h2>
        <input type="text" id="result" />
      </div>
    </div>
  );
}
