import React, { Component } from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'
import echartTheme from '../../../lib/echartsTheme'
// import echartTheme from '@/lib/'
import echarts from 'echarts/lib/echarts'


// 引入饼图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';



class Config extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
    //     const echartNode = <div style="width: 600px;height:400px;"></div>
    //     // const myChart = echarts.init(echartNode);
    //     const option = {
    //         title: {
    //             text: 'ECharts 入门示例'
    //         },
    //         tooltip: {},
    //         legend: {
    //             data:['销量']
    //         },
    //         xAxis: {
    //             data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //         },
    //         yAxis: {},
    //         series: [{
    //             name: '销量',
    //             type: 'bar',
    //             data: [5, 20, 36, 10, 10, 20]
    //         }]
    //     };
    //     echarts.registerTheme('myTheme',echartTheme);

    }
    getOption(){
        let option = {
            title: {
                text: '网站访问统计'
            },
            tooltip : {
                trigger: 'axis'
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'bar',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ]
                }
            ]
     }
        return option;
}

    render(){
        return (
            <div>
                <Card title="柱形图表之一" >
                    <ReactEcharts option={this.getOption()} theme="myTheme" notMerge={true} lazyUpdate={true} style={{ height: 500 }} />
                </Card>
            </div> 
        );
	}
}



export default  Config