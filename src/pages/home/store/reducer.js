import {fromJS} from 'immutable'
import {actionTypes} from './index'

const defaultState = fromJS({
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false,
});

const changeHomeData = (state, action) => {
    return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
    });
};

const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.articleList)),
        articlePage: action.articlePage
    });
    // return state.set('articleList',state.get('articleList').concat(fromJS(action.articleList)));
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case actionTypes.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case actionTypes.TOGGLE_SCROLL_TOP:
            return state.merge({
                showScroll: fromJS(action.showScroll)
            });
        default:
            return state;
    }
}