import {React }from 'react'
import { Section1 } from '../Section1/Section1'
import { Section2 } from '../Section2/Section2'

import { Section4 } from '../Section4/Section4'
import { Section5 } from '../Section5/Section5'
import { Section6 } from '../Section6/Section6'
import { Section7 } from '../Section7/Section7'
import './Layout.scss';



function Layout() {
  return (
    <>
    <div className='scrolltotop' id='1'></div>
    <div className='layout'>
     <Section1/>
     <Section2/>

     <Section4/>
     <Section5/>
    <Section6/>
    <Section7/>    
     </div>
     
    </>
  )
}

export { Layout }
