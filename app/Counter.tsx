

"use client"

import React,{useState} from 'react'


function Counter() {
const [add,setAdd] = useState(0)

    function inc(){
        setAdd ( add + 1)
    }
    function dec(){
        setAdd( add - 1)
    }
  return (
    <div>
      <button onClick={inc}>increament</button>
      <p>{add}</p>
      <button onClick={dec}>decrement</button>
    </div>
  )
}

export default Counter
