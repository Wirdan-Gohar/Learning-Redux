import { combineReducers, createStore } from 'redux';
import { valueReducers, nameReducers } from './reducer';

const rootReducer = combineReducers({
    valueObj: valueReducers,
    nameObj: nameReducers
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
