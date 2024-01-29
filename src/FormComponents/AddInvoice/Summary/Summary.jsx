import React from 'react'
import { Box } from '@mui/material'
import '../Summary/Summary.css'

const Summary = () => {
  return (
    <Box>
       <ul>
          <li>Summary: <p>299 zł</p></li>
          <li>VAT: <p>23%</p></li>
          <li>Netto: <p>23</p></li>
          <li>Discount: <p>23</p></li>
          <li>Margin: <p>23</p></li>
          <li>Status: <p>23</p></li>
        </ul>
    </Box>
  )
}

export default Summary