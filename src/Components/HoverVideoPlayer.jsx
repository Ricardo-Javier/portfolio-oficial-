import HoverVideoPlayer from 'react-hover-video-player';
import project1 from '../assets/project1.mp4';
import './ProjectModal.scss'



function Project1() {
  return (
    <HoverVideoPlayer
      videoSrc={project1}
      pausedOverlay={
        <div className='covervideo'>
          See Project        
        </div>
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  );
}

export {Project1}

function Project2() {
  return (
    <HoverVideoPlayer
    videoSrc={project1}
      pausedOverlay={
        <div className='covervideo'>
        See Project        
      </div>

      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  );
}

export {Project2}


function Project3() {
  return (
    <HoverVideoPlayer
    videoSrc={project1}
      pausedOverlay={
        <div className='covervideo'>
        See Project        
      </div>

      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  );
}

export {Project3}