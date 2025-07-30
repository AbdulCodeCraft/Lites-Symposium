
const OrganizerCard = ({image,name,role}) => {
  return (
    <div className='flex flex-col items-center space-y-1 '>
      <img className=' overflow-hidden object-cover w-50 md:w-70 md:h-70 rounded-full' src={image} alt={name} />
      <h1 className='text-md text-center md:text-xl'>{name}</h1>
      <p className='text-sm text-center text-gray-400'>{role}</p>
     
    </div>
  )
}

export default OrganizerCard
