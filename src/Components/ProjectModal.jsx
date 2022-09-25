import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { Project1 , Project2, Project3, ProjectVideo } from './HoverVideoPlayer';
import './ProjectModal.scss'
import '../Views/Section4/Section4.jsx'
import video1 from '../assets/project1.mp4'
import video2 from '../assets/project2.mp4'
import video3 from '../assets/project3.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


const Modals = () => {
 
 const modalInfo = [
    {
      title: "Restaurant App",
      description: "Web app made for restaurants that allow customers take orders directly from the table, including payment, sign in and login options.",
      video: video1,
      classname:'project-anim1',
      link:'https://thedoordrop.herokuapp.com/',
      github:"https://github.com/Ricardo-Javier/final-project",
    },
    {
      title: "Portfolio Idea",
      description: "Idea of landing page with 3D elements. Made in React with React-Three-Fiber and Drei, use of gltf model, environment, scroll behaviour inside the canvas, and React Router.",
      video: video2,
      classname:'project-anim2',
      link:'https://ricardo-javier-astro-r3f.netlify.app',
      github:"https://github.com/Ricardo-Javier/portoflio-r3f-idea",
    },
    {
      title: "Personal Website",
      description: "Personal Portfolio using React, React-Three-Fiber, Drei, React-Bootstrap, LottieFiles, and a few libraries focused on animations. Html and 3D elements mixed without conflicts.",
      video: video3,
      classname:'project-anim3',
      link:'https://ricardo-javier.netlify.app',
      github:"https://github.com/Ricardo-Javier/portfolio-oficial",
    },
  ];

  const RenderModal = (card, index) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
      <div className={`project ${card.classname}`}>
        <h1 className='titmodal'>{card.title}</h1>
      <Button className='mainbutton infobutton' onClick={handleShow}>
        + Info
      </Button>
      </div>
      <Modal show={show} key={index} onHide={handleClose} animation={true}>        
        <h1 className='modaltitle'>{card.title}</h1>            
        <p className='modaltext'>{card.description}</p>
        <div className='icon-projects'>
          <a href={card.link} target ='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faLink} style={{cursor: 'pointer'}} />
        </a>
        <a href={card.github} target ='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} style={{cursor: 'pointer'}} />
        </a>
        </div>
        
        <video webkit-playsinline={true} playsInLine width="400" autoPlay>
  <source src={card.video} type="video/mp4"/>
 
  Your browser does not support HTML video.
</video>
         <Button className='mainbutton closebutton' onClick={handleClose}>
          Close
        </Button>    
      </Modal>
      </>

    );
  };

  return <div className="projects">
    {modalInfo.map(RenderModal)}
    <Button className='mainbutton moreprojbutton' href='https://github.com/Ricardo-Javier?tab=repositories' target ='_blank' rel='noreferrer' >
        + Projects
      </Button>
    </div>;
};

export default Modals;