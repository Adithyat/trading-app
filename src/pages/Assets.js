import React, {Component} from 'react';
import { AgGridReact } from 'ag-grid-react';

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }],
      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }]
    }
  }

  render() {
    return (
      <div className="ag-theme-balham" style={ {height: '200px', width: '600px'} }>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default Assets;