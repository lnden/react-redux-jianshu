import {fromJS} from 'immutable'
import {actionTypes} from './index'

const defaultState = fromJS({
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            });
        case actionTypes.CHANGE_LIST_DATA:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.articleList)),
                articlePage: action.articlePage
            });
            // return state.set('articleList',state.get('articleList').concat(fromJS(action.articleList)));
        default:
            return state;
    }
}