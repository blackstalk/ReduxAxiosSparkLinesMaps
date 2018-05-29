import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  //console.log('Action received on reducer', action);
  switch (action.type){
    case FETCH_WEATHER :
      // Return new instance of state
      // return state.concat([action.payload.data]); // Same as below
      return [ action.payload.data, ...state ]; // [city, city, city];
  }
  return state;
}
