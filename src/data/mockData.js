// Data with total electricity production
export const globeData = [
  // Existing entries remain...
  { 
    country: "France", 
    lat: 46.2276, 
    lng: 2.2137, 
    nuclear_share: 62.7,
    reactors: 56,
    capacity_GW: 61.4,
    yearly_output: [379.5, 335.4, 335.0, 360.7, 279.0, 320.4],
    total_electricity: 510.9,
    notes: "Highest nuclear share globally, with nuclear as primary electricity source"
  },
  { 
    country: "United States", 
    lat: 37.0902, 
    lng: -95.7129, 
    nuclear_share: 18.2,
    reactors: 93,
    capacity_GW: 95.5,
    yearly_output: [807.1, 809.4, 789.9, 778.2, 771.6, 775.0],
    total_electricity: 4258.2,
    notes: "Largest total nuclear production, but diverse energy mix reduces share"
  },
  { 
    country: "China", 
    lat: 35.8617, 
    lng: 104.1954, 
    nuclear_share: 5.0,
    reactors: 55,
    capacity_GW: 53.3,
    yearly_output: [277.1, 348.4, 366.2, 407.5, 441.3, 450.8],
    total_electricity: 9015.9,
    notes: "Rapid nuclear growth, but massive total electricity production"
  },
  { 
    country: "Russia", 
    lat: 61.5240, 
    lng: 105.3188, 
    nuclear_share: 20.6,
    reactors: 37,
    capacity_GW: 29.6,
    yearly_output: [191.3, 195.5, 201.3, 208.6, 213.7, 215.2],
    total_electricity: 1044.9,
    notes: "Steady increase in production"
  },
  { 
    country: "South Korea", 
    lat: 35.9078, 
    lng: 127.7669, 
    nuclear_share: 27.4,
    reactors: 24,
    capacity_GW: 24.5,
    yearly_output: [127.1, 138.8, 152.6, 158.3, 160.2, 158.4],
    total_electricity: 578.5,
    notes: "Stable production with slight variations"
  },
  { 
    country: "Canada", 
    lat: 56.1304, 
    lng: -106.3468, 
    nuclear_share: 14.6,
    reactors: 19,
    capacity_GW: 13.6,
    yearly_output: [94.5, 91.2, 92.2, 92.8, 93.1, 92.9],
    total_electricity: 636.3,
    notes: "Consistent production levels"
  },
  { 
    country: "Ukraine", 
    lat: 48.3794, 
    lng: 31.1656, 
    nuclear_share: 55.0,
    reactors: 15,
    capacity_GW: 13.1,
    yearly_output: [79.5, 71.5, 69.1, 55.0, 51.1, 48.4],
    total_electricity: 88.0,
    notes: "Reduced output due to conflict-related impacts"
  },
  { 
    country: "Japan", 
    lat: 36.2048, 
    lng: 138.2529, 
    nuclear_share: 7.2,
    reactors: 33,
    capacity_GW: 31.7,
    yearly_output: [49.3, 43.1, 41.9, 61.3, 69.8, 75.2],
    total_electricity: 1044.4,
    notes: "Gradual restart of reactors post-Fukushima"
  },
  // New entries...
  {
    country: "India",
    lat: 20.5937,
    lng: 78.9629,
    nuclear_share: 3.2,
    reactors: 22,
    capacity_GW: 6.8,
    yearly_output: [35.4, 40.7, 43.0, 40.4, 39.9, 41.2],
    total_electricity: 1287.5,
    notes: "Expanding nuclear program with indigenous technology"
  },
  {
    country: "United Kingdom",
    lat: 55.3781,
    lng: -3.4360,
    nuclear_share: 14.8,
    reactors: 9,
    capacity_GW: 5.9,
    yearly_output: [59.1, 51.0, 45.7, 42.9, 45.3, 43.8],
    total_electricity: 295.9,
    notes: "Aging fleet with new projects under development"
  },
  {
    country: "Spain",
    lat: 40.4637,
    lng: -3.7492,
    nuclear_share: 20.8,
    reactors: 7,
    capacity_GW: 7.1,
    yearly_output: [53.4, 55.8, 55.7, 54.2, 54.0, 54.3],
    total_electricity: 261.1,
    notes: "Stable production with planned phase-out"
  },
  {
    country: "Sweden",
    lat: 60.1282,
    lng: 18.6435,
    nuclear_share: 30.8,
    reactors: 6,
    capacity_GW: 6.9,
    yearly_output: [65.8, 64.3, 47.3, 51.4, 50.8, 52.2],
    total_electricity: 169.5,
    notes: "Important part of low-carbon electricity mix"
  },
  {
    country: "Belgium",
    lat: 50.8503,
    lng: 4.3517,
    nuclear_share: 52.3,
    reactors: 7,
    capacity_GW: 5.9,
    yearly_output: [27.3, 41.4, 32.8, 50.8, 41.1, 43.2],
    total_electricity: 82.6,
    notes: "High nuclear share with phase-out debate"
  },
  {
    country: "Czech Republic",
    lat: 49.8175,
    lng: 15.4730,
    nuclear_share: 36.6,
    reactors: 6,
    capacity_GW: 3.9,
    yearly_output: [28.3, 28.6, 28.4, 29.0, 29.3, 29.5],
    total_electricity: 80.6,
    notes: "Plans for new nuclear capacity"
  },
  {
    country: "Finland",
    lat: 61.9241,
    lng: 25.7482,
    nuclear_share: 34.6,
    reactors: 5,
    capacity_GW: 4.4,
    yearly_output: [21.9, 22.9, 22.4, 22.7, 23.5, 24.1],
    total_electricity: 69.7,
    notes: "Recent completion of new reactor"
  },
  {
    country: "Switzerland",
    lat: 46.8182,
    lng: 8.2275,
    nuclear_share: 29.3,
    reactors: 4,
    capacity_GW: 3.0,
    yearly_output: [24.4, 25.3, 23.0, 19.1, 18.5, 19.2],
    total_electricity: 65.5,
    notes: "Gradual phase-out policy"
  },
  {
    country: "Brazil",
    lat: -14.2350,
    lng: -51.9253,
    nuclear_share: 2.4,
    reactors: 2,
    capacity_GW: 1.9,
    yearly_output: [15.7, 16.1, 13.2, 14.8, 14.9, 15.1],
    total_electricity: 629.2,
    notes: "Small but stable nuclear program"
  },
  {
    country: "South Africa",
    lat: -30.5595,
    lng: 22.9375,
    nuclear_share: 6.1,
    reactors: 2,
    capacity_GW: 1.9,
    yearly_output: [10.5, 13.6, 11.5, 12.2, 12.0, 11.8],
    total_electricity: 193.4,
    notes: "Only nuclear power plant in Africa"
  },
  {
    country: "Argentina",
    lat: -38.4161,
    lng: -63.6167,
    nuclear_share: 7.2,
    reactors: 3,
    capacity_GW: 1.6,
    yearly_output: [6.5, 7.9, 10.0, 10.2, 10.0, 10.1],
    total_electricity: 140.3,
    notes: "Developing domestic nuclear technology"
  },
  {
    country: "Mexico",
    lat: 23.6345,
    lng: -102.5528,
    nuclear_share: 3.8,
    reactors: 2,
    capacity_GW: 1.6,
    yearly_output: [13.2, 10.9, 10.9, 11.6, 11.5, 11.4],
    total_electricity: 300.0,
    notes: "Limited but stable nuclear program"
  },
  {
    country: "Pakistan",
    lat: 30.3753,
    lng: 69.3451,
    nuclear_share: 7.8,
    reactors: 6,
    capacity_GW: 3.3,
    yearly_output: [9.3, 9.1, 9.6, 15.8, 16.5, 17.2],
    total_electricity: 220.5,
    notes: "Growing nuclear capacity with Chinese support"
  }
];

// Rest of the exports remain the same...
export const yearlyTotals = [
  { year: "2018", production: 2563 },
  { year: "2019", production: 2657 },
  { year: "2020", production: 2553 },
  { year: "2021", production: 2653 },
  { year: "2022", production: 2500 },
  { year: "2023", production: 2530 }
];

// Calculate topProducers based on latest year (index 5 of yearly_output)
export const topProducers = [...globeData]
  .sort((a, b) => b.yearly_output[5] - a.yearly_output[5])
  .slice(0, 10);

// Calculate growth data
export const growthData = globeData.map(country => ({
  country: country.country,
  growth: ((country.yearly_output[5] - country.yearly_output[0]) / country.yearly_output[0] * 100).toFixed(1),
  notes: country.notes
})).sort((a, b) => b.growth - a.growth);

// Calculate energy mix data
export const energyMixData = globeData.map(country => ({
  country: country.country,
  nuclear: country.yearly_output[5],
  total: country.total_electricity,
  nuclear_share: country.nuclear_share,
  other: country.total_electricity - country.yearly_output[5]
})).sort((a, b) => b.nuclear - a.nuclear);
