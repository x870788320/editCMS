import React, { Component } from "react"
import { connect } from 'react-redux'
import { Card, Input, Button, Icon } from 'antd'


import './index.less'
import { Item } from "rc-menu";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signInAc: true, 
            title: 'E_manual 写作系统 v1.0.0',
            cardStyle: {
                'width': '300px',
                'margin': '100px auto'
            }

        }
    }

    componentWillMount(){
        const { baseItemOfSignIn, baseItemOfSignUp } = this.props
        const SignInNode = this.renderInputmenu(baseItemOfSignIn)
        const SignUpNode = this.renderInputmenu(baseItemOfSignUp)

        this.setState({
            SignInNode: SignInNode,
            SignUpNode: SignUpNode,
        })
    }

    //把redux - loginRe下的登录和注册的数据变为input节点
    renderInputmenu = (data) => data.map((item) => (
        <p key = { item.id }>
            <Input
                type = { item.passWord ? 'Password': 'text' }
                placeholder= { item.placeholder }
                onChange = {(e) => this.onChangeOfInfo(e, item.name) } 
                prefix={< Icon type = { item.icon } theme="twoTone" style = {{ fontSize: 13 }}/>}
                allowClear = { !item.passWord } />
        </p>
    ))

    //input的输入事件
    onChangeOfInfo = (e, changeTar) =>{
        const userInfo = { ...this.state.userInfo }
        userInfo[changeTar] = e.target.value
        this.setState({
            userInfo
        })
        // this.setState({
        //     [changeTar]: e.target.value
        // })
    }

    //跳转页面
    handleGo = () => {
        let { state } = this.props.location
        let pathname = state && state.from.pathname || '/home'
        this.props.changeToken(true)
        this.props.history.push({
            pathname,
            userInfo:this.state.userInfo
        })
        // return this.props.handleGo()
    }

    //登录的点击事件
    handleSighInClick = (e) => {
        if(!this.state.signInAc) { 
            this.setState({
                signInAc: true
            })
            return 
        }; 
        this.handleGo()
    }


    //注册的点击事件
    handleSighUpClick = (e) => {
        if(this.state.signInAc) { 
            this.setState({
                signInAc: false
            })
            return 
        }; 
        
        this.handleGo()
    }

    render() {
        return (
            <div className = 'login'>
                <Card title= {this.state.title} bordered={false} style={ this.state.cardStyle } >
                    <div className = 'loginContainer'> 
                        { this.state.signInAc ? this.state.SignInNode : this.state.SignUpNode }
                    </div>
                    <Button type=  { this.state.signInAc ? "primary":'' }
                        onClick = { (e) => this.handleSighInClick(e)}>
                        Sigh In
                    </Button>
                    <Button type={ this.state.signInAc ? "":'primary'  }
                        className = 'loginButtonR'
                        onClick = { (e) => this.handleSighUpClick(e)}>
                        Sigh Up
                    </Button>
                </Card>
            </div>
        )
    }
}

//获取redux里的数据
const mapStateToProps = (state, ownProps) => {
    return {
        baseItemOfSignIn: state.loginRe.baseItemOfSignIn,
        baseItemOfSignUp: state.loginRe.baseItemOfSignUp
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    changeToken: ( login ) => dispatch({
        type: 'CHANGE_LOGIN_STATE',
        login
    }),

    //尝试写一个共用跳转方法，但是没有解决this问题
    // handleGo: () => dispatch({
    //     type: 'HANDLE_GO',
    //     pathName: '/home'
    // })
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Login)