import React from "react";
import { useState } from "react";
import style from "./index.module.css"

const listInit = [
  {
    id: 0,
    title: "хлеб",
    complete: false
  },
  {
    id: 1,
    title: "молоко",
    complete: false
  },
  {
    id: 2,
    title: "масло",
    complete: false
  }
]

const Todo = () => {
  const [ list, setList ] = useState(listInit);

  const changeComplete = (id) => {
    const updList = list.map(item => {
      if (id === item.id) {
        item.complete = !item.complete;
      }
      return item;
    })
    setList(updList)
  }


  return (
    <ul>
      {
        list.map(
          item => (
            <li 
              onClick={() => changeComplete(item.id)}
              className={item.complete && style.complete} 
              key={item.id}
            >
              {item.title}
            </li>
          )
        )
      }
    </ul>
  )
}

export default Todo;