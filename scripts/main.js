Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'School district achievement rates in North Central Florida'
    },
    subtitle: {
        text: 'Source: <a href="http://www.fldoe.org/accountability/accountability-reporting/school-grades/">Florida Department of Education 2019 School Accountability Report'
    },
    xAxis: {
        categories: ['Alachua', 'Bradford', 'Clay', 'Dixie', 'Gilchrist', 'Levy', 'Marion', 'Putnam', 'Suwannee', 'Union'],
        title: {
            text: 'Counties in North Central Florida'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Achievement rates (percents)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' percent'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'English Language Arts Achievement',
        data: [58, 45, 63, 55, 67, 47, 48, 43, 50,61]
    }, {
        name: 'Mathematics Achievement',
        data: [58, 53, 66, 55, 71, 54, 50, 45, 50, 73]
    }, {
        name: 'Science Achievement',
        data: [59, 45, 68, 51, 76, 54, 51, 39, 54, 59]
    }]
});

Highcharts.chart('scatter', {
  chart: {
    type: 'scatter',
    zoomType: 'xy'
  },
  accessibility: {
    description: 'A scatter plot compares the poverty rates versus the per pupil spending for 10 counties in North Central Florida.'
  },
  title: {
    text: 'Poverty Rate Versus Per Pupil Spending in Counties in North Central Florida'
  },
  xAxis: {
    title: {
      enabled: true,
      text: 'Poverty rate (percent)'
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true
  },
  yAxis: {
    title: {
      text: 'Per pupil spending (dollars)'
    }
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 5,
        states: {
          hover: {
            enabled: true,
            lineColor: 'rgb(100,100,100)'
          }
        }
      },
      states: {
        hover: {
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '{point.x} percent, ${point.y}'
      }
    }
  },
  series: [{
    color: 'rgba(119, 152, 191, .5)',
    data: [{
      x: 21.2,
      y: 6917,
      name: 'Alachua',
    }, {
      x: 19.1,
      y: 6471,
      name: 'Bradford',
      }, {
      x: 9.9,
      y: 5921,
      name: 'Clay',
      }, {
      x: 24.4,
      y: 6769,
      name: 'Dixie',
      }, {
      x: 16.1,
      y: 7891,
      name: 'Gilchrist',
      }, {
      x: 20.8,
      y: 6440,
      name: 'Levy',
      }, {
      x: 16.2,
      y: 6095,
      name: 'Marion',
      }, {
      x: 26.3,
      y: 5684,
      name: 'Putnam',
      }, {
      x: 20.3,
      y: 6174,
      name: 'Suwanee',
      }, {
      x: 22.2,
      y: 7076,
      name: 'Union',
    }]
  	}]

});
