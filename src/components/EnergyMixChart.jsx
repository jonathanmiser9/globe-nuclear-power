import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EnergyMixChart = ({ data }) => {
  const top5 = data.slice(0, 5);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Nuclear vs Total Electricity Production (2023)</h2>
      <div className="chart-explanation">
        Nuclear Share = (Nuclear Production / Total Electricity Production) × 100%
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={top5}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2e35" />
          <XAxis 
            dataKey="country" 
            stroke="#fff"
          />
          <YAxis 
            stroke="#fff"
            label={{ 
              value: 'Electricity Production (TWh)', 
              angle: -90, 
              position: 'insideLeft', 
              fill: '#fff' 
            }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1d25', border: 'none' }}
            formatter={(value, name) => [
              `${value.toFixed(1)} TWh`,
              name === 'other' ? 'Other Sources' : 'Nuclear'
            ]}
          />
          <Legend />
          <Bar 
            dataKey="nuclear" 
            stackId="a" 
            fill="#00ff00" 
            name="Nuclear"
          />
          <Bar 
            dataKey="other" 
            stackId="a" 
            fill="#666666" 
            name="Other Sources"
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="chart-notes">
        <ul>
          <li><strong>United States:</strong> Large total production (4,258 TWh) with 775 TWh nuclear (18.2%)</li>
          <li><strong>France:</strong> Smaller total production (511 TWh) but 320 TWh nuclear (62.7%)</li>
          <li><strong>China:</strong> Massive total production (9,016 TWh) with 451 TWh nuclear (5.0%)</li>
        </ul>
      </div>
    </div>
  );
};

export default EnergyMixChart;
