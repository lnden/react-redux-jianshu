import React, {Component} from 'react';
import {connect} from 'react-redux';
import {WriterWrapper, WriterTitle, WriterList, WriterItem} from '../style'

class Writer extends Component {
    render() {
        const {writerList} = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    <span>推荐作者</span>
                    <span className="switch"><span ref={(icon) => this.spinIcon = icon}
                                                   className='iconfont'>&#xe62d;</span>换一批</span>
                </WriterTitle>
                <WriterList>
                    {
                        writerList.map((item) => {
                            return (
                                <WriterItem>
                                    <a href="#" className="avatar">
                                        <img
                                            src={item.get('imgUrl')}
                                            alt="avatar"/>
                                    </a>
                                    <a href="#" className="attention">关注</a>
                                    <a href="#" className="name">{item.get('name')}</a>
                                    <p>{item.get('desc')}</p>
                                </WriterItem>
                            )
                        })
                    }
                </WriterList>
            </WriterWrapper>
        )
    }
}

export default connect((state) => ({
    writerList: state.getIn(['home', 'writerList'])
}), null)(Writer);