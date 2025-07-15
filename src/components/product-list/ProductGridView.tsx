import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IProductDetails } from '../../utils/constant';


const ProductGridView: React.FC<any> = ({products}) =>{
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Rate(rate)</TableCell>
                        <TableCell align="right">Rate(Count)</TableCell>
                        <TableCell align="right">Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product: IProductDetails) => (
            <TableRow
              key={product.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {product.title}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.rating.rate}</TableCell>
              <TableCell align="right">{product.rating.count}</TableCell>
              <TableCell align="right">
                <img src={product.image} alt='Image' />
              </TableCell>
            </TableRow>
          ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default ProductGridView;