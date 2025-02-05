import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ data }) => {
  return (
    <div className="chart-container">
      <h2 className="chart-title">Global Nuclear Energy Production Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2e35" />
          <XAxis 
            dataKey="year" 
            stroke="#fff"
          />
          <YAxis 
            stroke="#fff"
            label={{ value: 'TWh', angle: -90, position: 'insideLeft', fill: '#fff' }}
            domain={['auto', 'auto']}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1d25', border: 'none' }}
            formatter={(value) => [`${value} TWh`, 'Production']}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="production" 
            stroke="#00ff00" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
