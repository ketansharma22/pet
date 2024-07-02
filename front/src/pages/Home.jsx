import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/Home.css'
const Home = () => {
  return (
    <div id='home'>
      <Link className='go' to='/signup'>Pet's GO</Link>

    </div>
  )
}

export default Home