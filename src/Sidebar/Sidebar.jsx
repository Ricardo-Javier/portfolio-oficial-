import React from "react";
import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useInView } from "react-intersection-observer";



const Sidebar = () => {

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });

  let actionClass = null;

  if (inView) {
    actionClass = "inview";
  } else {
    actionClass = "outview";
  }


  return (  
<>
   <div ref={ref} className={`nav-bar ${actionClass}`}>
     <ul>
       <li>
         <a target ='_blank' rel='noreferrer' href ='https://www.linkedin.com/in/rsalinaszambrano/'>
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
</>

  );
}
 
export default Sidebar;