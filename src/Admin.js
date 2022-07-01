import React from 'react';
import MyTable from './MyTable';
import MyCharts from './MyCharts';
import SecondChart from './SecondChart';

export default function Admin() {
  return (
    <div className='admin'>
      <h2>animals</h2>
      <MyTable />
      <h2>signs and their ratings</h2>
      <p>based on personal experience</p>
      <MyCharts />
      <h2>how old are my people?</h2>
      <SecondChart />
    </div>
  );
}
