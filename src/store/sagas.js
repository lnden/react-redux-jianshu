import {takeEvery,put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import {InitListAction} from './actionCreators'
import axios from 'axios'

function* getInitList() {
    try {
        const res = yield axios.get('mock/lists.json');
        const action = InitListAction(res.data.list);
        yield put(action);
    } catch (e) {
        console.log('list.json 网络请求失败');
    }
}

// es6 Generator函数
function* mySaga() {
    // takeEvery 步骤每一个action的类型, 就会执行getInitList方法（可以是普通函数，也是generator函数）
    yield takeEvery(GET_INIT_LIST,getInitList)
}
export default mySaga