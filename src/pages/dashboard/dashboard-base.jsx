
import React, { Component } from 'react';
import { Chart } from 'highcharts';

export default class DashboardBase extends Component {
  constructor(props, id, title, type) {
    super(props);
    this.id = id;
    this.title = title;
    this.type = type;
  }

  render() {
    return (<div className="dashboard" id={ this.id }></div>);
  }

  componentDidUpdate() {
    const data = this.props.data || { };
    const series = data.series || [];
    const categories = data.categories || [];

    this.chart = new Chart(
      this.id,
      {
        chart: {
          type: this.type
        },
        title: {
          text: this.title
        },
        xAxis: {
          categories: categories,
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Total de horas'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: 
            `<tr>
              <td style="color:{series.color};padding:0">{series.name}: </td>
              <td style="padding:0"><b>{point.y:.1f} H</b></td>
            </tr>`,
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: series
      }
    );
  }
}
