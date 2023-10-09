import { connect } from 'react-redux';
import { addTodo } from '../store/actions';
import { useState } from 'react';

let AddTodo = ({dispatch}) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addTodo(value))
      }}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />

      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;

