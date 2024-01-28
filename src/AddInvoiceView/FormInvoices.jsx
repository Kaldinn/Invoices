import React from 'react'
import Button from '@mui/material/Button';
import DateSelectPicker  from '../FormComponents/AddInvoice/DateSelectPicker/DateSelectPicker.jsx'
import AddContractor from '../FormComponents/AddInvoice/AddContractor/AddContractor.jsx'
import Summary from '../FormComponents/AddInvoice/Summary/Summary.jsx'
import Grid from '@mui/material/Grid';

import "./FormInvoices.css"

const FormInvoices = () => {
  return (
    <form className='add-invoice'>
      <div className='contractor'>
        <AddContractor />
      </div>
      <div className="date-fields">
        <DateSelectPicker />
      </div>
      <div className="summary">
         <Summary />
      </div>
      <div className='add-product'>
        <Button variant="contained">Add Product</Button>
      </div>
    </form>
  )
}

export default FormInvoices