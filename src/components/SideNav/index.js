import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import menuList from "../../resource/menuConfig"
import { Menu } from 'antd'

const { SubMenu } = Menu

class SideNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            openArr:[],
            defaultOpen:[]
        }
    }

    componentWillMount(){
        let currentIndex = this.props.currentId -1
        const sideMenuTreeNode = this.renderSideMenu(menuList[currentIndex].children)
        this.setState({
            sideMenuTreeNode: sideMenuTreeNode
        })
    }

    componentDidMount(){
        // console.log([this.state.allNameArr[0]])
        // console.log(this.state.openArr)
    }

    componentWillReceiveProps(val1, val2){
        let currentIndex = val1.currentId -1
        const sideMenuTreeNode = this.renderSideMenu(menuList[currentIndex].children)
        this.setState({
            sideMenuTreeNode: sideMenuTreeNode
        })
    }

    handleGo = (tar) => {
        console.log(this.props)
        this.props.history.push({
            pathname: tar
        })
    }

    handleOnClick = ({ key, item:{props} }) => this.handleGo(`/home/${key}`)

    renderSideMenu(data, child = false){
        child && this.state.openArr.length === 1 && this.state.defaultOpen.push(data[0].name)
        return data.map(item => {
            !child && !this.state.openArr.find(val => val === item.name) && this.state.openArr.push(item.name)
            if(item.children) {
                return (
                    <SubMenu
                    key = {item.name}
                    title = {
                        <span>
                            {item.title}
                        </span>
                    }>
                        {this.renderSideMenu(item.children, true)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key = {item.name} onClick = {(parameter) => {this.handleOnClick(parameter)}}>
                    {item.title}
                </Menu.Item>
            )
        })
    }


    render() {
        return (
            <div className =  "SideNav">
                <Menu
                defaultOpenKeys = {this.state.openArr}
                defaultSelectedKeys={this.state.defaultOpen}
                mode = "inline"
                theme = 'dark'>
                    { this.state.sideMenuTreeNode }
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentId: state.homeRe.currentListId
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {

//     }
// }

export default connect(mapStateToProps)(withRouter(SideNav));