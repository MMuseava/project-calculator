import React from 'react'
import "./customButton.style.css"

const CustomButton = ({onClickHandler, clear, calculator,backspace}) => {
  return (
      <div className="button">
        <button name="(" onClick={onClickHandler}>(</button>
        <button name="CE" onClick={clear}>C</button>
        <button name=")" onClick={onClickHandler}>)</button>
        <button name="C" onClick={backspace}>CE</button>


        <button name="1" onClick={onClickHandler}>1</button>
        <button name="2" onClick={onClickHandler}>2</button>
        <button name="3" onClick={onClickHandler}>3</button>
        <button name="+" onClick={onClickHandler}>+</button>


        <button name="4" onClick={onClickHandler}>4</button>
        <button name="5" onClick={onClickHandler}>5</button>
        <button name="6" onClick={onClickHandler}>6</button>
        <button name="-" onClick={onClickHandler}>-</button>

        <button name="7" onClick={onClickHandler}>7</button>
        <button name="8" onClick={onClickHandler}>8</button>
        <button name="9" onClick={onClickHandler}>9</button>
        <button name="*" onClick={onClickHandler}>x</button>


        <button name="." onClick={onClickHandler}>.</button>
        <button name="0" onClick={onClickHandler}>0</button>
        <button name="=" onClick={calculator}>=</button>
        <button name="/" onClick={onClickHandler}>÷</button><br/>
      </div>
  )
}

export default CustomButton