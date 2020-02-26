import Chart from 'chart.js';

const mapDiv = document.getElementById('chart');

const reviewType1 = mapDiv.attributes.datatype1.value;
const reviewType2 = mapDiv.attributes.datatype2.value;
const reviewType3 = mapDiv.attributes.datatype3.value;
const reviewType4 = mapDiv.attributes.datatype4.value;
const reviewType5 = mapDiv.attributes.datatype5.value;

console.log(reviewType1);
console.log(reviewType2);
console.log(reviewType3);
console.log(reviewType4);
console.log(reviewType5);

const ctx = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontColor = '#8bbaba';

const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Speak too fast', 'Review_2', 'Review_3', 'Review_4', 'Review_5'],
        datasets: [{
            label: '# of Reviews',
            data: [reviewType1, reviewType2, reviewType3, reviewType4, reviewType5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

export { myChart };
