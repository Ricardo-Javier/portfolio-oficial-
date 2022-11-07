import React from 'react'
import './Section6.scss';
import { useInView } from "react-intersection-observer";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
// import LinesAnim from '../../Components/LinesAnim';



function Section6() {

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

      <div ref={ref} className={`section6 ${actionClass}`}>
      <Card className="text-center">     
      <div className='title-footer'>      
      </div>    
      <Card.Body>
      <Card.Title>     
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
     </ul>           
        </Card.Title>
        <Card.Text> 
          <br/>
          <br/>       
          <br/>
          <br/>     
         
         <br/>
         <br/>      
        </Card.Text>
        <a className='arrowup' href="#top">
          <FontAwesomeIcon icon ={faAnglesUp}/>
        </a>
        <Card.Footer className="text-muted">      
        www.ricardo-javier.xyz</Card.Footer>
        <br/>  
        
        <a target ='_blank' rel="noreferrer" href="https://skfb.ly/6TTzK"> 3d model used on this website</a>
      </Card.Body>
      
    </Card>
      </div>
      
   
    </>
  )
}

export { Section6 }
