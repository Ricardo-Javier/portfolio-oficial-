import React from 'react'
import { Section1 } from '../Views/Section1/Section1'
import { Section2 } from '../Views/Section2/Section2'
import { Section3 } from '../Views/Section3/Section3'
import { Section4 } from '../Views/Section4/Section4'
import { Section5 } from '../Views/Section5/Section5'
import { Section6 } from '../Views/Section6/Section6'

function Html() {
  return (
    <>
    <div className='top-page' id='top'></div>
    
      <div className
        style={{
          position: 'absolute',
          top: '67vh',
          left: '50vw',
          transform: 'translateX(-50%)',
        
        }}>
        <Section1/>
      </div>
      <div className
        style={{
          position: 'absolute',
          top: '150vh',
          left: '50vw',
          transform: 'translateX(-50%)',
         
        
        }}>
        <Section2/>
      </div>
      <div className
        style={{
          position: 'absolute',
          top: '300vh',
          left: '50vw',
          transform: 'translateX(-50%)',
                 
        }}>
        <Section3/>
      </div>
      <div className
        style={{
          position: 'absolute',
          top: '450vh',
          left: '50vw',
          transform: 'translateX(-50%)',
                
        }}>
        <Section4/>
      </div>
      <div className
        style={{
          position: 'absolute',
          top: '650vh',
          left: '50vw',
          transform: 'translateX(-50%)',
                 
        }}>
        <Section5/>
      </div>
      <div className
        style={{
          position: 'absolute',
          top: '800vh',
          left: '50vw',
          transform: 'translateX(-50%)',
               
        }}>
        <Section6/>
      </div>
    </>
  )
}

export { Html }
