const ctx2 = document.getElementById('chartSMK').getContext('2d');

const nilaiKelas = [82.88, 86.42, 84.85];

let nilaiTotal = 0;
nilaiKelas.forEach((e) => {
  nilaiTotal += e;
});
nilaiTotal = (nilaiTotal / nilaiKelas.length).toFixed(2);

const chartSMK = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['10', '11', '12'],
    datasets: [{
      label: 'Nilai Rata²',
      data: nilaiKelas,
      backgroundColor: '#0563bb7a',
      borderColor: '#0563bb7a',
      fill: true,
      pointHitRadius: 5
    }]
  },
  options: {
    aspectRatio: 1.3,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Kelas'
        }
      },
      y: {
        display: true,
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Nilai Rata-rata'
      },
      legend: {
        display: true
      },
      subtitle: {
        display: true,
        text: `Rata-rata Total: ${nilaiTotal}`
      }
    },
    barThickness: 30
  }
});