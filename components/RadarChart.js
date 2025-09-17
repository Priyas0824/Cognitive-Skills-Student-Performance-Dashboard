// components/RadarChart.js
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarChart({ labels, values }) {
  const data = {
    labels,
    datasets: [{
      label: 'Profile',
      data: values,
      fill: true,
      tension: 0.1,
      pointRadius: 3
    }]
  };
  const options = { scales: { r: { suggestedMin: 0, suggestedMax: 100 } } };
  return <div className="w-full"><Radar data={data} options={options} /></div>;
}
