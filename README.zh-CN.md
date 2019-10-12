# react-redux-jianshu

该项目主要使用 create-react-app 配合 react、react-router-dom4.0、axios、antd、react-redux、react-saga、Styled-components以及第三方插件immutable.js、react-immutable、react-transition-group 来实现的基础应用。

### Description

> Imooc React16.4开发简书项目从零基础到入门实战

### Catalogue

React16版本之后称为React fiber  react底层循环添加优先级等概念，可以利用循环的碎片时间执行一些高优先级的交互，提高react 使用过程中的用户体验  

- TodoList [实现TodoList的增删改查]
    - 父子组件相互传参
    - this.setState((prevState) => {})
    - class="container" 使用 "className="container"
    - for="content" 使用 htmlFor="content"
    - 转义输出 dangerouslySetInnerHTML={{__html: content}}
    - TodoItem.propTypes
    - TodoItem.defaultProps