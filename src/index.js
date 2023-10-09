import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

// Provider - позволяет вашему приложению или его части работать с store
// useSelector
// const todoList = useSelector(storeState => storeState.todoList);

// useDispatch

// const dispatch = useDispatch()
// dispatch({type: 'add_todo', todo})



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);
