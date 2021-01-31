var myChart = Highcharts.chart('basic-line', {
  chart: {
   styledMode: true,
   height: 300
 },

 title: {
   text: ''
 },

 yAxis: {
   title: {
     text: ''
   }
 },
 plotOptions: {
   series: {
     label: {
       connectorAllowed: true
     },
     pointStart: 2013
   }
 },

 series: [{
   name: 'Accepted',
   data: [12916, 15064, 18742, 21851, 22490, 30282, 38121, 40434],
   marker: {
     symbol: 'circle'
   }
 }, {
   name: 'Fixed',
   data: [15988, 12988, 11988, 10169, 9112, 8352, 5400, 4227],
   marker: {
     symbol: 'circle'
   }
 }, {
   name: 'Rejected',
   data: [18908, 14948, 12105, 11248, 9989, 5816, 3274, 2111],
   marker: {
     symbol: 'circle'
   }
 }],
});

var myChart = Highcharts.chart('basic-line2', {
  chart: {
   styledMode: true,
   height: 300
 },
 legend: {
    enabled: false
  },

 title: {
   text: ''
 },

 yAxis: {
   title: {
     text: ''
   }
 },
 plotOptions: {
   series: {
     label: {
       connectorAllowed: true
     },
     pointStart: 2013
   }
 },

 series: [{
   name: 'Tasks Complete Over Time',
   data: [12916, 15064, 18742, 21851, 22490, 30282, 38121, 40434],
   marker: {
     symbol: 'circle'
   }
 }],
});


var myChart = Highcharts.chart('basic-line3', {
  chart: {
   styledMode: true,
   height: 300
 },
 legend: {
    enabled: false
  },

 title: {
   text: ''
 },

 yAxis: {
   title: {
     text: ''
   }
 },
 plotOptions: {
   series: {
     label: {
       connectorAllowed: true
     },
     pointStart: 2013
   }
 },

 series: [{
   name: 'Tasks Created Over Time',
   data: [12916, 15064, 18742, 21851, 22490, 30282, 38121, 40434],
   marker: {
     symbol: 'circle'
   }
 }],
});
