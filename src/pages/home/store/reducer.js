import {fromJS} from 'immutable'
import {actionTypes} from './index'

const defaultState = fromJS({
    articleList: [],
    recommendList: [],
    writerList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            });
        default:
            return state;
    }
}