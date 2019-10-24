import React, {Component} from 'react'
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'
import {HomeWrapper, HomeLeft, HomeRight} from "./style";

class Home extends Component {
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

export default Home;