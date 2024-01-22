import React, {useState} from 'react'
import '../Sidemenu/Sidemenu.css'

const Sidemenu = (props) => {

    console.log(props.menu)
  return (
    <menu>
        <ul>
            <li>Account</li>
            <li>Bank</li>
            <li>Charts</li>
            <li>Accoutable</li>
        </ul>
    </menu>
  )
}

export default Sidemenu