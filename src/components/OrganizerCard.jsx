import React from 'react'

const OrganizerCard = ({image,name,role}) => {
  return (
    <div className='flex flex-col items-center space-y-1'>
      <img className='w-70 h-70 rounded-full' src={image} alt={name} />
      <h1 className='text-xl'>{name}</h1>
      <p className='text-sm text-gray-400'>{role}</p>
    </div>
  )
}

export default OrganizerCard
