import React, {useState} from 'react'
import '../Sidemenu/Sidemenu.css'

const Sidemenu = () => {

    const [menu, setMenu] = useState()
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