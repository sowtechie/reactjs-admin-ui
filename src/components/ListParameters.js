import React, { forwardRef } from "react";
import "./Namespaces.scss";
import MaterialTable, { Column } from 'material-table';
import httpParameters from '../data/namespaces.json'

export default class Namespaces extends React.Component {

  render() {
    return (
      <div className="content-wrapper">
        {/* <h2 className="header">
          Http Parameters
                </h2>
        <hr></hr> */}
        <div>
          <MaterialTableDemo />
        </div>
      </div>
    )
  }
}

export function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Key', field: 'key' },
      { title: 'DisplayName', field: 'displayName' },
      { title: 'HttpParameterName', field: 'httpParameterName' },
      { title: 'Type', field: 'type' },
      { title: 'Namespace', field: 'namespace' },
    ],
    data: httpParameters
  });

  return (
    <MaterialTable
      title="Http Parameters"
      columns={state.columns}
      data={state.data}
      // editable={{
      //   onRowAdd: (newData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         setState((prevState) => {
      //           const data = [...prevState.data];
      //           data.push(newData);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      //   onRowUpdate: (newData, oldData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         if (oldData) {
      //           setState((prevState) => {
      //             const data = [...prevState.data];
      //             data[data.indexOf(oldData)] = newData;
      //             return { ...prevState, data };
      //           });
      //         }
      //       }, 600);
      //     }),
      //   onRowDelete: (oldData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         setState((prevState) => {
      //           const data = [...prevState.data];
      //           data.splice(data.indexOf(oldData), 1);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      // }}
    />
  );
}