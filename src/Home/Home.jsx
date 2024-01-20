import React, { useState } from 'react'

const Home = () => {


  const [name, setName] = useState('Daniel')
  const [age, setAge] = useState(25)

  const handleClick = () =>{
    setName('Natalia')
    setAge(30)
  }

  return (
    <div className='home'>
        <h2>Homepage</h2>
        <p>{name} is {age}</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Home