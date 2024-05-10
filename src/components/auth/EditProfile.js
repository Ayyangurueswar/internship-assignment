import React, {useState} from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const EditProfile = () => {
  const {currentUser, editPassword, editEmail} = useAuth();
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const promises = [];
  const handleSubmit = () => {
    setLoading(true);
    if(email !== currentUser.email){
        promises.push(editEmail(email));
    }
    if(password !== confirmPassword){
        return;
    }
    if(password !== '' && password !== currentUser.password){
        promises.push(editPassword(password));
    }
    Promise.all(promises).then(() => {
        alert('Profile updated successfully');
        navigate('/dashboard');
    }).catch((e) => {
        alert(e.message);
    }).finally(() => {
        setLoading(false);
    })
  }
  return (
    <div>
        <Header authenticated={false}/>
        <div className='flex items-center flex-col gap-8 justify-center w-full mt-14'>
            <h1 className='text-3xl font-semibold'>Update Profile</h1>
            <form className='flex flex-col gap-4 text-center w-1/3'>
                <div className='flex flex-col'>
                    <label htmlFor='email' className='text-left'>Email</label>
                    <input type='email' id='email' value={email} onChange={(e) => {setEmail(e.target.value)}} 
                    className='w-full p-2 rounded border border-slate-500 outline-none' placeholder='Enter your email'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='pwd' className='text-left'>Password</label>
                    <input type='password' id='pwd' value={password} onChange={(e) => {setPassword(e.target.value)}} 
                    className='w-full p-2 rounded border border-slate-500 outline-none' placeholder='Leave blank to not change'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='confirmpwd' className='text-left'>Confirm Password</label>
                    <input type='password' id='pwd' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} 
                    className='w-full p-2 rounded border border-slate-500 outline-none' placeholder='Leave blank to not change'/>
                </div>
            </form>
            <div className='w-1/3'>
                <button className='bg-blue-500 text-white py-2 font-bold text-sm rounded-lg w-full' onClick={handleSubmit} disabled={loading}>Update</button>
                <Link to='/dashboard' className='underline text-blue-500 text-sm block text-center mt-4'>Cancel</Link>
            </div>
        </div>
    </div>
  )
}

export default EditProfile