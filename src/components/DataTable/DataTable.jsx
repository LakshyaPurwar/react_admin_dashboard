import React from "react";
import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from "../../data/userData";
import { Link } from "react-router-dom";






const columns = [
    { field: 'id', headerName: 'ID', width: 70 },

    { field: 'age', headerName: 'Age',width: 90},
    { field: 'status', headerName: 'Status', width: 130,
    renderCell:(params)=>{
        return <div className={`status ${params.row.status}`}>{params.row.status}</div>
      } },
    {
    //   field: 'username',
      headerName: 'User Name',
    //   type: 'number',
      width: 130,
      sortable:false,
      renderCell : (params) =>{
        return <div className="userName">
            <img src={params.row.img} alt="user-image" className="image" />
            <span className="name">{params.row.username}</span>
        </div>
      }
    },
    {field:'email' , headerName:'Email' , width:'200'}
    
  ];

  const actionColumn = [{
    field:"action",
    headerName:'Action',
    width:200,
    renderCell:()=>{
        return <div className="cellAction">
            <Link className='link' to='/users/abc'>
            <div className="viewButton"> View  </div>
            </Link>
            <div className="deleteButton">Delete</div>
        </div>
    }
  }];

  const Datatable = ()=>{

    return <div className="datatable">
         <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        className="datagrid"
      />
    </div>
}
export default Datatable;
