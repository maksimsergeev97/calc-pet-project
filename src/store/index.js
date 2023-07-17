import {createStore, combineReducers} from 'redux'
import values from '../reducers/values';
import operations from '../reducers/operations';
import theme from '../reducers/theme';

const store = createStore( combineReducers({values, operations, theme}), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  export default store;