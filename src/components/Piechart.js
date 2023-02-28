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
      

<div id="chart" className="container p-5"  style={{ "marginTop": "5%" }}>
  <h1>Active/Inactive Jobs</h1>
<ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
</div>


    );
  }
}
export default Piechart