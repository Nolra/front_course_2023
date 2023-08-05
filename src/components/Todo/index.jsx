import React, { useState } from "react";
import { createTodos } from "../../helpers/todos"
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState(() => createTodos(20));
  const [maxTodosCount, setMaxTodosCount] = useState(10);

  return (
    <>
      <ul>
        {
          todos.map((todo, index) => (
              index < maxTodosCount && <TodoItem 
                                          key={todo.id} 
                                          todo={todo} 
                                          setTodos={setTodos}
                                        />
          ))
        }
      </ul>
      <input 
        value={maxTodosCount} 
        onChange={(e) => setMaxTodosCount(e.target.value)} 
      />
    </>
  )
}

export default Todo;