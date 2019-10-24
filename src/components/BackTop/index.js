import React, {Component, Fragment} from 'react'
import './index.css'

class BackTop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showScroll: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.changeScrollToShow)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeScrollToShow)
    }

    changeScrollToShow = () => {
        if (document.documentElement.scrollTop > 300) {
            this.setState(() => {
                return {
                    showScroll: true
                }
            })
        } else {
            this.setState(() => {
                return {
                    showScroll: false
                }
            })
        }
    };

    render() {
        return (
            <Fragment>
                {
                    this.state.showScroll && <div className="scroll-top">返回顶部</div>
                }
            </Fragment>

        )
    }
}

export default BackTop;