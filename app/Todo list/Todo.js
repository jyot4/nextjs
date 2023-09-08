
"use client"
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Todo() {
  const [input, setInput] = useState("")
  const [Add, setAdd] = useState([])

  const [editIndex, setEditIndex] = useState(-1)

  function handleAdd() {
    if (editIndex !== -1) {

      // const editlist = Add.filter((i)=> i === index)

      const editlist = [...Add];

      editlist[editIndex] = input
      setAdd(editlist);
      setEditIndex(-1)

    }

    else {
      if (input.length !== 0) {
        setAdd([...Add, input])
      }
    }

    setInput(" ")
  }

  function handleRemove(index) {

    const updated = Add.filter((_, i) => i !== index)
    setAdd(updated)

  }

  function handleUpdate(index) {


    setInput(Add[index])
    setEditIndex(index)
  }


  return (
    <div>
      <input type='text' placeholder='' value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleAdd}>Add
      </button>

      <ul>
        {
          Add.map((data, index) => {
            return (
              <li key={index}>
                {data}<button onClick={() => handleRemove(index)}><DeleteIcon /></button>
                <button onClick={() => handleUpdate(index)}><EditIcon /></button>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default Todo
