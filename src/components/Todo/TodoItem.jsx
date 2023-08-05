import React, { useState } from "react";

const TodoItem = ({ todo, setTodos }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.title); // если нужно
  // еспользовать пропс для локального состояния компонента
  // инициализируйте с его помощью локальное состояние
  // а потом меняйте его опосредованно

  const save = () => {
    setTodos(todoItems => todoItems.map(t => {
      if (t.id === todo.id) {
        t.title = title;
      }
      return t;
    }))
    setIsEdit(false);
  }

  return (
    isEdit 
      ? (
        <li>
          <input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={save}>save</button>
          <button onClick={() => setIsEdit(false)}>cansel</button>
        </li>
      ) : (
        <li>
          {todo.title} {" "}
          <button onClick={() => setIsEdit(true)}>edit</button>
        </li>
      )
  )
}

export default TodoItem;