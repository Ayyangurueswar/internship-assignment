import React, { useState } from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../lib/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password).then((user) => {
        navigate('/dashboard');
    }).catch((e) => {
        console.log(e);
    });
  }
  return (
    <div>
        <Header authenticated={false}/>
        <div className='flex items-center flex-col gap-8 justify-center w-full mt-14'>
            <h1 className='text-3xl font-semibold'>Sign In</h1>
            <form className='flex flex-col gap-4 text-center w-1/3'>
                <div className='flex flex-col'>
                    <label htmlFor='email' className='text-left'>Email</label>
                    <input type='email' id='email' value={email} onChange={(e) => {setEmail(e.target.value)}} 
                    className='w-full p-2 rounded border border-slate-500 outline-none' placeholder='Enter your email'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='pwd' className='text-left'>Password</label>
                    <input type='password' id='pwd' value={password} onChange={(e) => {setPassword(e.target.value)}} 
                    className='w-full p-2 rounded border border-slate-500 outline-none' placeholder='Enter your email'/>
                </div>
            </form>
            <div className='w-1/3'>
                <button className='bg-blue-500 text-white py-2 font-bold text-sm rounded-lg w-full' onClick={handleSubmit}>Sign in</button>
                <p className='text-sm text-slate-600 mt-3'>Don't have an account? <Link to='/signup' className='underline text-blue-500'>Register</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignIn