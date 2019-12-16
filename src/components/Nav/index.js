import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Menu } from 'antd'
import menuList from "../../resource/menuConfig"
import './index.less'

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            menuStyle: {
                'lineHeight': '5rem',
                'display': 'flex',
                'background': 'rgb(35, 38, 46)'
            }
        }

    }

    componentWillMount(){
        const menuTreeNode = this.renderMenu(menuList);
        this.setState({
            menuTreeNode: menuTreeNode
        })
    }

    componentDidMount(){
        // console.log(this.state.menuTreeNode)
    }

    renderMenu = (data) =>  data.map((item) => (
            <Menu.Item key = {item.name} onClick = {() => this.props.changeId(item.id)}>
                {item.title}
            </Menu.Item>)
        )
    

    render() {
        return (
            <Menu
                defaultSelectedKeys={['setting']}
                mode= 'horizontal'
                theme = 'dark'
                style = { this.state.menuStyle }>
                { this.state.menuTreeNode }
            </Menu>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentId: state.homeRe.currentListId
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        changeId: (id) => dispatch({
            type: 'CHANGE_CURRENT_LIST',
            id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);