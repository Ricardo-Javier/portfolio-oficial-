import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Overlay.scss'

const Overlay = () => {

  return (
    <div  style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', pointerEvents: 'auto', fontSize: '13px' }}>
      <ul className='ul-top'>
       <li>
         <a target ='_blank' rel='noreferrer' href ='https://www.linkedin.com/rsalinaszambrano'>
           <FontAwesomeIcon icon={faLinkedin}/>
           </a>
       </li>
       <li>
          <a
            href="https://github.com/ricardo-javier"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/13052162077" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp}/>
          </a>
        </li>
     </ul>
      </div>
      <div style={{ position: 'absolute', pointerEvents: 'auto', bottom:0, fontSize: '13px' }}>
      <ul className='ul-bottom'>
       <li>       
fsdgsdfgdsfgsdfgsdgsdgsdgsdgsdgsdgsdgsdgtextotextotextoexto       
        
       </li>
      
     </ul>
      </div>
    </div>
  )
}

export default Overlay