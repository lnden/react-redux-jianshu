import {combineReducers} from 'redux'
import {reducer as headerReducer} from '../components/Header/store/'

const reducers = combineReducers({
    header: headerReducer
});

export default reducers