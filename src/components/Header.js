import React from 'react'
import logo from '../images/retino_logo.png'
import { Link } from 'react-router-dom'
import user_image from '../images/user.png'

const Header = ({authenticated}) => {
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
            <img className='rounded-full w-10 h-10' src={user_image} alt='user'/>
          </div>
        )
      }
    </div>
  )
}

export default Header