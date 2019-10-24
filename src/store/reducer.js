import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../components/Header/store'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store'

// combineReducers 生成是 immutable 对象
const reducers = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
});

export default reducers