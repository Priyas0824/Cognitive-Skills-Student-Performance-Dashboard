import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ labels, datasets }) {
  const data = { labels, datasets };
  const options = { responsive: true, plugins: { legend: { position: 'top' } } };
  return <Bar data={data} options={options} />;
}
