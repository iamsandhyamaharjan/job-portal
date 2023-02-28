import React from "react";
import ReactApexChart from "react-apexcharts";

class Piechart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [44, 56],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Active', 'Inactive'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart" className="container p-5 w-100 mt-3 "  >
  <h1 className="mb-5">Active/Inactive Jobs</h1>
<ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="40%" />
</div>


    );
  }
}
export default Piechart