// src/Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (num) => {
    if (display === '0' && num !== '.') {
      setDisplay(num.toString());
    } else {
      setDisplay(display + num.toString());
    }
    setCurrentValue(currentValue + num.toString());
  };

  const handleOperatorClick = (op) => {
    if (operator === '') {
      setCurrentValue(display);
      setOperator(op);
      setDisplay('0');
    } else {
      alert('Esta calculadora suporta apenas uma operação por vez.');
    }
  };

  const handleEqualClick = () => {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(currentValue) + parseFloat(display);
        break;
      case '-':
        result = parseFloat(currentValue) - parseFloat(display);
        break;
      case '*':
        result = parseFloat(currentValue) * parseFloat(display);
        break;
      case '/':
        result = parseFloat(currentValue) / parseFloat(display);
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setCurrentValue('');
    setOperator('');
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentValue('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;