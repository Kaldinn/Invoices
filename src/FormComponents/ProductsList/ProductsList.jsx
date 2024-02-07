import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    position: 'sticky',
    top: 0,
    zIndex: 999,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function ProductsList({ receivedValue }) {
  const [rows, setRows] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = (productName, quantity, price, vat) => {
    setRows(prevRows => [...prevRows, { productName, quantity, price, vat }]);
  };

  useEffect(() => {
    if (receivedValue) {
      const price = receivedValue.quantity * receivedValue.price
      addProduct(receivedValue.productName, receivedValue.quantity, price, receivedValue.vat);
    }
  }, [receivedValue]);



  useEffect(() => {
    const sum = rows.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.price), 0);
    setTotalPrice(sum);
  }, [rows]);

  
  return (
    <TableContainer component={Paper} sx={{
      maxHeight: 260,
      overflow: 'scroll',
    }}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Vat</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.productName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.vat} %</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">Sum:</StyledTableCell>
            <StyledTableCell align="right">{totalPrice}zł</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default ProductsList;
