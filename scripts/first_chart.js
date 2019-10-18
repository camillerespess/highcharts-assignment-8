Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Pears', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Celeste and Spencer\'s house'
      }
    },
    series: [{
      name: 'Celeste',
      data: [6, 1, 0, 4]
    }, {
      name: 'Spencer',
      data: [6, 5, 7, 3]
    }]
  });
