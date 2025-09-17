import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import charts without SSR
const BarChart = dynamic(() => import('../components/BarChart'), { ssr: false });
const ScatterChart = dynamic(() => import('../components/ScatterChart'), { ssr: false });
const RadarChart = dynamic(() => import('../components/RadarChart'), { ssr: false });
import StudentTable from '../components/StudentTable';

export default function Home() {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('/data/students.json')
      .then(res => res.json())
      .then(json => {
        setData(json);
        if (json.length) setSelectedId(json[0].id || json[0].student_id); // default first student ID (adjust key if needed)
      })
      .catch(err => console.error('Failed to load:', err));
  }, []);

  const avg = field =>
    data.length
      ? (data.reduce((s, r) => s + (+r[field]), 0) / data.length).toFixed(1)
      : 0;

  const labels = ['Comprehension', 'Attention', 'Focus', 'Retention'];
  const avgSkills = [
    avg('comprehension'),
    avg('attention'),
    avg('focus'),
    avg('retention')
  ].map(Number);

  const barDatasets = [
    { label: 'Avg Skill', data: avgSkills, backgroundColor: 'rgba(54, 162, 235, 0.6)' },
    { label: 'Avg Score', data: Array(4).fill(Number(avg('assessment_score'))), backgroundColor: 'rgba(75, 192, 192, 0.6)' }
  ];

  const scatterPoints = data.map(s => ({
    x: s.attention,
    y: s.assessment_score
  }));

  const selectedStudent = data.find(s => s.id === selectedId || s.student_id === selectedId);

  // Handler for dropdown change, parse ID as string to match JSON data keys
  const handleSelectChange = e => setSelectedId(e.target.value);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Cognitive Skills & Student Performance Dashboard
      </h1>

      {/* Overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded shadow bg-white text-center">
          <div className="text-sm text-gray-500">Avg Score</div>
          <div className="text-3xl font-semibold">{avg('assessment_score')}</div>
        </div>
        <div className="p-4 rounded shadow bg-white text-center">
          <div className="text-sm text-gray-500">Avg Engagement</div>
          <div className="text-3xl font-semibold">{avg('engagement_time')}</div>
        </div>
        <div className="p-4 rounded shadow bg-white text-center">
          <div className="text-sm text-gray-500">Total Students</div>
          <div className="text-3xl font-semibold">{data.length}</div>
        </div>
      </div>

      {/* Student Selector */}
      {data.length > 0 && (
        <div className="flex justify-center mb-6">
          <select
            className="p-2 border rounded shadow"
            value={selectedId}
            onChange={handleSelectChange}
          >
            {data.map(s => (
              <option key={s.id || s.student_id} value={s.id || s.student_id}>
                {s.name} (Class {s.class})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 rounded shadow bg-white">
          <BarChart
            labels={labels}
            datasets={barDatasets}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                  grid: { color: '#e0e0e0' }
                },
                x: { grid: { color: '#e0e0e0' } }
              }
            }}
          />
        </div>
        <div className="p-4 rounded shadow bg-white">
          <ScatterChart
            dataPoints={scatterPoints}
            options={{
              responsive: true,
              scales: {
                x: {
                  title: { display: true, text: 'Attention' },
                  min: 0,
                  max: 100,
                  grid: { color: '#e0e0e0' }
                },
                y: {
                  title: { display: true, text: 'Assessment Score' },
                  min: 0,
                  max: 100,
                  grid: { color: '#e0e0e0' }
                }
              }
            }}
          />
        </div>
      </div>

      {/* Table + Radar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 p-4 rounded shadow bg-white">
          <StudentTable rows={data} />
        </div>
        <div className="p-4 rounded shadow bg-white">
          {selectedStudent ? (
            <RadarChart
              labels={labels}
              values={[
                selectedStudent.comprehension,
                selectedStudent.attention,
                selectedStudent.focus,
                selectedStudent.retention
              ]}
              options={{
                responsive: true,
                scales: {
                  r: {
                    min: 0,
                    max: 100,
                    grid: { color: '#e0e0e0' },
                    angleLines: { color: '#ccc' }
                  }
                },
                elements: {
                  line: { borderWidth: 3, borderColor: 'rgba(255, 99, 132, 0.7)' },
                  point: { radius: 5, backgroundColor: 'rgba(255, 99, 132, 0.7)' }
                }
              }}
            />
          ) : (
            <p>No student selected</p>
          )}
        </div>
      </div>
    </div>
  );
}
