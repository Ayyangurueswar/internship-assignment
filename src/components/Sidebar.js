import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({addReport}) => {
  const location = useLocation();
  return (
    <div className='w-[27%] px-8 py-8 font-[500] h-screen flex justify-between flex-col'>
        <div>
            <h1 className='mb-4 text-lg'>Retinoscan AI</h1>
            <ul className='list-none ml-4 space-y-4'>
                <li className={`${location.pathname.includes('dashboard') ? 'bg-slate-200' : ''}`}><Link to='/' className='ml-2'>Dashboard</Link></li>
                <li className={`${location.pathname.includes('analysis') ? 'bg-slate-200' : ''}`}><Link to='/' className='ml-2'>Analysis</Link></li>
                <li className={`${location.pathname.includes('reports') ? 'bg-slate-200 py-1.5 rounded-lg' : ''} flex items-center`}><Link to='/' className='ml-2'>Reports</Link></li>
            </ul>
        </div>
        <button className='bg-blue-500 text-white w-full rounded-lg py-1 bottom-0' onClick={() => {addReport()}}>New report</button>
    </div>
  )
}

export default Sidebar