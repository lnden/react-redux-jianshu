import React, {Component} from 'react'
import {connect} from 'react-redux'
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'
import {HomeWrapper, HomeLeft, HomeRight} from "./style";
import {actionCreators} from "./store";

class Home extends Component {

    componentDidMount() {
        this.props.changeHomeData();
    }

    render() {
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
            </HomeWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            const action = actionCreators.getHomeInfo();
            dispatch(action);
        }
    }
};

export default connect(null, mapDispatchToProps)(Home);