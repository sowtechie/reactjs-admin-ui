import React, { forwardRef } from "react";
import "./Namespaces.scss";
import MaterialTable, { Column } from 'material-table';
import httpParameters from '../data/namespaces.json'

export default class Namespaces extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <h2 className="header">
                    Namespaces
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
  const [state, setState] = React.useState({
    columns: [
      { title: 'Key', field: 'key' },
      { title: 'Namespace', field: 'displayName' },
    ],
    data: savedHttpParameters
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                localStorage.setItem('httpParameters', JSON.stringify(data))
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  localStorage.setItem('httpParameters', JSON.stringify(data))
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                localStorage.setItem('httpParameters', JSON.stringify(data))
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}