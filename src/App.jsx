import React from "react";
import "./global.css"
import { applyMiddleware, combineReducers, createStore } from "redux";
// Алгоритм СТАРТ

// 0. описание данных инициализирующих state
// 1. описание редюсеров
// const speakerReducer = function(state = {}, action) {
//   console.log('speaker был вызван с состоянием', state, 'и действием', action)
//   switch (action.type) {
//     case 'SAY': return {...state, message: action.message}
//     default: return state;
//   }
// }

// const reducer = combineReducers({
//   speaker: speakerReducer
// })

// // 2. создание хранилище
// const store = createStore(reducer);

// // 3. создаем действия (для красоты и архитектуры)
// const sayActionCreator = (message) => ({ type: 'SAY', message });

// Алгоритм ФИНИШ



// const asyncSayActionCreator = (message) => {
//   setTimeout(() => ({ type: 'SAY', message }), 2000)
// }

// middleware
// action --> dispatcher --> middleware --> middleware --> редуктор
// middleware под капотом: 
// const anyMiddleware = ({dispatch, getState}) => { // дает диспетчера и getState
//   return (next) => { // функция чтобы пройти дальше
//     return (action) => {
//       // код middleware
//     }
//   }
// }

// // 1. описываем редюсер
// const speakerReducer = function(state = {}, action) {
//   console.log('speaker был вызван с состоянием', state, 'и действием', action)
//   switch (action.type) {
//     case 'SAY': return {...state, message: action.message}
//     default: return state;
//   }
// }
// const reducer = combineReducers({
//   speaker: speakerReducer
// })

// // подключаем middleware
// const thunkMiddleware = ({dispatch, getState}) => {
//   return (next) => {
//     return (action) => {
//       if (typeof action === 'function') {
//         action(dispatch, getState)
//       } else {
//         next(action)
//       }
//     }
//   }
// }

// // подгатавливаем стор с middleware
// const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);
// const store = finalCreateStore(reducer);

// // 3. создаем действия (для красоты и архитектуры)
// const sayActionCreator = (message) => ({ type: 'SAY', message });

// const asyncSayActionCreator = (message) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(sayActionCreator(message))
//     }, 2000)
//   }
// }


// console.log(store.getState())
// store.dispatch(asyncSayActionCreator('Привет'));
// console.log(store.getState())

// store.subscribe(
//   () => {
//     console.log('Хранилище было обновлено, ', store.getState() )
//   }
// )

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM': return [...state, action.item]
    default: return state
  }
}

const reducer = combineReducers({
  item: itemReducer
})

const store = createStore(reducer);

store.subscribe(
  () => {
    console.log('Состояние обновлено', store.getState());
  }
)

const addItemActionCreator = (item) => ({type: 'ADD_ITEM', item})

store.dispatch(addItemActionCreator({id: 1235, title: 'блаблабал', completed: true}))
store.dispatch(addItemActionCreator({id: 1, title: 'бdgsdfgбал', completed: true}))
store.dispatch(addItemActionCreator({id: 2, title: 'бла', completed: false}))


function App() {
  return (
      <>
      </>
  );
}


export default App;


