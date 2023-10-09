import initialState from "./initialState";
import { INCR_BY_ONE, DECR_BY_ONE, RESET } from './actions';

const reducer = (state = initialState, action) => {
  console.log(state, action)

  switch (action.type) {
    case INCR_BY_ONE: return state+1
    case DECR_BY_ONE: return state-1
    case RESET: return 0
    default: return state
  }
}

export default reducer;
