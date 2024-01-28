import React from 'react'
import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import '../AddContractor/AddContractor.css'

const AddContractor = () => {
  return (
    <Box>
        <Button variant="contained">Add Contractor</Button>
        <div className='contractor-credentials'>
          <ul>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>4</li>
          </ul>
        </div>
    </Box>
  )
}

export default AddContractor