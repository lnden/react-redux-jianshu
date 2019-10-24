import {actionTypes} from "./index";
import * as request from '../../../services/home';

const homeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList,
});

export const getHomeInfo = () => {
    return (dispatch) => {
        request.getHomeInfo().then(res=>{
            const result = res.data.data;
            const action = homeData(result);
            dispatch(action)
        });
    }
};