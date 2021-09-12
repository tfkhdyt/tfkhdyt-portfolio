const ctx = document.getElementById('myChart').getContext('2d');

const ips = [3.50, 3.83];

let ipk = 0;
ips.forEach((e) => {
  ipk += e;
});
ipk = (ipk / ips.length).toFixed(2);

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [{
      label: 'IPS',
      data: ips,
      backgroundColor: '#0563BB',
      borderColor: '#0563BB',
      hoverBackgroundColor: 'rgb(5,72,134)',
      hoverBorderColor: 'rgb(5,72,134)'
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Semester'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'IPS'
        },
        beginAtZero: true,
        min: 0,
        max: 4.0
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Indeks Prestasi Semester'
      },
      legend: {
        display: true
      },
      subtitle: {
        display: true,
        text: `IPK: ${ipk} \n`
      }
    }
  }
});