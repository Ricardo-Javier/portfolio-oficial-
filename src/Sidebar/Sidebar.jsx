import React from "react";
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => {
  return (  
<>
   <div className='nav-bar'>
     <Link className='logo' to='/'>      
     </Link>
     {/* <nav>
       <NavLink exact='true' activeclassname='active' to='/'>
         <FontAwesomeIcon icon ={faHome} color ='#4d4d4e'/>
       </NavLink>
       <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
         <FontAwesomeIcon icon ={faUser} color ='#4d4d4e'/>
       </NavLink>
       <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
         <FontAwesomeIcon icon ={faEnvelope} color ='#4d4d4e'/>
       </NavLink>
     </nav> */}
     <ul>
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

        <li>
       
        </li>

      
     </ul>
   
    
   </div>
</>

  );
}
 
export default Sidebar;