import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { blue } from '@material-ui/core/colors';
import './DataTable.css'

 function DataTable(props) {
   const{allData}=props
    const allrows = []
    
   console.log("Data in DataTable")
   allData.forEach(element => {
    allrows.push(
      {
        filename: element.name,
        modifiedby: element.modifiedBy,
        modifieddate:  new Date(element.modifiedDate).toLocaleDateString(),
        createdby:  element.createBy,
        createddate:  new Date(element.createdDate).toLocaleDateString(),
       
      }
    )
  
});




const datatable= {
    columns: [
      {
        label: 'Sl.No',
        field: 'slno',
        width: 270,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Sl.No',
        },
      },
      {
        label: 'File Name',
        field: 'filename',
        width: 270,
        
      },
      {
        label: 'Modified By',
        field: 'modifiedby',   
        width: 200,
      },
      {
        label: 'Modified Date',
        field: 'modifieddate',
        width: 100,
      },
      {
        label: 'Created By',
        field: 'createdby',
        width: 150,
      },
      {
        label: 'Created Date',
        field: 'createddate',
        width: 100,
      },
    ],
    rows: allrows
  }

  
  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
}

export default DataTable
