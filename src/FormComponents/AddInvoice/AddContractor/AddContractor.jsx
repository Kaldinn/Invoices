import React from 'react'
import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import '../AddContractor/AddContractor.css'

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

const AddContractor = () => {
  return (
    <Box>
        <Button variant="contained" sx={addProductButton}>Add Contractor</Button>
        <div className='contractor-credentials'>
          <ul>
            <li>NIP: <p>741-141-23-42</p></li>
            <li>Company Name: <p>INWEDA Daniel</p></li>
            <li>City: <p>14-313, Olsztyn</p></li>
            <li>Address: <p>ul. Bema 49</p></li>
          </ul>
        </div>
    </Box>
  )
}

export default AddContractor