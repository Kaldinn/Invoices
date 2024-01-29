import React, {useState} from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../DateSelectPicker/DateSelectPicker.css'

const DateSelectPicker = () => {

  const [vat, setVat] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker label="Invoice Date" views={['year','month','day']}/>
      <DateTimePicker label="Sell Date" views={['year','month','day']}/>
      <DateTimePicker label="Payment Date" views={['year','month','day']}/>
      <FormControl >
      <InputLabel id="payment-method-label">Payment Method</InputLabel>
      <Select
        labelId="payment-method-label"
        id="payment-method"
        label="Payment Method"
        value={paymentMethod} 
        onChange={(e) => setPaymentMethod(e.target.value)}>
        <MenuItem value={'Card'}>Card</MenuItem>
        <MenuItem value={'Cash'}>Cash</MenuItem>
      </Select>
    </FormControl>

    </LocalizationProvider>
  )
}

export default DateSelectPicker