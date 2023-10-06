// const actionCreator = function() {
//   return { type: "AN_ACTION" }
// }

// // ActionCreator --> Action ... Subscriber

// const mySubscriber = function() {
//   console.log("что-то произошло")
//   // сделать что-нибудь
// }

const setName = function(name) {
  return { type: 'SET_NAME', name }
}

const addItem = function(item) {
  return { type: 'ADD_ITEM', item }
}

export { setName, addItem }