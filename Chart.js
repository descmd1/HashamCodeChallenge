import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
             labels:['Jan','Feb','Mar','Apr','May',
             'Jun','Jul','Aug',
             'Sep','Oct','Nov'],
             datasets:[
                 {
                 label:'Months', 
                data:[
                 31, 28, 30, 31, 31, 30, 31, 30, 30, 31, 31
                ],
             

             backgroundColor:['grey','grey','grey','grey','grey','grey','grey',
             'grey','grey','purple','grey','grey'
             ]   
            }
        ]
        }
    }
}
    render(){
        return(
            <div className="chart">
              <Bar
              data={this.state.chartDataata}
              width={90}
              height={100}
              options={{}}  
              />

            </div>
        )
    }   
}
export default Chart;