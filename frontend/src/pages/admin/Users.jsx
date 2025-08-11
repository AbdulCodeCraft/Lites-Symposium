import Dropdown from "../../components/Dropdown.jsx"
import RegisteredUsers from '../../components/RegisteredUsers.jsx';
const Role = ["coordinator","participant"];

const users = [
  {
    fullName : "Abdul Rahman",
    email : "abdul@gmail.com",
    createdAt : "15-10-2003"

  },
  {
    fullName : "Abdul Rahman",
    email : "abdul@gmail.com",
    createdAt : "15-10-2003"

  },
  {
    fullName : "Abdul Rahman",
    email : "abdul@gmail.com",
    createdAt : "15-10-2003"

  },
  {
    fullName : "Abdul Rahman",
    email : "abdul@gmail.com",
    createdAt : "15-10-2003"

  },
  {
    fullName : "Abdul Rahman",
    email : "abdul@gmail.com",
    createdAt : "15-10-2003"

  },
  {
    fullName : "Abdul Rahman",
    email : "abdul@gmail.com",
    createdAt : "15-10-2003"

  },
  {
    fullName : "Abdul Rahman",
    email : "abdul@gmail.com",
    createdAt : "15-10-2003"

  },
]

const Users = () => {

  return (
    <div className='space-y-7'>
      <h1 className='text-4xl font-semibold'>Registered User</h1>
      <div className='flex space-x-6'>
      <Dropdown label="Role" options={Role} />
      <Dropdown label="Role" options={Role} />
      <Dropdown label="Role" options={Role} />
      </div>

      <div>
       
        <RegisteredUsers users={users}/>
      </div>
    </div>
  )
}

export default Users
