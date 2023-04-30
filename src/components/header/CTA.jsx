import React from 'react'
import CV from "../../assets/cv.pdf"
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      <Link path='/free-courses' className='btn btn-primary'>Let's Talk</Link>
    </div>
  )
}
