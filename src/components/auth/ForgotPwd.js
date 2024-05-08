import React, { useState } from 'react'
import Header from '../Header';
import { resetPwd } from '../../lib/auth';

const ForgotPwd = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    resetPwd(email).then((user) => {
        alert('Email sent successfully');
    }).catch((e) => {
        console.log(e);
    })
  }
  return (
    <div>
        <Header authenticated={false}/>
        <div className='flex items-center flex-col gap-10 justify-center w-full mt-14'>
            <h1 className='text-3xl font-semibold'>Forgot Password</h1>
            <form className='flex flex-col gap-8 text-center w-1/3'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email' className='text-left'>Enter your email to continue</label>
                    <input type='email' id='email' value={email} onChange={(e) => {setEmail(e.target.value)}} 
                    className='w-full p-2 rounded border border-slate-500 outline-none' placeholder='Enter your email'/>
                </div>
                <button className='w-full p-2 bg-blue-500 text-white rounded' type='submit' onClick={handleSubmit}>Send</button>
            </form>
        </div>
    </div>
  )
}

export default ForgotPwd