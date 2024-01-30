import React, {useState} from 'react'
import Button from '@mui/material/Button';
import DateSelectPicker  from '../FormComponents/AddInvoice/DateSelectPicker/DateSelectPicker.jsx'
import AddContractor from '../FormComponents/AddInvoice/AddContractor/AddContractor.jsx'
import Summary from '../FormComponents/AddInvoice/Summary/Summary.jsx'
import AddProduct from '../FormComponents/AddInvoice/AddProduct/AddProduct.jsx';
import "./FormInvoices.css"

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

const FormInvoices = () => {

  const [isHidden, setIsHidden] = useState(false)


  const handleVisibilityProductDiv = () => {
    setIsHidden(prevIsHidden => !prevIsHidden);
  }



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
      <div className='add-product-button'>
        <Button variant="contained" sx={addProductButton} onClick={handleVisibilityProductDiv}>
          Add Product
        </Button>
      </div>
      {isHidden && (
        <div className='products'>
          <AddProduct />
        </div>
      )}


    </form>
  )
}

export default FormInvoices