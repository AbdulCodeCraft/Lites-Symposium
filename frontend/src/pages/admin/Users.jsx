import React from 'react'
import Dropdown from "../../components/Dropdown.jsx"
const Role = ["coordinator","participant"];

const Users = () => {
  return (
    <div className='space-y-7'>
      <h1 className='text-4xl font-semibold'>Registered User</h1>
      <div className='flex space-x-6'>
      <Dropdown label="Role" options={Role} />
      <Dropdown label="Role" options={Role} />
      <Dropdown label="Role" options={Role} />
      </div>
    </div>
  )
}

export default Users
