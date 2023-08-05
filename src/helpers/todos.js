const createTodos = (todosCount) => {
  const todos = [];
  for (let i = 0; i < todosCount; i++) {
    todos.push({
      id: i,
      title: "Default title"
    })
  }
  return todos;
}

export { createTodos };