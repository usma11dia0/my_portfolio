  // チャートのデータとオプションの設定
export const data_frontend = {
  labels: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Dart/Flutter'],
  datasets: [
    {
      label: 'Front-end',
      data: [4, 4, 2, 3, 2, 3],
      backgroundColor: 'rgba(135, 206, 250, 0.2)', 
      borderColor: 'rgba(135, 206, 250, 1)', 
      borderWidth: 1, 
      pointBackgroundColor: 'rgba(135, 206, 250, 0.6)', 
      pointBorderColor: 'rgba(135, 206, 250, 1)', 
      pointHoverBackgroundColor: 'rgba(135, 206, 250, 1)', 
      pointHoverBorderColor: 'rgba(135, 206, 250, 1)', 
    },
  ],
};

export const data_backend = {
  labels: ['python', 'Django', 'Ruby', 'Ruby on Rails', 'NodeJS', 'Express'],
  datasets: [
    {
      label: 'Back-end',
      data: [4, 2, 2, 2, 3, 3], 
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)', 
      borderWidth: 1,
    },
  ],
};

export const data_devops = {
  labels: ['AWS', 'GCP', 'Azure', 'Docker', 'Git', 'Linux'],
  datasets: [
    {
      label: 'DevOps',
      data: [3, 2, 1, 3, 4, 3], 
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
      borderColor: 'rgba(255, 165, 0, 1)',
      borderWidth: 1,
    },
  ],
};

export const options = {
  scales: {
    r: {
      min: 0, 
      max: 5, 
      angleLines: {
        display: true,
        color: "rgba(255, 255, 255, 0.3)" 
      },
      pointLabels: {
        font: {
          size: 16, 
        }
      },
      grid: {
        color: "rgba(255, 255, 255, 0.3)" 
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.5)',
        backdropColor: 'transparent',
        stepSize: 1,
        font: {
          size: 16,
        }
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: 18,
        },
      }
    },
    tooltip: {
      titleColor: 'white',
      bodyColor: 'white',
      backgroundColor: 'rgba(50, 50, 50, 0.9)', 
      borderColor: 'rgba(255, 255, 255, 0.3)',
      borderWidth: 1
    }
  },
  maintainAspectRatio: false
};
