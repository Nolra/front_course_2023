const itemReducer = function(state = [], action) {
  console.log(state, action)
  switch (action.type) {
    case 'ADD_ITEM': return [ ...state, action.item ]
    default: return state;
  }
}

export default itemReducer;
