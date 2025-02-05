import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GrowthChart = ({ data }) => {
  const top10Growth = data.slice(0, 10);
  
  return (
    <div className="chart-container">
      <h2 className="chart-title">Top 10 Growth Rates (2018-2023)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={top10Growth}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2e35" />
          <XAxis 
            dataKey="country" 
            stroke="#fff"
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis 
            stroke="#fff"
            label={{ value: 'Growth %', angle: -90, position: 'insideLeft', fill: '#fff' }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1d25', border: 'none' }}
            formatter={(value) => [`${value}%`, 'Growth Rate']}
          />
          <Legend />
          <Bar 
            dataKey="growth" 
            fill="#00bfff" 
            name="5-Year Growth Rate"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;
