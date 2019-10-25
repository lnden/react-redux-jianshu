import React, {PureComponent} from 'react'
import {LoginWrapper, LoginBox, Input, Button} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'

class Login extends PureComponent {
    render() {
        const {handleLogin, login} = this.props;
        if (!login) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input
                            placeholder="用户"
                            type="text"
                            ref={(input) => {
                                this.account = input
                            }}
                        />
                        <Input
                            placeholder="密码"
                            type="password"
                            ref={(input) => {
                                this.password = input
                            }}
                        />
                        <Button onClick={() => handleLogin(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to="/"/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.getIn(['login', 'login'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin(accountElem, passwordElem) {
            const action = actionCreators.getLogin(accountElem.value, passwordElem.value);
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);