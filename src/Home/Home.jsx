import React, { useState } from 'react'
import { useRef } from 'react'
import '../Home/Home.css'

const Home = () => {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()    
  // run this function from an event handler or an effect to execute scroll
  return (
    <div ref={myRef} className='home'>
      <ul onClick={executeScroll}>
        <li>Last Invoice</li>
        <li>Last Invoice</li>
        <li>Last Invoice</li>
        <li>Last Invoice</li>
        <li>Last Invoice</li>
        <li>Last Invoice</li>
        <li>Last Invoice</li>
        <li>Last Invoice</li>
        <li>Last Invoice</li>
        <li>Last Invoice</li>
      </ul>
    </div>
  )
}

export default Home

