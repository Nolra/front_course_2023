import {
  INCR_BY_ONE,
  DECR_BY_ONE,
  RESET
} from './actions';

const incrementByOne = () => ({type: INCR_BY_ONE});
const decrementByOne = () => ({type: DECR_BY_ONE});
const reset = () => ({type: RESET});

export {
  incrementByOne,
  decrementByOne,
  reset
}
