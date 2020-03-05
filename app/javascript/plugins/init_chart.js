import Chart from 'chart.js';

const REVIEWS_TYPE = ['Speak slower',
                      'Great pace',
                      'Speak louder',
                      'Great tone',
                      'Look at observers',
                      'Good eye contact',
                      'Stay still',
                      'Good gesture',
                      'Smile',
                      'Nice smile'];

const REVIEWS_TYPE_SIMPLE = ['Pace',
                             'Tone',
                             'Eye contact',
                             'Body language',
                             'Smile'];

const BACKGROUND_COLOR_CHART2 = 'rgba(0, 0, 0, 0.0)'

const executeChart = () => {
  const chartDiv1 = document.getElementById('chart1');

  if (chartDiv1) {
    const ctx = document.getElementById('myChart1').getContext('2d');

    const reviewsType = JSON.parse(chartDiv1.dataset.reviews);
    const reviewsValues = Object.values(reviewsType)

    Chart.defaults.global.defaultFontColor = '#8bbaba';

    const myChart1 = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: REVIEWS_TYPE,
        datasets: [{
          label: '# of Reviews',
          data: reviewsValues,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(160, 129, 50, 0.2)',
            'rgba(42, 200, 64, 0.2)',
            'rgba(120, 190, 230, 0.2)',
            'rgba(224, 66, 135, 0.2)',
            'rgba(255, 172, 84, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(42, 200, 64, 1)',
            'rgba(120, 190, 230, 1)',
            'rgba(224, 66, 135, 1)',
            'rgba(255, 172, 84, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {position: 'right'},
        scale: {
          display: false,
        },
        scales: {
          yAxes: [{
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
                display: false
            },
          }],
        }
      }
    });
  }

  const chartDiv2 = document.getElementById('chart2');

  if (chartDiv2) {
    Chart.defaults.global.defaultFontSize = 20;
    Chart.defaults.global.defaultFontColor = '#8BBABA';
    const ctx2 = document.getElementById('myChart2').getContext('2d');

    const myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4', 'Session 5'],
        datasets: [{
          label: REVIEWS_TYPE_SIMPLE[0],
          data: [0, 1, 3, 5, 2],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: BACKGROUND_COLOR_CHART2,
          borderWidth: 1
        }, {
          label: REVIEWS_TYPE_SIMPLE[1],
          data: [3, 3, 9, 15, 17],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: BACKGROUND_COLOR_CHART2,
          borderWidth: 1
        }, {
          label: REVIEWS_TYPE_SIMPLE[2],
          data: [4, 2, 7, 8, 15],
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: BACKGROUND_COLOR_CHART2,
          borderWidth: 1
        }, {
          label: REVIEWS_TYPE_SIMPLE[3],
          data: [2, 4, 6, 13, 12],
          borderColor: 'rgba(150, 199, 32, 1)',
          backgroundColor: BACKGROUND_COLOR_CHART2,
          borderWidth: 1
        }, {
          label: REVIEWS_TYPE_SIMPLE[4],
          data: [1, 5, 6, 10, 13],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: BACKGROUND_COLOR_CHART2,
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          labels: {
            fontSize: 20,
            fontColor: '#8BBABA'
          }
        },
        scales: {
          scaleLlabels: {
            fontSize: 18,
            fontColor: '#8BBABA'
          }
        }
      }
    });
  }
};

export { executeChart };
