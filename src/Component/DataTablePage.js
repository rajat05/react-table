import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { mdbDatatable } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: 'Rajat pratap singh',
        position: 'System Architect',
        office: 'kathmandu',
        age: '25',
        date: '2011/04/25',
        salary: '1000'
      },
      {
        name: 'bihan rana ',
        position: 'Accountant',
        office: 'nepalgunj',
        age: '26',
        date: '2011/07/25',
        salary: '10000'
      },
      {
        name: 'sabin kharel',
        position: 'Junior Technical ',
        office: 'biratnagar',
        age: '29',
        date: '2009/01/12',
        salary: '100000'
      }

    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}


    />
  );
}

export default DatatablePage;