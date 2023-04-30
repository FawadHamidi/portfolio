import React from 'react'
import './FreeCoursesLinks.css'

export default function FreeCoursesLinks() {
    const buttons = [
        { id: 1, label: 'freecodecamp.org', url: "https://www.freecodecamp.org/" },
        { id: 2, label: 'codecademy.com', url: "https://www.codecademy.com/" },
        { id: 3, label: 'theodinproject.com', url: "https://www.theodinproject.com/" },
        { id: 4, label: 'edx.org/CS50', url: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x" },
        { id: 5, label: 'coursera.org', url: "https://www.coursera.org/learn/python?utm_source=gg&utm_medium=sem&utm_campaign=B2C_INDIA_google-data-analytics_FTCOF_professional-certificates_PMax-arte-NRL_greater_than_14D&utm_content=B2C&campaignid=19002533988&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adpostion=&creativeid=&hide_mobile_promo&gclid=CjwKCAjwo7iiBhAEEiwAsIxQEVqvNwMWTGSf6ZVQcr49PbiR_h3eLNmMGkwmxkSlNyOECF_QOesYjRoC_24QAvD_BwE" },
      ];
    
      return (
        <div className='parent-container'>
        <div className="button-list">
          {buttons.map((button) => (
            <a
              key={button.id}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary button-list__button"
            >
              {button.label}
            </a>
          ))}
        </div>
        </div>
      );
    }
