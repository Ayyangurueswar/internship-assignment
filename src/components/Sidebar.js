import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Modal from "./Modal"

const Sidebar = ({addReport}) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [report, setReport] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    for(const key in report){
      if(report[key] === ''){
        alert('Please fill all the fields');
        return;
      }
    }
    addReport(report);
    setShow(false);
    window.location.reload();
  }
  return (
    <div className='w-[27%] px-8 py-8 font-[500] h-screen flex justify-between flex-col'>
        <div>
            <h1 className='mb-4 text-lg'>Retinoscan AI</h1>
            <ul className='list-none ml-4 space-y-4'>
                <li className={`${location.pathname.includes('dashboard') ? 'bg-slate-200' : ''}`}><Link to='/dashboard' className='ml-2 w-full block'>Dashboard</Link></li>
                <li className={`${location.pathname.includes('analysis') ? 'bg-slate-200' : ''}`}><Link to='/' className='ml-2 block'>Analysis</Link></li>
                <li className={`${location.pathname.includes('reports') ? 'bg-slate-200 py-1.5 rounded-lg' : ''} flex items-center`}><Link to='/' className='ml-2'>Reports</Link></li>
            </ul>
        </div>
        <button className='bg-blue-500 text-white w-full rounded-lg py-1 bottom-0' onClick={() => {setShow(true)}}>New report</button>
        <Modal show={show} onClose={() => {setShow(false)}} title='New report upload'>
            <form className='px-8 py-4 flex flex-col gap-4'>
                <div className='flex flex-col'>
                  <label htmlFor='reportId' className='text-left'>Report ID</label>
                  <input type='text' id='reportId' className='w-full p-2 rounded border border-slate-500 outline-none' 
                  placeholder='Enter report ID' onChange={(e) => {setReport({...report, id: e.target.value})}}/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='name' className='text-left'>Patient name</label>
                  <input type='text' id='name' className='w-full p-2 rounded border border-slate-500 outline-none' 
                  placeholder='Enter patient name' onChange={(e) => {setReport({...report, name: e.target.value})}}/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='date' className='text-left'>Date created</label>
                  <input type='text' id='date' className='w-full p-2 rounded border border-slate-500 outline-none' 
                  placeholder='Enter date created' onChange={(e) => {setReport({...report, dateCreated: e.target.value})}}/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='analysis' className='text-left'>AI analysis</label>
                  <input type='text' id='analysis' className='w-full p-2 rounded border border-slate-500 outline-none' 
                  placeholder='Enter analysis' onChange={(e) => {setReport({...report, analysis: e.target.value})}}/>
                </div>
                <button className='w-1/3 rounded mx-auto bg-blue-500 text-white py-2' onClick={handleSubmit}>Upload</button>
            </form>
        </Modal>
    </div>
  )
}

export default Sidebar