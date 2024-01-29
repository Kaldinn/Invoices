import { TextField } from '@mui/material'
import React, {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button'
import '../AddProduct/AddProduct.css'

const addProductButton = {
  "&":{
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

  const [vat, setVat] = useState('')

  return (
      <div className="add-product">
        <TextField id="outlined-basic" label="Product Name" variant="outlined" />
        <TextField id="outlined-basic" label="Quantity" variant="outlined" />
        <TextField id="outlined-basic" label="Price" variant="outlined" />
        <FormControl style={{width: '5vw'}}>
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
        <Button variant="contained" sx={addProductButton}> Add Product </Button>
      </div>
  )
}

export default AddProduct
