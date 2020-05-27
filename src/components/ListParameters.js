import React, { forwardRef } from "react";
import "./Namespaces.scss";
import MaterialTable, { Column } from 'material-table';
import namespaces from '../data/namespaces.json'
import httpParameters from '../data/httpParameters.json'

export default class Namespaces extends React.Component {

  render() {
    return (
      <div className="content-wrapper">
        <h2 className="header">
          Http Parameters
                </h2>
        <hr></hr>
        <div>
          <MaterialTableDemo />
        </div>
      </div>
    )
  }
}

export function MaterialTableDemo() {
  let savedHttpParameters = localStorage.getItem('httpParameters');
  if (savedHttpParameters) {
    savedHttpParameters = JSON.parse(savedHttpParameters);
  } else {
    savedHttpParameters = httpParameters;
  }

  let savedNamespaces = localStorage.getItem('namespaces');
  if (savedNamespaces) {
    savedNamespaces = JSON.parse(savedNamespaces);
  } else {
    savedNamespaces = namespaces;
  }

  const DataNamespaces = savedNamespaces.map(h => h.namespace);
  let nsLookup = {};
  DataNamespaces.forEach(ns => {
    nsLookup[ns] = ns;
  });

  console.log(JSON.stringify(nsLookup))

  const { useState } = React;

  const [columns, setColumns] = useState([
      { title: 'Key', field: 'key' },
      { title: 'DisplayName', field: 'displayName' },
      { title: 'HttpParameterName', field: 'httpParameterName' },
      { title: 'Type', field: 'type', lookup: {'Header': 'Header', 'Cookie': 'Cookie'} },
      { title: 'Namespace', field: 'namespace', lookup: nsLookup}
  ]);

  const [data, setData] = useState(savedHttpParameters);

  return (
    <MaterialTable
      title="Http Parameters"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              // setState((prevState) => {
                // const data = [...prevState.data];
                setData([...data, newData]);
                data.push(newData);
                localStorage.setItem('httpParameters', JSON.stringify(data))
                // return { ...prevState, data };
              // });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              // if (oldData) {
                // setState((prevState) => {
                  // const data = [...prevState.data];
                  // data[data.indexOf(oldData)] = newData;
                  // localStorage.setItem('httpParameters', JSON.stringify(data))
                //   return { ...prevState, data };
                // });
              // }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
              // setState((prevState) => {
              //   const data = [...prevState.data];
              //   data.splice(data.indexOf(oldData), 1);
              //   localStorage.setItem('httpParameters', JSON.stringify(data))
              //   return { ...prevState, data };
              // });
            }, 600);
          }),
      }}
    />
  );
}