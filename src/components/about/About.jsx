import React from 'react'
import "./about.css"
import ME from "../../assets/me-about2.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
             <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>
        
          <article className='about__card'>
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
          </article>
       
          <article className='about__card'>
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>50+ completed</small>
          </article>
        </div>
        <p>
        A multitalented go-getter with a thirst for success and a
passion for Business. I am a dynamic force ready to tackle any 
challenge and turn it into an exciting opportunity for growth and 
development.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}
