import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { Project1 , Project2, Project3, ProjectVideo } from './HoverVideoPlayer';
import './ProjectModal.scss'
import '../Views/Section5/Section5.jsx'
import video1 from '../assets/project1.mp4'
import video2 from '../assets/project2.mp4'
import video3 from '../assets/project3.mp4'
import { useInView } from "react-intersection-observer";


const Modals = () => {
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




 const modalInfo = [
    {
      title: "The Door Drop App",
      description: "Web app made for restaurants that allow customers take orders directly from the table, including payment, sign in and login options.",
      video: video1,
      classname:'project-anim1',
    },
    {
      title: "Portfolio Idea",
      description: "Idea of landing page with 3D elements. Made in React with React-Three-Fiber and Drei, use of gltf model, environment, scroll behaviour inside the canvas, and React Router.",
      video: video2,
      classname:'project-anim2',
    },
    {
      title: "Personal Website",
      description: "Personal Portfolio using React, React-Three-Fiber, Drei, React-Bootstrap, LottieFiles, and a few libraries focused on animations. Html and 3D elements mixed without conflicts.",
      video: video3,
      classname:'project-anim3',
    },
  ];

  const RenderModal = (card, index) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
      <div ref={ref} className={`project ${card.classname} ${actionClass}`}>
        <h1 className='titmodal'>{card.title}</h1>
      <Button className='mainbutton infobutton' onClick={handleShow}>
        + Info
      </Button>
      </div>
      <Modal show={show} key={index} onHide={handleClose} animation={true}>        
        <h1 className='modaltitle'>{card.title}</h1>            
        <p className='modaltext'>{card.description}</p>
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
    <Button className='mainbutton moreprojbutton' href='https://github.com/Ricardo-Javier' >
        + Projects
      </Button>
    </div>;
};

export default Modals;