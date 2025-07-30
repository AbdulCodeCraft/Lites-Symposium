import React from 'react'



const Input = ({type="text",placeholder,label}) => {
  return (
    <div className='md:w-1/2  space-y-1 my-5'>
        <label className='block font-semibold'>{label}</label>
        <input className='w-full text-gray-200 rounded-lg outline-none bg-gray-800 px-3 py-3' type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input
