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
 
    <Loading/>       
    <BrowserRouter>
    <Canvas frameloop="demand" dpr={[1, 1.5]}>    
    <Environ/>    
    <Suspense fallback={null}>
    <Scene />    
    </Suspense> 
    </Canvas>
    <Sidebar/>  
  
    

  
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



