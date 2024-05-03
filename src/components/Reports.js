import React, {useState} from 'react'
import Sidebar from './Sidebar'
import reports from '../lib/reports'
import { Link } from 'react-router-dom'

const Reports = () => {
  const [data, setData] = useState(reports);
  const handleSearch = (searchTerm) => {
    const newData = reports.filter((report) => {
      return report.name.toLowerCase().includes(searchTerm.toLowerCase()) || report.id.includes(searchTerm);
    })
    setData(newData)
  }
  return (
    <div className='flex w-full'>
        <Sidebar />
        <div className='w-[73%] py-8 px-6 h-screen overflow-y-auto'>
            <h1 className='text-4xl font-bold'>Reports</h1>
            <p className='my-4 text-slate-500'>View detailed reports on patients' retinal images and AI analysis.</p>
            <div className='w-full flex bg-slate-200 rounded-lg px-4 py-2 items-center gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 50 50" fill='rgb(100, 116, 139)'>
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
                <input placeholder='Search by patient or report ID' className='placeholder:text-slate-500 bg-transparent w-full outline-none' onChange={(e) => {handleSearch(e.target.value)}}/>
            </div>
            <div className='border rounded-xl border-slate-300 w-full mt-6'>
            <table className='w-full overflow-hidden'>
                <tr className='border-b border-slate-300 text-left'> 
                    <th className='font-semibold p-4'>Report ID</th>
                    <th className='font-semibold'>Patient Name</th>
                    <th className='font-semibold'>Date Created</th>
                    <th className='font-semibold'>AI Analysis</th>
                    <th className='font-semibold'>Actions</th>
                </tr>
                {
                    data.map((report, index) => (
                        <tr key={report.id} className={`${index !== reports.length-1 ? 'border-b border-slate-300' : ''} text-sm`}>
                            <td className='text-slate-500 px-4 py-6'>#{report.id}</td>
                            <td>{report.name}</td>
                            <td className='text-slate-500'>{report.dateCreated}</td>
                            <td>
                                <Link to='/' className='bg-slate-200 rounded-lg py-2 w-5/6 block text-center'>{report.analysis}</Link>
                            </td>
                            <td>
                                <Link to='/' className='font-bold text-slate-500'>View details</Link>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </div>
        </div>
    </div>
  )
}

export default Reports