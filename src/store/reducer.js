import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../components/Header/store/'

// combineReducers 生成是 immutable 对象
const reducers = combineReducers({
    header: headerReducer
});

export default reducers