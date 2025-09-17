// components/ScatterChart.js
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export default function ScatterChart({ dataPoints }) {
  const data = { datasets: [{ label: 'Attention vs Score', data: dataPoints, pointRadius: 4 }] };
  const options = { scales: { x: { title: { display: true, text: 'Attention' } }, y: { title: { display: true, text: 'Assessment Score' } } } };
  return <div className="w-full"><Scatter data={data} options={options} /></div>;
}
