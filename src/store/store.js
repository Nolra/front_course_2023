// import { createStore, combineReducers } from "redux";
// import homeReducer from "./reducers/homeReducer";
// import outsideReducer from "./outsideReducer";


// const reducer = combineReducers({
//   home: homeReducer,
//   outside: outsideReducer
// })

// // state = { // так примерно будет выглядеть стейт приложения
// //   home: {},
// //   outside: []
// // }

// const store = createStore( reducer ); // место для редюсера

// // создали хранилище redux

// export default store;



import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import itemReducer from "./reducers/itemReducer";

const reducer = combineReducers({
  user: userReducer,
  items: itemReducer
})

const store = createStore(reducer);

export default store;