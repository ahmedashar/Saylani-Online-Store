import React from 'react'

export default function Heading(props) {
    let {title} = props
    console.log(props)
  return (
    <div className='container '>
        <div className='heading_div'>{title}</div>
    </div>
  )
}
