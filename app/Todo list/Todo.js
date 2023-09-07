
"use client"
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Todo() {
    const [input , setInput] = useState("")
const [Add , setAdd] = useState([])

const [value , setValue]= useState()

function handleAdd(){
setAdd([...Add, input])
setInput (" ")
}

function handleRemove(index){

 const updated = Add.filter((_, i) => i !==index)
 setAdd(updated)

}

function handleUpdate(index){
const modify  = Add.filter((i)=> i == index)

setInput(Add[index])
setValue(modify)
}


  return (
    <div>
      <input type='text' placeholder='' value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <button onClick={handleAdd}>Add
      </button>

      <ul>
        {
            Add.map((data,index)=>{
                return(
                <li key={index}>
                {data}<button onClick={()=> handleRemove(index)}><DeleteIcon/></button>
                <button onClick={()=> handleUpdate(index)}><EditIcon/></button>
              </li>
                )
            })
}
      </ul>
     
    </div>
  )
}

export default Todo
