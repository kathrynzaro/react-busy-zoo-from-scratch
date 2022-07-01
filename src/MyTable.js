import React from 'react';
import MaterialTable from 'material-table';
import { animals } from './data';

export default function MyTable() {
  return (
    <div>
      <MaterialTable
        columns={
          [
            { title: 'name', field: 'first_name' },
            { title: 'species', field: 'animal' },
            { title: 'gender', field: 'gender' },
            { title: 'buzzword', field: 'buzzword' },
          ]
        }
        data={animals}
        title="animals"
        options={{
          headerStyle: {
            background: 'salmon',
            border: '3px solid whitesmoke'
          },
          rowStyle: {
            background: 'lightsalmon',
            border: '3px solid whitesmoke'
          }
        }}
      />
    </div>
  );
}
