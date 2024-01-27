import React from 'react'
import { TextField } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';


import "../FormInvoices/FormInvoices.css"

const FormInvoices = () => {
  return (
    <form className='add-invoice'>
      <div className='contractor'>
        <Button variant="contained">Add Contractor</Button>
        <div className='contractor-credentials'>
          <ul>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>4</li>
          </ul>
        </div>
      </div>
      <div className="date-fields">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        </LocalizationProvider>
      </div>
      <div className="summary">
          <ul>
            <li>Summary: <p>23</p></li>
            <li>VAT: <p>23</p></li>
            <li>Netto: <p>23</p></li>
            <li>Discount: <p>23</p></li>
            <li>Margin: <p>23</p></li>
            <li>Status: <p>23</p></li>
          </ul>
      </div>
    </form>
  )
}

export default FormInvoices