import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'; // You'll need a chart library

export default function Diagram({ data, title }) {
  // State to hold the chart
  const [chart, setChart] = useState(null);

  // Function to initialize the chart
  const initializeChart = (labels, values) => {
    const ctx = document.getElementById('waterLevelChart').getContext('2d');

    // Check if there's an existing chart, and destroy it if it exists
    if (chart) {
      chart.destroy();
    }

    const chartConfig = {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Water Levels',
            data: values,
            borderColor: 'blue',
          },
        ],
      },
    };

    const newChart = new Chart(ctx, chartConfig);
    setChart(newChart);
  };

  useEffect(() => {
    // Initialize the chart when the component mounts
    const labels = data.map((entry) => entry.timestamp);
    const values = data.map((entry) => entry.waterLevel);

    initializeChart(labels, values);
  }, [data]);

  return (
    <div>
      <h1>{title}</h1>
      <canvas id="waterLevelChart" width="400" height="200"></canvas>
    </div>
  );
}

// This is a simplified example of fetching data. You should replace it with your actual data fetching logic.
export async function getServerSideProps() {
  // Fetch your river water level data from your database or API
  const data = [
    { timestamp: '2023-10-01', waterLevel: 5.2 },
    { timestamp: '2023-10-02', waterLevel: 5.5 },
    { timestamp: '2023-10-03', waterLevel: 4.8 },
    // Add more data here
  ];

  return {
    props: {
      data,
    },
  };
}
