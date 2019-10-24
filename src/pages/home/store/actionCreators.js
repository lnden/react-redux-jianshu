import {actionTypes} from "./index";
import * as request from '../../../services/home';

const homeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList,
});

const ListData = (result, articlePage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    articleList: result.articleList,
    articlePage: articlePage + 1
});

export const getHomeInfo = () => {
    return (dispatch) => {
        request.getHomeInfo().then(res => {
            const result = res.data.data;
            const action = homeData(result);
            dispatch(action)
        });
    }
};

export const getMoreData = (articlePage) => {
    return (dispatch) => {
        request.getMoreData({page: articlePage}).then(res => {
            const result = res.data.data;
            const action = ListData(result, articlePage);
            dispatch(action)
        })
    }

};
export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    showScroll: show
});