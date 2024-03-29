import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constant'

const Tech = () => {
  return (
    <div className='m-5 flex flex-row flex-wrap
    justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28'
        key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>

      ))}

    </div>
  )
}

export default Tech