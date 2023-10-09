import Todo from "./Todo";

// business logic
// показать список дел todo
// по клику мы будем вычеркивать todo
// поле для добавления нового todo
// будет футер где будет переключатель: 
// - все дела, только завершенные и только не завершенные

// View components: 
// App - корневой компонент для рендера приложения
// TodoList (рендерит видимые todos)
//   - todos - массив, объектов формы { id, text, completed }
//   - onTodoClick(id) - когда кликнули на todo

// Todo - отдельный todo
//   - props: text (для отображения), completed для вычеркивания
//   - onClick() - при клике на todo 

// AddTodo
//   - submit нового todo

// Footer - менять видимость todos

// проектирование компонентов - контейнеров
// TodoList потребуется контейнер VisibleTodoList
// VisibleTodoList - будет подписан на redux store,
// соотвественно применять фильтр видимости и передавать нужные todos в TodoList


const TodoList = ({todos, onTodoClick}) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <Todo 
            key={ todo.id } 
            { ...todo } 
            onClick={() => onTodoClick(todo.id)} 
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
