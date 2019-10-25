import React, {PureComponent} from 'react'
import {DetailWrapper, Header, Content} from "./style";
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Detail extends PureComponent {

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }

    render() {
        //console.log(this.props.match.params.id)
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}/>
            </DetailWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getDetail(id) {
            const action = actionCreators.getDetail(id);
            dispatch(action)
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);