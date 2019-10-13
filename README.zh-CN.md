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