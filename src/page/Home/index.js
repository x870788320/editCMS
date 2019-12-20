import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from 'antd'
import "./index.less"
import Nav from '../../components/Nav'
import SideNav from '../../components/SideNav'
import Content from '../../components/Content'



class Home extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            aa: 'dsff'
        }
    }

    componentWillMount(){
        console.log(this.props)
    }

    componentDidMount(){
    }

    render() {
        return ( 
            <div className = 'home'>
                 <Row className = 'header'>
                     <Col span = {3} className = 'loge'>CMS后台</Col>
                     <Col span = {21} className = 'header_nav'>
                        <Nav/>
                     </Col>
                 </Row>
                 <Row className = 'body'>
                     <Col span = {3} className = 'side_nav'>
                         <SideNav name = {this.state.aa}/>
                     </Col>
                     <Col span = {21} className = 'content'>
                        { this.props.children }
                     </Col>
                 </Row>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.homeRe.name
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: () => dispatch({
            type: 'ADD_LIST'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)