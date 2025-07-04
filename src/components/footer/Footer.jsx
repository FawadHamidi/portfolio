import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi' 
import {IoLogoTwitter} from 'react-icons/io' 
import {FaLinkedinIn} from 'react-icons/fa' 
import {AiFillGithub} from 'react-icons/ai' 


export default function Footer() {
  return (
<footer>
  <a href='#' className='footer__logo'>FAWAD HAMIDI</a>

  <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#experience'>Experience</a></li>
    <li><a href='#services'>Services</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
    <li><a href='#testimonials'>Testimonials</a></li>
    <li><a href='#contact'>Contact</a></li>
  </ul>

  <div className="footer__socials">
    <a href='https://www.facebook.com/fawadhamidi41'><FaFacebookF /></a>
    <a href='https://www.instagram.com/fawadhamidi_/'><FiInstagram /></a>
    <a href='https://twitter.com/BoltHead91'><IoLogoTwitter /></a>
    <a href='https://www.linkedin.com/in/fawad-hamidi-944b121ba/'><FaLinkedinIn /></a>
    <a href='https://github.com/FawadHamidi'><AiFillGithub /></a>
  </div>


<div className="footer__copyright">
  <small>&copy; {new Date().getFullYear()} Fawad Hamidi. All rights reserved</small>
</div>

</footer>
  )
}
