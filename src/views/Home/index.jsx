import React from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'

export default function Home() {
  return (
    <div className='container=fluid'>
        <Navbar />
        <Heading title='Welcome To'/>
    </div>
  )
}
