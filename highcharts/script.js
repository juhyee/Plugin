window.onload = function(){
    /* 모든 차트에 대해서 동일한 옵션 적용을 위해서 setOptions를 사용한다. */
     Highcharts.setOptions({
         chart: {
             type:'line',
             backgroundColor: {
                 linearGradient: [0, 0, 500, 500],
                 stops: [
                     [0, 'rgb(255, 255, 255)'],
                     [1, 'rgb(200, 200, 2000)']
                     ]
             },
             borderWidth: 2,
             plotBackgroundColor: 'rgba(255, 255, 255, .9)',
             plotShadow: true,
             plotBorderWidth: 1
         }
     });

    /* char1, char2 로 개별적으로 차트를 줄수 있다. */
    /* chart type은 chart, series안에서도 각각 줄수가 있다. */
    var test01 = function drawChart() {
        var basic = new Highcharts.Chart({
        chart: {
             renderTo: 'basic',
             type: 'line'

         },

         xAxis: {
             type: 'datetime'
         },

         series: [{
             name: 'test1',
             type: 'column',
             data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0,
                    135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
             pointStart: Date.UTC(2010, 0, 1),
             pointInterval: 3600 * 1000  // one hour
         }
         ,
         {
             name: 'test22',
             data: [39.9, 41.5, 116.4, 119.2, 164.0, 156.0,
                    125.6, 138.5, 206.4, 124.1, 195.6, 154.4],
             pointStart: Date.UTC(2010, 0, 1),
             pointInterval: 3600 * 1000  // one hour
         }
         ]
        })
     }
     test01();  //default

     /* 인스턴스가 형성될때, 하나의 아이디에 2개의 인스턴스가 들어가면 마지막 인스턴스가 적용된다. */
    var test02 = function drawChart02() {
     var data = new Highcharts.Chart({
         chart: {
             renderTo: 'data',
             type: 'bar'

         },

         xAxis: {
             type: 'datetime'
         },

         series: [{
             data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0,
                    135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
             pointStart: Date.UTC(2010, 0, 1),
             pointInterval: 3600 * 1000  // one hour
         }]
     });
    };


     document.querySelector('.basic').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.chartContainer').id = 'basic'
        test01();
     })

     document.querySelector('.data').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.chartContainer').id = 'data'
        test02();
     })
};
