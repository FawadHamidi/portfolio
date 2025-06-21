import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import "./header.css"




export default function HeaderSocials() {
  return (
    <div className='header___socials'>
      <a href='https://www.linkedin.com/in/fawad-hamidi-944b121ba/' target="_blank"><BsLinkedin /></a>
      <a href='https://github.com/FawadHamidi' target="_blank"><FaGithub /></a>
      <a href='https://www.instagram.com/fawadhamidi_' target="_blank"><BsInstagram /></a>
    </div>
  )
}
