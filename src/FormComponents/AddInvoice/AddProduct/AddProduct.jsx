import { TextField } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button'
import '../AddProduct/AddProduct.css'

const addProductButton = {
  "&": {
    backgroundColor: "rgba(0, 0, 0, 0.783)"
  },
  "&:hover": {
    backgroundColor: "#f1356d"
  },
  "&:active": {
    backgroundColor: "#f1356d"
  }
};

const AddProduct = () => {

  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [vat, setVat] = useState('');

  const handleAddProduct = async () => {
    const data = {
      productName,
      quantity,
      price,
      vat
    };

    try {
      const response = await fetch('/get_product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
      } else {
        console.error('Error adding product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <div className="add-product">
      <TextField
        id="outlined-basic"
        label="Product Name"
        variant="outlined"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Quantity"
        variant="outlined"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <FormControl style={{ width: '5vw' }}>
        <InputLabel id="vat-label">Vat</InputLabel>
        <Select
          labelId="vat-label"
          id="vat"
          label="Vat"
          value={vat}
          onChange={(e) => setVat(e.target.value)}>
          <MenuItem value={8}>8%</MenuItem>
          <MenuItem value={23}>23%</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" sx={addProductButton} onClick={handleAddProduct}>
        Add Product
      </Button>
    </div>
  );
};

export default AddProduct;
