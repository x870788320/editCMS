import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Axios from 'axios'

import Util from '../../util'

export default class HeaderInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            weather: {}
        }

    }

    componentWillMount(){
        Axios.get('https://restapi.amap.com/v3/weather/weatherInfo?city=青岛&key=9f79f6c3c5a795d384d19b511aa72abe').then(weather => {
            // const d = weather.data.lives[0]
            this.setState({
                weather: weather.data.lives[0]
            })
        }).catch(err => {
            console.log('e',err)
        })

        setInterval(() => {
            this.setState({
                sysTime: Util.timeFormat(new Date().getTime())
            })
        });
        console.log(Util.timeFormat(new Date().getTime()))

    }

    render() {
        return (
            <div>
                    { this.state.weather.city }
                    { this.state.sysTime }
            </div>
        )
    }
}
