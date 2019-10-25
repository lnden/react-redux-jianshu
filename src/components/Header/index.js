import React, {Component} from 'react'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {Link} from 'react-router-dom'
import {actionCreators as loginActionCreators} from '../../pages/login/store'

class Header extends Component {

    getListArea = () => {
        const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;

        if (focused || mouseIn) {
            // 把immutable对象转换为js对象
            const newList = list.toJS();
            const pageList = [];
            if (newList.length) {
                for (let i = (page - 1) * 10; i < page * 10; i++) {
                    if (newList[i]) {
                        pageList.push(
                            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                        )
                    }
                }
            }
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => this.spinIcon = icon} className='iconfont spin'>&#xe62d;</span>换一批
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            )
        } else {
            return null
        }
    };

    render() {
        const {focused, list, handleInputFocus, login, handleLogout} = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ?
                            <NavItem className='right' onClick={handleLogout}>退出</NavItem>
                            :
                            <Link to="/login"><NavItem className='right'>登录</NavItem></Link>
                    }

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
                                onFocus={(e) => handleInputFocus(e, list)}
                                onBlur={handleInputFocus}
                            />
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe873;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className='writting'>
                            <span className="iconfont">&#xe641;</span>写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(e, list) {
            if (e.type === 'focus') {
                list.size === 0 && dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocusAction())
        },
        handleMouseEnter() {
            dispatch(actionCreators.searchMouseEnterAction())
        },
        handleMouseLeave() {
            dispatch(actionCreators.searchMouseLeaveAction())
        },
        handleChangePage(page, totalPage, spinIcon) {
            const originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            spinIcon.style.transform = `rotate(${360 + Number(originAngle)}deg)`;
            if (page < totalPage) {
                dispatch(actionCreators.changePageList(page + 1))
            } else {
                dispatch(actionCreators.changePageList(1))
            }
        },
        handleLogout() {
            dispatch(loginActionCreators.logout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);