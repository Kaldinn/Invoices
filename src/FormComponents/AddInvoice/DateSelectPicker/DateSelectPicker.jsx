import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../DateSelectPicker/DateSelectPicker.css'

const DateSelectPicker = () => {
  return (
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
  )
}

export default DateSelectPicker