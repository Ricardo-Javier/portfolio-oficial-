import { Suspense} from 'react';
import './App.scss';
import { Loading } from './Components/Loader';
import { BrowserRouter, Routes } from "react-router-dom";
import { Scene } from './Scene'
import { Canvas } from '@react-three/fiber';
import Sidebar from './Sidebar/Sidebar';
import Environ from './Components/Environ';
import { useInView } from "react-intersection-observer";











function App() {


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
    <div className='App' >

      <div ref={ref} className={`bg ${actionClass}`}></div>
    <Loading/>       
    <BrowserRouter>
    <div className='page'>
    <Canvas>
    <Environ/>    
    <Suspense fallback={null}>
    <Scene />    
    </Suspense>
    </Canvas>
    </div>
    <Sidebar/>  
  
    
    {/* <Overlay/> */}
  
    <Routes>    
    {/* <Route path="/" element={<Main/>}/>
    <Route path="/page1" element={<Text1/>}/>
    <Route path="page2" exact element={<Text2/>}/>
    <Route path="page3" exact element={<Contact/>}/> */}
    </Routes>
    </BrowserRouter>
   
    </div>
   

    </>
 
 
  );
}

export default App;



