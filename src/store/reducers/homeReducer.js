const homeReducer = function( state = {}, action ) { 
  console.log(
    'Редуктор был вызван с состоянием: ',
    state,
    'И действием: ',
    action
  );
  
  switch (action.type) { 
    case 'SAY_SOMETHING': return { // action = { type: 'SAY_SOMETHING', value: 'something text' }
      ...state, message: action.value
    }

    case 'LEARN_SOMETHING': return { 
      ...state, learn: action.value
    }
    default: return state
  }

  
}

export default homeReducer;