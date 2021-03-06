import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../components/Header/store'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/login/store'

// combineReducers 生成是 immutable 对象
const reducers = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
});

export default reducers