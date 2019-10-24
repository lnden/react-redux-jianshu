import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriterWrapper, WriterTitle, WriterList, WriterItem} from '../style'

class Writer extends PureComponent {
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
                                <WriterItem key={item.get('id')}>
                                    <a href="www.baidu.com" className="avatar">
                                        <img
                                            src={item.get('imgUrl')}
                                            alt="avatar"/>
                                    </a>
                                    <a href="www.baidu.com" className="attention">关注</a>
                                    <a href="www.baidu.com" className="name">{item.get('name')}</a>
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