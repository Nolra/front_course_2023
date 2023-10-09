import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo } from '../store/actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED': return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE': return todos.filter(t => !t.completed)
    case 'SHOW_ALL': return todos
    default: return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;