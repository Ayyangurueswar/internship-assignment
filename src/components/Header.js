import React from 'react'
import logo from '../images/retino_logo.png'
import { Link } from 'react-router-dom'
import user_image from '../images/user.png'
import { useAuth } from '../context/AuthContext'

const Header = ({authenticated}) => {
  const {currentUser, logout} = useAuth();
  return (
    <div className='w-full px-8 py-4 border-b border-slate-300 flex items-center gap-2 justify-between'>
      <div className='flex items-center gap-2'>
        <img src={logo} className='w-7 h-7' alt='logo'/>
        <h1 className='font-bold text-xl'>Retinoscan</h1>
      </div>
      {
        authenticated && (
          <div className='flex items-center gap-8 text-sm'>
            <Link to='/'>Dashboard</Link>
            <Link to='/'>AI Insights</Link>
            <Link to='/'>Detections</Link>
            <Link to='/'>Uploads</Link>
            <Link to='/' className='bg-slate-200 py-2 px-4 font-semibold rounded-lg'>Help</Link>
            <div className='group relative'>
              <img className='rounded-full w-10 h-10' src={user_image} alt='user'/>
              <div className='px-2 py-1 border border-slate-500 rounded-md hidden absolute bg-white group-hover:block top-10 -right-6'>
                <ul className='list-none space-y-2'>
                  <li className='border-b border-slate-300 p-1'>{currentUser.email}</li>
                  <li className='border-b border-slate-300 p-1 rounded hover:bg-blue-500 hover:text-white transition-colors'>
                    <Link className='block w-full' to='/editProfile'>Edit profile</Link>
                  </li>
                  <li className='p-1 hover:bg-blue-500 hover:text-white transition-colors rounded'>
                    <button className='w-full text-left'>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Header