import React, { useState } from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
        alert('Passwords do not match');
        return;
    }
    try {
        setLoading(true);
        await signUp(email, password);
        navigate("/dashboard");
    }
    catch (e) {
        alert('Error: ' + e.message);
        console.log(e);
    }
    setLoading(false);
  }
  return (
    <div>
        <Header authenticated={false}/>
        <div className='flex items-center flex-col gap-8 justify-center w-full mt-14'>
            <h1 className='text-3xl font-semibold'>Sign up</h1>
            <form className='flex flex-col gap-4 text-center sm:w-1/3 w-3/4'>
                <div className='flex flex-col'>
                    <label htmlFor='email' className='text-left'>Email</label>
                    <input type='email' id='email' value={email} onChange={(e) => {setEmail(e.target.value)}} 
                    className='w-full p-2 rounded border border-slate-500 outline-none' placeholder='Enter your email'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='pwd' className='text-left'>Password</label>
                    <input type='password' id='pwd' value={password} onChange={(e) => {setPassword(e.target.value)}} 
                    className='w-full p-2 rounded border border-slate-500 outline-none' placeholder='Enter your password'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='confirmpwd' className='text-left'>Confirm Password</label>
                    <input type='password' id='pwd' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} 
                    className='w-full p-2 rounded border border-slate-500 outline-none' placeholder='Confirm your password'/>
                </div>
            </form>
            <div className='w-1/3'>
                <button className='bg-blue-500 text-white py-2 font-bold text-sm rounded-lg w-full' onClick={handleSubmit} disabled={loading}>Sign up</button>
                <p className='text-sm text-slate-600 mt-3'>Already have an account? <Link to='/signin' className='underline text-blue-500'>Sign in</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignUp