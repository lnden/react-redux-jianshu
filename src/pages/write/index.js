import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Write extends PureComponent {
    render() {
        const {login} = this.props;
        if (login) {
            return (
                <div>
                    write页面
                </div>
            )
        } else {
            return <Redirect to="/login"/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.getIn(['login', 'login'])
    }
};
export default connect(mapStateToProps, null)(Write);