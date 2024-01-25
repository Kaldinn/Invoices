import React from 'react'
import { TextField } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import "../FormInvoices/FormInvoices.css"

const FormInvoices = () => {
  return (
    <form className='add-invoice'>
    <div className='contractor'>
      <button> Choose Contractor </button>
    </div>
    <div className="date-fields">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker label="Invoice Date" views={['year','month','day']}/>
          <DateTimePicker label="Sell Date" views={['year','month','day']}/>
          <DateTimePicker label="Payment Date" views={['year','month','day']}/>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Payment Method"  >
            <MenuItem value={10}>Card</MenuItem>
            <MenuItem value={20}>Cash</MenuItem>
          </Select>
        </FormControl>
        </DemoContainer>
      </LocalizationProvider>
    </div>
     <div className="summary">
        <ul>
          <li>Summary: </li>
          <li>VAT: </li>
          <li>Netto: </li>
          <li>Discount: </li>
          <li>Margin: </li>
          <li>Status: </li>
        </ul>
     </div>
    </form>
  )
}

export default FormInvoices