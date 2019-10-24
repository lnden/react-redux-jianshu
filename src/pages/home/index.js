import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from "./style";
import {actionCreators} from "./store";

class Home extends PureComponent {

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents()
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollToShow)
    }

    handleScrollTop = () => {
        const sTop = document.documentElement.scrollTop + document.body.scrollTop;
        window.scrollBy(0, -(sTop / 10));
        let scrolldelay = setTimeout(this.handleScrollTop, sTop < 100 ? 16 : 3);
        if (sTop === 0) {
            clearTimeout(scrolldelay)
        }
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollToShow)
    }

    render() {
        const {showScroll} = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img"
                         src="//upload.jianshu.io/admin_banners/web_images/4758/0ba87cf2e346d96807631790c073978bbda0bb28.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                         alt=""/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    showScroll && <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop>
                }
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            const action = actionCreators.getHomeInfo();
            dispatch(action);
        },
        changeScrollToShow(e) {
            if (document.documentElement.scrollTop > 300) {
                const action = actionCreators.toggleTopShow(true);
                dispatch(action)
            } else {
                const action = actionCreators.toggleTopShow(false);
                dispatch(action)
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);