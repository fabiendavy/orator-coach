import Chart from 'chart.js';

const executeChart = () => {
  const chartDiv = document.getElementById('chart');

  if (chartDiv) {
    const ctx = document.getElementById('myChart').getContext('2d');

    const reviewsType = JSON.parse(chartDiv.dataset.reviews);
    const reviewsValues = Object.values(reviewsType)

    Chart.defaults.global.defaultFontColor = '#8bbaba';

    const myChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['Speak slower',
                 'Great pace',
                 'Speak louder',
                 'Great tone',
                 'Look at observers',
                 'Good eye contact',
                 'Stay still',
                 'Good gesture',
                 'Smile',
                 'Nice smile'],
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
};

export { executeChart };
