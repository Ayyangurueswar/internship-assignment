import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Header authenticated={false}/>
        <div className='flex items-center justify-center w-full mt-14'>
            <div className='flex flex-col gap-4 text-center w-1/3'>
                <h1 className='font-bold text-xl'>Welcome to Retinoscan</h1>
                <p className='text-sm'>The world's most advanced AI medical tool for eye health</p>
                <Link to='/signin' className='bg-blue-500 text-white py-2 font-bold text-sm rounded-lg'>Sign in</Link>
                <p className='text-slate-400'>or</p>
                <Link to='/signup' className='bg-slate-200 py-2 font-bold text-sm rounded-lg'>Create an account</Link>
                <Link to='/forgotPassword' className='text-slate-600 underline text-sm font-light'>Forgot your password?</Link>
            </div>
        </div>
    </div>
  )
}

export default Home