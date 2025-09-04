import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  const { admin } = useContext(AuthContext)
  
  return (
    <div className='min-h-screen w-full p-7 flex flex-col'>
      <Header data={admin} />
      <div className='flex-1 flex flex-col mt-8'>
        <div className='flex-1'>
          <CreateTask />
        </div>
        <div className='mt-6'>
          <AllTask />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard