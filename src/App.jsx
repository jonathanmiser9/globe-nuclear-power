import GlobeComponent from './components/GlobeComponent'
import LineChartComponent from './components/LineChartComponent'
import BarChartComponent from './components/BarChartComponent'
import GrowthChart from './components/GrowthChart'
import InfoPanel from './components/InfoPanel'
import EnergyMixChart from './components/EnergyMixChart'
import { globeData, yearlyTotals, topProducers, growthData, energyMixData } from './data/mockData'

function App() {
  return (
    <div className="dashboard">
      <h1>Global Nuclear Energy Production 2018-2023</h1>
      <GlobeComponent data={globeData} />
      <EnergyMixChart data={energyMixData} />
      <InfoPanel />
      <div className="charts-grid">
        <LineChartComponent data={yearlyTotals} />
        <BarChartComponent data={topProducers} />
        <GrowthChart data={growthData} />
      </div>
    </div>
  )
}

export default App
