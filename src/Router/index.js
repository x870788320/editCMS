import React, { Component } from 'react'
import { BrowserRouter as Routes, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from "../App"
import Home from '../page/Home'
import Login from '../page/Login'
import Other from '../page/Other'
import NoMatch from '../page/NoMatch'
import Content from '../components/Content'
import Config from '../components/Content/Config'
import Network from '../components/Content/Network'
import Admin from '../components/Content/Admin'
import Annex from '../components/Content/Annex'
import Journal from '../components/Content/Journal'
import Menu from '../components/Content/Menu'
import User from '../components/Content/User'
// const Login = () => import('../page/Login') //异步加载待定

class Router extends Component {
    constructor() {
        super()
    }

    render() {
        const { token } = this.props
        console.log(token)
        //路由拦截
        const PrivateRoute = ({ component: Component, ...rest }) => (           //解构：重命名，剩余参数
            <Route {...rest} render={ props => 
                (    
                    token ? 
                        (<Component {...props}/>) : 
                        (<Redirect to={{pathname: '/login',state: { from: props.location }}}/>) 
                )
            }/>
        )

        return ( 
            <Routes>
                <App>
                    <Switch>
                        <Route path = '/login' component = { Login }/>
                        <Route path = '/404' component = { NoMatch }/>
                        <PrivateRoute path = '/other' component = { Other }/>
                        <Route path = '/' render = { props => 
                            <Home { ...props }>
                                <Switch>
                                    <PrivateRoute path = '/home/admin' component = { Admin }/>
                                    <PrivateRoute path = '/home/annex' component = { Annex }/>
                                    <PrivateRoute path = '/home/journal' component = { Journal }/>
                                    <PrivateRoute path = '/home/menu' component = { Menu }/>
                                    <PrivateRoute path = '/home/user' component = { User }/>
                                    <PrivateRoute path = '/home/network' component = { Network }/>
                                    <PrivateRoute path = '/home/config' component = { Config }/>
                                    {/* <Redirect from = '/home/:name' to = '/404' /> */}
                                    <Route path = '/home' component = { Content }/>
                                    <Redirect from = '/:name' to = '/404' />
                                    <Redirect from = '/' to = '/home' />
                                </Switch>
                            </Home>
                        }/>
                    </Switch>
                </App>
            </Routes>  
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    token: state.publicRe.token
})

export default connect(mapStateToProps)(Router)