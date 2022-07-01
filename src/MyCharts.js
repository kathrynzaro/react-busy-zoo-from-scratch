import React from 'react';
import { VictoryBar, VictoryChart } from 'victory';


const data = [
  { astrosign: 'capricorn', rating: 1 },
  { astrosign: 'aquarius', rating: 1 },
  { astrosign: 'pisces', rating: 8 },
  { astrosign: 'aries', rating: 5 },
  { astrosign: 'taurus', rating: 3 },
  { astrosign: 'gemini', rating: 7 },
  { astrosign: 'cancer', rating: 10 },
  { astrosign: 'leo', rating: 7 },
  { astrosign: 'virgo', rating: 4 },
  { astrosign: 'libra', rating: 9 },
  { astrosign: 'scorpio', rating: 9 },
  { astrosign: 'sagittarius', rating: 7 }
];

export default function MyCharts() {
  return (
    <div className='chart' style={{ width: '500px', padding: '20px' }}>
      <VictoryChart domainPadding={15} >
        <VictoryBar
          horizontal={true}
          height={900}
          style={{ data: { fill: 'thistle' } }}
          barWidth={8}
          data={data}
          x={row => String(row.astrosign)}
          y="rating"
        />

      </VictoryChart>
    </div>
  );
}
