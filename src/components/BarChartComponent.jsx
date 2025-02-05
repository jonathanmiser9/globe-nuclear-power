import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => {
  return (
    <div className="chart-container">
      <h2 className="chart-title">Top 10 Nuclear Energy Producers (2023)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
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
            label={{ value: 'TWh', angle: -90, position: 'insideLeft', fill: '#fff' }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1d25', border: 'none' }}
            formatter={(value) => [`${value} TWh`, 'Production']}
          />
          <Legend />
          <Bar 
            dataKey="yearly_output[4]" 
            fill="#00ff00" 
            name="2023 Production"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
