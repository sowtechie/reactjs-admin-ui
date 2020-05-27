// import React from 'react';
// import './HttpParameters.css';
// import { Button, Select, InputLabel, FormControl } from "@material-ui/core";
// import httpParameters from '../data/namespaces.json'
// import { timer } from 'rxjs';

// export default class HttpParameters extends React.Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {displayName: 'init val'};

//   //   // This binding is necessary to make `this` work in the callback
//   //   this.createNewParam = this.createNewParam.bind(this);
//   // }
//   constructor() {
//     super();
//     this.state = {
//       message: "my friend (from state)!",
//       key: '',
//       displayName: '',
//       type: '',
//       httpParameterName: '',
//       namespace: '',
//       message: ''
//     };
//     this.handleFormChange = this.handleFormChange.bind(this);
//     this.createNewParam = this.createNewParam.bind(this);
//     if (!localStorage.getItem('httpParameters')) {
//       localStorage.setItem('httpParameters', JSON.stringify(httpParameters));
//     }
//   }

//   // updateMessage() {
//   //   this.setState({
//   //     message: "my friend (from changed state)!"
//   //   });
//   // }

//   handleFormChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     })
//   }

//   createNewParam() {
//     let newHttpParameterObject = {};
//     newHttpParameterObject['httpParameterName'] = this.state.httpParameterName;
//     newHttpParameterObject['displayName'] = this.state.displayName;
//     newHttpParameterObject['type'] = this.state.type;
//     newHttpParameterObject['namespace'] = this.state.namespace;
//     newHttpParameterObject['key'] = this.state.key;

//     let savedParams = localStorage.getItem('httpParameters') || [];
//     if (savedParams) {
//       savedParams = JSON.parse(savedParams);
//     } else {
//       savedParams = httpParameters;
//     }
//     savedParams.push(newHttpParameterObject);
//     localStorage.setItem('httpParameters', JSON.stringify(savedParams));
//     this.state.message = 'Saved successfully';
//     const source = timer(5000);
//     const subscribe = source.subscribe(val => this.state.message = '');
//   }

//   render() {
//     let savedParams = localStorage.getItem('httpParameters') || [];
//     if (savedParams) {
//       savedParams = JSON.parse(savedParams);
//     } else {
//       savedParams = httpParameters;
//     }

//     var DataKeys = savedParams.map(h => h.key),
//       DataKeyOptions = function (X) {
//         return <option value={X}>{X}</option>;
//       };
//     var DataNamespaces = savedParams.map(h => h.namespace),
//       DataNamespaceOptions = function (X) {
//         return <option value={X}>{X}</option>;
//       };

//     return (
//       <div className="content-wrapper">
//         {this.state.message}
//         <h2 className="header">
//           Create Http Parameter
//                 </h2>
//         <hr></hr>
//         <div>
//           <form>
//             <div className="form-field">
//               <div>
//                 <label>
//                   <span className="label-class">
//                     Key:
//                                     </span>
//                 </label>
//               </div>
//               <select name="key" onChange={this.handleFormChange}>
//                 {DataKeys.map(DataKeyOptions)}
//               </select>
//               {/* <input type="text" name="key" onChange={this.handleChange} value={this.state.key} /> */}
//             </div>
//             <div className="form-field">
//               <div>
//                 <label>
//                   <span className="label-class">
//                     displayName:
//                                     </span>
//                 </label>
//               </div>
//               <input type="text" name="displayName" onChange={this.handleFormChange} />
//             </div>
//             <div className="form-field">
//               <div>
//                 <label>
//                   <span className="label-class">
//                     Type:
//                                     </span>
//                 </label>
//               </div>
//               <select name="type" onChange={this.handleFormChange}>
//                 <option value="Header">Header</option>
//                 <option value="Cookie">Cookie</option>
//               </select>
//               {/* <div>
//                 <label>
//                   <span className="label-class">
//                     Type:
//                                     </span>
//                 </label>
//               </div>
//               <FormControl>
//                 <InputLabel htmlFor="id-type">Type</InputLabel>
//                 <Select
//                   native
//                   value={state.type}
//                   onChange={handleFormChange}
//                   inputProps={{
//                     name: 'type',
//                     id: 'id-type',
//                   }}
//                 >
//                   <option aria-label="None" value="" />
//                   <option value='Header'>Header</option>
//                   <option value='Cookie'>Cookie</option>
//                 </Select>
//               </FormControl> */}
//             </div>
//             <div className="form-field">
//               <div>
//                 <label>
//                   <span className="label-class">
//                     HttpParameterName:
//                                     </span>
//                 </label>
//               </div>
//               <input type="text" name="httpParameterName" onChange={this.handleFormChange} />
//             </div>
//             <div className="form-field">
//               <div>
//                 <label>
//                   <span className="label-class">
//                     namespace:
//                                     </span>
//                 </label>
//               </div>
//               <select name="namespace" onChange={this.handleFormChange}>
//                 {DataNamespaces.map(DataNamespaceOptions)}
//               </select>
//             </div>
//             <div className="submit-button">
//               <Button onClick={this.createNewParam} variant="contained">Create</Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
