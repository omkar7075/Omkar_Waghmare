import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { socialmedias  } from '../constant'

const Footer = ({index, name, icon, url}) => {
  return (
    <div className='m-5 flex flex-row flex-wrap
    justify-center gap-10'>
      {socialmedias.map((socialmedia) => (
        <div className='w-28 h-28'
        key={socialmedia.name}
        
        >
        <img src={socialmedia.icon}
        onClick={() => window.open(socialmedia.url,"_blank")}
        alt='icon'/>
        
        </div>

      ))}

      <div>
      
      </div>
      <p className='mt-2 text-secondary text-[14px]'>
            All &copy; Rights are Reservered 2024

      </p>

    </div>
  )
}

export default SectionWrapper(Footer,"")