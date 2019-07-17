import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducer/rootreducer';
import {composeWithDevTools} from 'redux-devtools-extension'; 
import thunk from 'redux-thunk'

const intialState = {};
const middleware =[thunk]
const store =createStore(rootReducer,intialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;