import React, { Component } from 'react'
import { BrowserRouter as Routes, Switch, Route, Redirect } from 'react-router-dom'
import App from "../App"
import Home from '../page/Home'
import Login from '../page/Login'
import Other from '../page/Other'
import Config from '../components/Content/Config'
import Network from '../components/Content/Network'
// const Login = () => import('../page/Login') //异步加载待定

export default class Router extends Component {
    constructor() {
        super()
    }
    render() {
        return ( 
            <Routes>
                <App>
                    <Switch>
                        <Route path = '/home' render = { (props) => 
                            <Home { ...props }>
                                <Switch>
                                    <Route path = '/home' component = { Config }/>
                                    <Route path = '/home/network' component = { Network }/>
                                    <Redirect to = '/home'/>
                                </Switch>
                            </Home>
                        }/>
                        <Route path = '/login' component = { Login }/>
                        <Route path = '/other' component = { Other }/>
                        <Redirect to = '/login'/>
                    </Switch>
                </App>
            </Routes>  
        )
    }
}