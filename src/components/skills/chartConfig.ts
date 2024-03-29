// チャートのデータとオプションの設定
export const DATA_INIT = {
  labels: [],
  datasets: [
    { 
      label: '',
      data: [],
    },
  ],
};

export const DATA_FRONTEND = {
  labels: ['HTML/CSS', 'JS', 'TS', 'Dart/Flutter', 'React', 'Next.js'],
  datasets: [
    {
      label: 'Front-end',
      data: [4, 4, 3, 3, 3, 1],
      backgroundColor: 'rgba(135, 206, 250, 0.2)', 
      borderColor: 'rgba(135, 206, 250, 1)', 
      borderWidth: 1, 
    },
  ],
};

export const DATA_BACKEND = {
  labels: ['Python', 'FastAPI', 'Rust', 'PostgreSQL', 'Ruby', 'Node.js'],
  datasets: [
    {
      label: 'Back-end',
      data: [4, 3, 1, 3, 2, 2], 
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)', 
      borderWidth: 1,
    },
  ],
};

export const DATA_DEVOPS = {
  labels: ['AWS', 'GCP', 'Azure', 'Docker', 'Git', 'Jira'],
  datasets: [
    {
      label: 'DevOps',
      data: [3, 2, 1, 3, 4, 3], 
      backgroundColor: 'rgba(102, 102, 0, 0.2)',
      borderColor: 'rgba(204, 204, 0, 1)',
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
          size: 14, 
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
          size: 16,
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
