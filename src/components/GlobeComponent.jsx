import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';

const GlobeComponent = ({ data }) => {
  const globeEl = useRef();

  useEffect(() => {
    // Slower rotation for better visibility
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;
    
    const globe = globeEl.current;
    // Adjusted altitude for better overview
    globe.pointOfView({ altitude: 2.0 });
  }, []);

  // Adjusted color scale for better visibility of smaller producers
  const colorScale = d3.scaleSequential()
    .domain([0, d3.max(data, d => d.yearly_output[5])])
    .interpolator(d3.interpolateYlOrRd);

  // Adjusted point size calculation for better visibility of smaller points
  const getPointRadius = d => {
    const output = d.yearly_output[5];
    // Logarithmic scale to make smaller points more visible
    return Math.max(Math.log(output) * 0.8, 1.5);
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Global Nuclear Energy Production</h2>
      <div style={{ height: '600px' }}>
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          pointsData={data}
          pointLat="lat"
          pointLng="lng"
          pointColor={d => colorScale(d.yearly_output[5])}
          pointRadius={getPointRadius}
          pointAltitude={0.06} // Reduced altitude to keep points closer to surface
          pointsMerge={false} // Ensure all points are rendered independently
          pointLabel={d => `
            <div class="tooltip">
              <b>${d.country}</b><br />
              Nuclear Share: ${d.nuclear_share}%<br />
              Active Reactors: ${d.reactors}<br />
              Capacity: ${d.capacity_GW} GW<br />
              2023 Output: ${d.yearly_output[5].toFixed(1)} TWh<br />
              5-Year Change: ${((d.yearly_output[5] - d.yearly_output[0]) / d.yearly_output[0] * 100).toFixed(1)}%<br />
              <small>${d.notes}</small>
            </div>
          `}
          atmosphereColor="#0c7abe"
          atmosphereAltitude={0.25}
        />
      </div>
      <div className="data-source">
        Data source: IAEA PRIS and IEA (2023)
      </div>
    </div>
  );
};

export default GlobeComponent;
