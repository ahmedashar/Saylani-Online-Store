import React from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'


export default function Home() {
  return (
    <div className='container-fluid'>
        <Navbar />
        <Slider />
        <Heading />
    </div>
  )
}
