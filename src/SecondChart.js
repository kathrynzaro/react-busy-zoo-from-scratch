import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';

const data = [
  { person: 'kat', age: 28 },
  { person: 'joe', age: 25 },
  { person: 'cam', age: 31 },
  { person: 'rob', age: 31 },
  { person: 'mom', age: 64 },
  { person: 'dad', age: 67 },
  { person: 'renly', age: 4 },
  { person: 'jack', age: 3 }
];

export default function SecondChart() {
  return (
    <div>
      <VictoryChart domainPadding={15} >
        <VictoryBar

          style={{ data: { fill: 'lightcoral' } }}
          barWidth={({ index }) => index * 2 + 8}
          data={data}
          x={row => String(row.person)}
          y="age"
        />

      </VictoryChart>
    </div>
  );
}