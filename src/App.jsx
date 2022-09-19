import { Suspense} from 'react';
import './App.scss';
import { Loading } from './Components/Loader';
import { BrowserRouter, Routes } from "react-router-dom";
import { Scene } from './Scene'
import { Canvas } from '@react-three/fiber';
import Sidebar from './Sidebar/Sidebar';
import Environ from './Components/Environ';





function App() {
  
  return (
    <>
    <div className='App' >
      <div className='bg'></div>
    <Loading/>       
    <BrowserRouter>
    <Canvas>
    <Environ/>    
    <Suspense fallback={null}>
    <Scene />    
    </Suspense>
    </Canvas>
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



