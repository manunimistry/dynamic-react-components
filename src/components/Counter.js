import React from 'react'

const Counter = () => {
    const [count,setCount] = React.useState(0)
    function add() 
    {
        setCount(count+1)
    }
    function subt() 
    {
        setCount(count-1)
    }
  return (
    <div>
    <h1>Counter</h1>
    <div className='form-button'>
      
      <button onClick={add} className='counter-button'>+</button>
      <button className='counter-button'>{count}</button>
      <button onClick={subt} className='counter-button'>-</button>
      
      
    </div>
    </div>
  )
}

export default Counter
