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


#### React虚拟DOM

> 1.简单版本

1. state数据
2. JSX模板
3. 数据 + 模板 结合，生成真实的DOM来显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的DOM，替换原始的DOM

缺陷：
第一次生成了一个完整的DOM片段
第二次生成了一个完整的DOM片段
第二次的DOM替换第一次的DOM，只改变某个值的时候非常消耗性能。

> 2.经过改良的版本

1. state数据
2. JSX模板
3. 数据 + 模板 结合，生成真实的DOM来显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的DOM，并不直接替换原始的DOM
6. 新的DOM (DocumentFragment) 和原始的DOM做对比，找差异
7. 找出input框发生了变化
8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素

缺陷：

性能的提升并不明显

> 3.经过改良的虚拟DOM版本

1. state数据
2. JSX模板

3. 数据 + 模板 生成虚拟DOM (虚拟DOM就是一个js对象，用它来描述真实的DOM) (损耗了性能)
`['div',{id:'abc'},['span',{},'hello word']]`

4. 用虚拟DOM的结构生成真实的DOM来显示
`<div id="abc"><span>hello word</span></div>`

5. state 发生了变化

6. 数据 + 模板 生成了新的虚拟DOM
`['div',{id:'abc'},['span',{},'beys beys']]`

7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容 (极大的提升性能)
8. 直接操作DOM，改变span中的内容


3.js生成一个js对象代价极小，js生成一个DOM元素的代价极高，需要调用web application API损耗非常大
6.极大的提升了性能
7.两个js对象比较，消耗的性能远比DOM对比消耗的性能低

减少真实DOM的创建，真实DOM的对比，取而代之使用js对象来对比

JSX -> createElement -> 虚拟DOM (JS对象) -> 真实的DOM
react 底层会把jsx语法通过createElement转换为一个js对象 在换换为虚拟DOM
```
render(){
    // return <div><span>hello word</span></div>
    // return <div id="abc"><span>hello word</span></div>
}
render(){
    // return React.createElement('div',{},''hello word'')
    // return React.createElement('div',{id:'abc'},React.createElement('span',{},'hello word'))
}
```


#### 虚拟DOM带来的好处
1. 性能提升了，DOM比对 变成 js对象的比对
2. 它使得跨端应用得以实现 React Native, JS的虚拟DOM可以在原生App里面被识别，生成原生的组件

#### 虚拟DOM中的Diff算法

Diff, diffrence 

1. setState为要设置成为一个异步函数，如果同时修改三次state数据  就会调用一次DOM比对，大大的提升了性能，减少虚拟DOM比对次数
2. 同级比较，速度快，
3. index作为key的缺陷  a[0] b[1] c[2]   删除a会导致后面数据从新渲染，不能建立关联   b[0] c[1]，使用一个稳定的内容作为key值


### 生命周期
生命周期函数指在某一个时刻组件会自动调用执行的函数

### Animation
- transition
- animation
- reacr-transition-group
    - CSSTransition
    - TransitionGroup
    
    
### Redux

```
yarn add antd 
yarn add redux 
yarn add redux-thunk
yarn add redux-saga
yarn add react-redux
```


store 是唯一的，只有 store 能改变自己的内容，reducer必须是纯函数（纯函数指的是，给固定的输入，就一定会有固定的输出，而且不会有任何副作用），副作用指的是，传递进来的参数进行修改

固定输入，就一定会有固定的输出是指 传入state,action就一定会返回对应的内容

拆分UI组件、容器组件、UI组件使用无状态组件，无状态组件性能比较高，无状态组件是一个函数，没有生命周期，没有继承任何react内容

### redux-thunk

actionCreator action函数内返回一个对象
当你使用 redux-thunk 之后action可以返回一个函数，函数内可以返回一个函数，函数内可以执行异步操作。
把请求放在actionCreator之中便于维护

- Todolist-redux //使用原生 redux API 进行构建
- Todolist-redux-thunk //使用 redux-thunk 中间件，action可以返回一个函数
- Todolist-redux-saga //使用 redux-saga 中间件，请求抽离sagas.js
- Todolist-react-redux //使用 react-redux API 进行构建

### Jianshu Project Start
- Header
- Home
    - using redux
    - using redux-thunk
    - using react-immutable
    - using styled-components
    - using react-router-dom
    - using axios
    - using ant-design
- login
    
性能优化，修改Home下组件Component为PureComponent，因为我们的业务使用的是immutable，所以可以直接替换PureComponent

如果不使用immutable 来使用PureComponent会遇见底层的一些坑（待入坑）

#### 获取URL参数的两种方式

- 使用动态路由Route path="/detail/:id"

获取方式：this.props.match.params.id  // 1

- 使用Link跳转的时候 to={`/detail?id=${item.id}`}, 修改path="/detail"

获取方式：this.props.location.search  // ?id=1
 
#### 异步加载组件 react-loadable

使用异步组件之后，组件内获取url值报错: this.props.match.params.id
loadable可以获取路由里面的内容，深一层的detail组件没办法获取。
解决：使用withRouter使得组件拥有router的权利
```
import {withRouter} from 'react-router-dom'
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
```
