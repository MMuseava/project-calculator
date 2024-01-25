import React, { useState } from 'react'

import "./normCalculator.style.css"
import CustomButton from '../customButton/CustomButton'


const NormCalculator = () => {
   
    const [result, setresult] = useState("");
    
  const onClickHandler=(e)=>{
    setresult(result.concat(e.target.name));

  }
  const clear=()=>{
    setresult("")

  }
  const backspace=()=>{
    setresult(result.slice(0,result.length-1))

  }
  const calculate=()=>{
  try {
    setresult(eval(result).toString())
  } catch (error) {
  setresult("Error")
    
  }

  }

  return (
      <div className='container'>
          
          <div className='calculator'>
              <form action=''>
                  <div className='display'>
                     
                      <input type="text" value={result} />
                  </div>
              </form>
              <CustomButton
                  onClickHandler={onClickHandler}
                  clear={clear}
                  calculator={calculate}
                   backspace={backspace}
              />
                 
          </div>
    </div>
  )
}

export default NormCalculator