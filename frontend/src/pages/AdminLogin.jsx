
import Layout from '../layout/Layout'

const AdminLogin = () => {
  return (
  <Layout>
    <div className='min-h-screen  flex justify-center items-center bg-black text-white'>
        
        <div className='flex flex-col space-y-4 justify-center items-center bg-gray-800 md:h-100 p-5 md:p-0 rounded-lg md:w-1/2 '>
            <h2 className='text-gray-200 text-2xl md:text-3xl font-semibold'>Admin Login</h2>
            <input className='px-3 py-3 bg-gray-600 rounded-lg md:w-1/2' type="text" placeholder='Enter username' />
            <input className='px-3 py-3 bg-gray-600 rounded-lg md:w-1/2' type="text" placeholder='Enter username' />
            <button className='bg-blue-400 px-8 rounded-lg hover:bg-blue-500 py-2'>Login</button>
        </div>

    </div>
  </Layout>
  )
}

export default AdminLogin
