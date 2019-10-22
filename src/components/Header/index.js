import React from 'react'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreators} from './store'

const Header = (props) => {
    const {focused, handleInputFocus} = props;
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    {/*可以使用样式transition来代替CSSTransition，在NavSearch样式*/}
                    <CSSTransition
                        timeout={300}
                        in={focused}
                        classNames="slide"
                    >
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={handleInputFocus}
                            onBlur={handleInputFocus}
                        />
                    </CSSTransition>
                    <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe873;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                    <span className="iconfont">&#xe641;</span>写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocusAction())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);