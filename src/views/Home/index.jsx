import React from 'react'
import GetProducts from '../../components/GetProducts'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'


export default function Home() {
  return (
    <div className='container-fluid'>
        <Navbar />
        <Slider />
        <Heading />
        <GetProducts/>
        
    </div>
  )
}
