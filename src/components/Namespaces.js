import React, { forwardRef } from "react";
import "./Namespaces.scss";
import MaterialTable, { Column } from 'material-table';

export default class Namespaces extends React.Component {

    render() {
        const httpParameters = [
            {
                "key": "http",
                "displayName": "Accept Ranges in bytes/kilobytes",
                "Type": "Header",
                "HttpParameterName": "Accept-Ranges",
                "namespace": "HTTP"
            },
            {
                "key": "verizon-billing",
                "displayName": "Verizon Billing",
                "Type": "cookie",
                "HttpParameterName": "cache-control",
                "namespace": "generic"
            },
            {
                "key": "edgecast",
                "displayName": "Edgecast",
                "Type": "cookie",
                "HttpParameterName": "edgecast",
                "namespace": "generic"
            }
        ];

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
  const [state, setState] = React.useState({
    columns: [
      { title: 'Key', field: 'key' },
      { title: 'Namespace', field: 'displayName' },
    ],
    data: [
      {
          "key": "http",
          "displayName": "Accept Ranges in bytes/kilobytes",
          "Type": "Header",
          "HttpParameterName": "Accept-Ranges",
          "namespace": "HTTP"
      },
      {
          "key": "verizon-billing",
          "displayName": "Verizon Billing",
          "Type": "cookie",
          "HttpParameterName": "cache-control",
          "namespace": "generic"
      },
      {
          "key": "edgecast",
          "displayName": "Edgecast",
          "Type": "cookie",
          "HttpParameterName": "edgecast",
          "namespace": "generic"
      }
  ]
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
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}