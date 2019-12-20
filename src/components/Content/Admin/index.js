import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        //connent 源码  高阶组件
        const connect = (MapState, MapDispatch) => Home => {
            // return MapState + Component
            return class Proxy extends Component{
                render(){
                    let state = MapState({aa: 23})          //store.getState()
                    let dispatch = MapDispatch({bb: 77})    //store.dispatch
                    return (
                        <Home { ...state } { ...dispatch } />
                    )
                }
            }
        }
        //console.log(connect(2)(44))



        return (
            <div>
                AdminAdminAdminAdmin
            </div>
        )
    }
}
