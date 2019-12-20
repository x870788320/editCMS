import React, { Component } from 'react'

export default class Content extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <p>
                    欢迎登陆电视说明书系统！
                </p>
                <p>
                    在这里你可以为所欲为！
                </p>
            </div>
        )
    }
}


