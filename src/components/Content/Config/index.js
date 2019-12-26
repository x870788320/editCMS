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
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/markPoint';



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
        // echarts.registerTheme('myTheme',{
        //     backgroundColor: '#f4cccc'
        //   });

          
        // echarts.registerTheme('myTheme',echartTheme);

    }
    getOption = () => ({
            // 柱状图
            // title: {
            //     text: '网站访问统计'
            // },
            // tooltip : {
            //     trigger: 'axis'
            // },
            // xAxis: {
            //     data: [
            //         '周一',
            //         '周二',
            //         '周三',
            //         '周四',
            //         '周五',
            //         '周六',
            //         '周日'
            //     ]
            // },
            // yAxis: {
            //     type: 'value'
            // },
            // series: [
            //     {
            //         name: '订单量',
            //         type: 'bar',
            //         data: [
            //             1000,
            //             2000,
            //             1500,
            //             3000,
            //             2000,
            //             1200,
            //             800
            //         ]
            //     }
            // ]

            //饼图
            title: {//标题组件
                text: '故障',
                left:'50px',//标题的位置 默认是left，其余还有center、right属性
                textStyle: {    
                    color: "#436EEE",    
                    fontSize: 17,   
                }
            },
            tooltip : { //提示框组件
                trigger: 'item', //触发类型(饼状图片就是用这个)
                formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
            },
            color:['#48cda6','#fd87fb','#11abff','#ffdf6f','#968ade'],  //手动设置每个图例的颜色
            legend: {  //图例组件
                //right:100,  //图例组件离右边的距离
                orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                width:40,      //图行例组件的宽度,默认自适应
                x : 'right',   //图例显示在右边
                y: 'center',   //图例在垂直方向上面显示居中
                itemWidth:10,  //图例标记的图形宽度
                itemHeight:10, //图例标记的图形高度
                data:['正常','一般','提示','较急','特急'],
                textStyle:{    //图例文字的样式
                    color:'#333',  //文字颜色
                    fontSize:12    //文字大小
                }
            },
            series : [ //系列列表
                    {
                        name:'设备状态',  //系列名称
                        type:'pie',   //类型 pie表示饼图
                        center:['40%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                        radius : ['50%', '70%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                        itemStyle : {  //图形样式
                            normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                                label : {  //饼图图形上的文本标签
                                    show : false  //平常不显示
                                },
                                labelLine : {     //标签的视觉引导线样式
                                    show : false  //平常不显示
                                }
                            },
                            emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                                label : {  //饼图图形上的文本标签
                                    show : true,
                                    position : 'center',
                                    textStyle : {
                                        fontSize : '10',
                                        fontWeight : 'bold'
                                    }
                                }
                            }
                        },
                        data:[
                            {value:80, name:'正常'},
                            {value:10, name:'一般'},
                            {value:30, name:'提示'},
                            {value:20, name:'较急'},
                            {value:25, name:'特急'}
                        ]
                    }
                ]
        })

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