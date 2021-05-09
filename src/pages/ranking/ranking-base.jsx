
import React, { Component } from 'react';
import Highcharts, { Chart } from 'highcharts';

export default class RankinBase extends Component {
  constructor(props, id, title) {
    super(props);
    this.id = id;
    this.title = title;
  }

  render() {
    const { className } = this.props;
    return (<div className={ `ranking${ className ? ` ${className}` : '' }` } id={ this.id }></div>);
  }

  componentDidUpdate() {
    const data = this.props.data || { };
    const bars = data.bars || [];
    const categories = data.categories || [];

    this.chart = new Chart(
      this.id,
      {
        chart: {
          type: 'bar'
        },
        title: {
          text: this.title
        },
        xAxis: {
          categories: categories
        },
        yAxis: {
          title: {
            text: 'Horas',
          }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        series: [
          {
            type: 'bar',
            name: 'Horas',
            showInLegend: false,
            data: bars
          }
        ]
      }
    );
  }
}
