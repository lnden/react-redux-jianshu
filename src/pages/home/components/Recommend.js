import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RecommendWrapper, RecommendItem} from '../style'

class Recommend extends Component {
    render() {
        const {recommendList} = this.props;
        return (
            <RecommendWrapper>
                {
                    recommendList.map((item) => {
                        return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    })
                }
            </RecommendWrapper>
        )
    }
}

export default connect((state) => ({
    recommendList: state.getIn(['home', 'recommendList'])
}), null)(Recommend);