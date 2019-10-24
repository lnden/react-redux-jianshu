import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Header from './components/Header'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header/>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/detail" component={Detail}></Route>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;