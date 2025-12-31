import React, { useState } from 'react'
import Login from './components/Login'
import TodDo from './components/TodDo'

const App = () => {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  const [color, setColor] = useState('white')
  const [bgColor, setBgColor] = useState('yellow')

  let num = 4;
  // let count = 0;
  const increaseCount = (num) => {
    setCount(count + num)
    setColor('green')
    console.log(" ~ :7 ~ increaseCount ~ count:", count)
  }
  const decreaseCount = (num) => {
    setCount(count - num);
    setColor('red')
    console.log(" ~ :11 ~ decreaseCount ~ count:", count)
  }
  const onInputChange = (e) => {
    setBgColor(e.target.value);
  }
  return (
    <>
      {/* {show &&
        <div style={{ backgroundColor: bgColor, padding: '5px', margin: '15px' }}>
          <button onClick={() => increaseCount(num)} >+</button>
          <h1 style={{ color: color }}>
            {count}
          </h1>
          <button
            disabled={count == 0 || count - num < 0}
            onClick={() => decreaseCount(num)}>-</button>
        </div>
      }
      <button
        onClick={() => setShow(!show)}
        type="button">
        {show ? 'Hide' : 'Show'}
      </button>
      <input
        onChange={(e) => {
          setBgColor(e.target.value);
        }}
        type='text'
        placeholder='Enter valid color'></input> */}
        {/* <Login /> */}
        <TodDo />
    </>
  )
}

export default App