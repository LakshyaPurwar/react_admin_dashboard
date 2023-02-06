import './DataTable.scss'
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, product, customer, date, amount , method , status , url) {
    return { id, product, customer, date, amount , method , status  , url};
  }
  
  const rows = [

    createData(11433 , 'Product 1' , 'John Doe', '1 March' , '786' , 'Cash on Delivery' , 'Approved' , 'https://thumbs.dreamstime.com/b/salmon-arugula-pizza-light-tasty-restaurant-meal-foodie-108642271.jpg'),
    createData(11434 , 'Product 2', 'Mohn Doe', '1 March' , '786' , 'Cash on Delivery' , 'Pending','https://images.unsplash.com/photo-1552166539-2ec8888dd801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGx1eHVyeSUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'),
    createData(11435 , 'Product 3' , 'Pohn Doe', '1 March' , '199' , 'Cash on Delivery' , 'Approved','https://static-cse.canva.com/blob/982605/FoodPhotographyProps33.jpg'),
    createData(11436 , 'Product 4' , 'Gohn Doe', '1 March' , '786' , 'Cash on Delivery' , 'Pending','https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4='),
    createData(11437 , 'Product 5' , 'Lohn Doe', '1 March' , '999' , 'Cash on Delivery' , 'Approved','https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg'),
    createData(11438 , 'Product 6' , 'Sohn Doe', '1 March' , '786' , 'Cash on Delivery' , 'Pending','https://thumbs.dreamstime.com/b/salmon-arugula-pizza-light-tasty-restaurant-meal-foodie-108642271.jpg'),
    createData(11439 , 'Product 7' , 'Dohn Doe', '1 March' , '768' , 'Cash on Delivery' , 'Approved','https://thumbs.dreamstime.com/b/salmon-arugula-pizza-light-tasty-restaurant-meal-foodie-108642271.jpg'),
    
  ];
  



const DataTable = () => {
  return (
    <div className='table'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tracking ID</TableCell>
            <TableCell >Product</TableCell>
            <TableCell >Customer</TableCell>
            <TableCell >Date</TableCell>
            <TableCell >Amount</TableCell>
            <TableCell >Payment Method</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell ><div className="productCell">
                <img src={row.url} alt="" className="image" />
                <div className="productName">{row.product}</div>
                </div></TableCell>
              <TableCell >{row.customer}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell >{row.method}</TableCell>
              <TableCell ><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default DataTable