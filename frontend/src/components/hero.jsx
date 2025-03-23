import React from 'react'

export const HeroTitle = ({children}) => {
  return (
    <h1 className='text-6xl my-6 md:text-8xl'>{children}</h1>
  )
}
export const HeroSubtitle = ({children}) => {
  return (
    <h1 className=' mb-12 md:text-xl text-lg'>{children}</h1>
  )
}

export const Hero = ({children}) => {
  return (
    <div className='text-center'>{children}</div>
  )
}