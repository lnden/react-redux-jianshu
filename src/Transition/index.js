import React,{Component,Fragment} from 'react'
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import './index.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      transition: true,
      animation: true,
      CSSTransition: true,
      list: []
    }
    this.handleToggle1 = this.handleToggle1.bind(this)
  }

  handleToggle1() {
    this.setState((prevState)=>({
      transition: prevState.transition?false:true
    }))
  }

  handleToggle2 = () => {
    this.setState((prevState)=>({
      animation: prevState.animation?false:true
    }))
  }

  handleToggle3 = () => {
    this.setState((prevState)=>({
      CSSTransition: prevState.CSSTransition?false:true
    }))
  }

  handleToggle4 = () => {
    this.setState((prevState)=>({
      list: [...prevState.list,'item']
    }))
  }

  render(){
    return (
      <Fragment>
          <div className="transition">
            <button onClick={this.handleToggle1}>Toggle</button>
            <div className={this.state.transition?'show':'hide'}>Transition</div>
          </div>
          <div className="animation">
            <button onClick={this.handleToggle2}>Toggle</button>
            <div className={this.state.animation?'show-item':'hide-item'}>Animation</div>
          </div>
          <div className="CSSTransition">
            <button onClick={this.handleToggle3}>CSSTransition</button>
            <CSSTransition
              in={this.state.CSSTransition}
              timeout={1000}
              classNames="fade"
              unmountOnExit //是否使用删除/添加元素来控制隐藏显示
              onEntered={(el)=>{el.style.color = 'blue' }}//出场动画结束以后修改颜色，也可以在css里面修改red
              appear={true}//第一次展示的时候也出现动画
            >
              <div>CSSTransition</div>
            </CSSTransition>
          </div>
          <div className="transitionGroup">
            <button onClick={this.handleToggle4}>CSSTransition</button>
            <TransitionGroup>
              {
                this.state.list.map((item,index)=>{
                  return (
                    <CSSTransition
                      in={this.state.CSSTransition}
                      timeout={1000}
                      classNames="fade"
                      unmountOnExit
                      onEntered={(el)=>{el.style.color = 'blue' }}
                      appear={true}
                      key={index}
                    >
                      <div>{item}</div>
                    </CSSTransition>
                  )
                })
              }
            </TransitionGroup>
          </div>
      </Fragment>
    )
  }
}

export default App;