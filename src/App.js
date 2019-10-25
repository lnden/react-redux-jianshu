import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Header from './components/Header'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
import 'antd/dist/antd.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/write" component={Write}></Route>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;