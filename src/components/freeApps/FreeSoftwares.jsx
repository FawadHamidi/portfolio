import React from 'react'
import './freeApps.css'

export default function FreeSoftwares() {
    const buttons = [
        { id: 1, label: 'Youtube Downloader', url: "https://drive.google.com/file/d/1-bmeIvkCQWZ2HQoR3h3x29jp_KOz9C5H/view?usp=drive_link" },
        { id: 2, label: 'Carousel Generator', url: "https://carousel-generator.netlify.app" },
        
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
