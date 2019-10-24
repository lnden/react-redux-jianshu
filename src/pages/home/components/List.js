import React, {PureComponent} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'

class List extends PureComponent {
    render() {
        const {articleList, handleLoadMore, articlePage} = this.props;
        return (
            <div>
                {
                    articleList.map((item) => {
                        return (
                            <Link key={item.get('id')} to={`/detail/${item.get('id')}`}>
                                <ListItem>
                                    <img
                                        className="pic"
                                        src={item.get('imgUrl')}
                                        alt={item.get('title')}/>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => handleLoadMore(articlePage)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList'],),
        articlePage: state.getIn(['home', 'articlePage'])
    }
};

const mapDsipatchToProps = (dispatch) => {
    return {
        handleLoadMore(articlePage) {
            const action = actionCreators.getMoreData(articlePage);
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDsipatchToProps)(List);