import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ProjectVideo } from './HoverVideoPlayer';
import './ProjectModal.scss'
import '../Views/Section5/Section5.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5, faSass, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './Techs.scss'
import { useInView } from "react-intersection-observer";


const Techs = () => {

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



 const techInfo = [
    {
      icon: <FontAwesomeIcon style={{fontSize:'7vh'}} icon={faHtml5}/>,
      title: "HTML5",
      classname:'tech-anim1',
     
    },
    {
      icon: <FontAwesomeIcon style={{fontSize:'7vh'}} icon={faSass} />,
      title: "SASS",
      classname:'tech-anim2',
     
    },
    {
      icon: <FontAwesomeIcon style={{fontSize:'7vh'}} icon={faJs}/>,
      title: "JAVASCRIPT",
      classname:'tech-anim3',
      
    },
    {
      icon: <FontAwesomeIcon style={{fontSize:'7vh'}} icon={faJs}/>,
      title: "THREE.JS",
      classname:'tech-anim4',
      
    },
    {
      icon: <FontAwesomeIcon style={{fontSize:'7vh'}} icon={faJs}/>,
      title: "LOTTIE",
      classname:'tech-anim5',
      
    },


  ];

  const RenderTechs = (card, index) => {
    return (
      <>
        <div ref={ref} className={`${card.classname} ${actionClass}`}>
        <div className='tech' key={index} >
          {card.icon}        
        <h1 className='tech-title'>
          {card.title}
        </h1>
        </div>
        </div>
      </>

    );
  };

  return <div className="techs">
    {techInfo.map(RenderTechs)}
    </div>;
};

export default Techs;



