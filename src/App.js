import React, { useState, useEffect, useRef, useCallback } from 'react'
import { render } from 'react-dom'
import { Slider } from 'react-soft-slider'
import Dat from './dat'
import { defaultState, slides, draggedSpringOptions, trailingSpringOptions } from './data'


import './App.css';




const slideList = ['red', 'blue', 'yellow', 'orange']
const style = { width: 1000, height: '100%', margin: '0 10px' }


function App() {
  const [index, setIndex] = React.useState(0)

  return (
    // <Slider index={index} onIndexChange={setIndex} style={{ width: 400, height: 200 }}>
    //   {slideList.map((color, i) => (
    //     <div key={i} style={{ ...style, background: color }} />
    //   ))}
    // </Slider>
    <> </>
  )
}

export default App;
