import React from 'react';

const InfoPanel = () => {
  return (
    <div className="chart-container">
      <h2 className="chart-title">Recent Developments</h2>
      <div className="info-content">
        <ul>
          <li>
            <strong>France:</strong> While maintaining the world's highest nuclear share, experienced reduced output in 2022 
            due to extended maintenance and corrosion inspections. Production recovered in 2023 as reactors returned to service.
          </li>
          <li>
            <strong>China:</strong> Continues rapid nuclear expansion with new reactors coming online yearly.
          </li>
          <li>
            <strong>Japan:</strong> Steady increase in nuclear generation as more reactors clear post-Fukushima safety requirements.
          </li>
          <li>
            <strong>Ukraine:</strong> Significant decrease in production due to ongoing conflict affecting operations and safety.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoPanel;
