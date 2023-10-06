const outsideReducer = function( state = [], action ) { 
  
  switch (action.type) { 
    case 'DO_SOMETHING': return { 
      ...state, do: action.value
    }
    case 'GO_SOMETHING': return { 
      ...state, go: action.value
    }
    default: return state
  }
}

export default outsideReducer;