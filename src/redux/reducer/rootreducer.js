import {combineReducers} from 'redux';
import revenue from './revenue';
import visit from './visit'


const rootReducer = combineReducers({
    revenue,
    visit
})

export default rootReducer;