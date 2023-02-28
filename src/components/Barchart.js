import React, { Component } from "react";
import Chart from "react-apexcharts";

class Barchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Front-End Developer" , "Back-End Developer","Java Developer", "Python Developer","Flutter Developer"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 46]
        }
      ]
    };
  }

  render() {
    return (
    <div className='container p-5 w-100'>

        <div className="row">
          <h1 className="text-center mb-5">Number Of Applications</h1>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="150%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Barchart;