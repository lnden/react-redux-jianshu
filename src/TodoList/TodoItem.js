import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    handleClick = () => {
        const {handleDelete, index} = this.props;
        handleDelete(index)
    };

    render() {
        const {content, test} = this.props;
        return (
            <li>
                <p className="content-box" dangerouslySetInnerHTML={{__html: content}}></p> - <span>{test}</span>
                <button className="btn" onClick={this.handleClick}>删除</button>
            </li>
        )
    }
}

//https://reactjs.org/docs/typechecking-with-proptypes.html
TodoItem.propTypes = {
    //单纯的string是不会报错的，因为没有值，根本都不会走验证
    test: PropTypes.string.isRequired,
    // content: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    handleDelete: PropTypes.func,
    index: PropTypes.number,
};
TodoItem.defaultProps = {
    test: 'defaultProps'
};

export default TodoItem;