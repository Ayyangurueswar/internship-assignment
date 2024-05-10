import React, { useState } from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {signIn} = useAuth();
  const handleSubmit = async (e) => {
    try{
        setLoading(true);
        await signIn(email, password);
        navigate("/dashboard");
    }
    catch(e){
        alert(e.message);
        console.log(e);
    }
    setLoading(false);
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
                    className='w-full p-2 rounded border border-slate-500 outline-none' placeholder='Enter your password'/>
                </div>
            </form>
            <div className='w-1/3'>
                <button className='bg-blue-500 text-white py-2 font-bold text-sm rounded-lg w-full' onClick={handleSubmit} disabled={loading}>Sign in</button>
                <p className='text-sm text-slate-600 mt-3'>Don't have an account? <Link to='/signup' className='underline text-blue-500'>Register</Link></p>
            </div>
            <div>
                <p className='text-sm text-center mb-4'>or</p>
                <div className='flex gap-6 items-center'>
                    <button className='rounded-full w-7 h-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                    </button>
                    <button className='rounded-full w-7 h-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                        </svg>
                    </button>
                    <button className='rounded-full w-7 h-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
                            <path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)"></path><path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)"></path><path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)"></path><path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn