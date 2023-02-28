import React from 'react'
import hero from '../Assets/images.jpg'

export const Hero = () => {
  return (
    <div className='h-25'>
          <img src={hero} alt="" style={{ width: '100%', height: '500px' }}/>
    </div>
  )
}
