import React, {useState} from "react"

const AddReport = ({addReport}) => {
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
    window.location.reload();
  }
  return (
    <form className='px-8 flex flex-col gap-3 text-sm'>
        <div className='flex flex-col'>
            <label htmlFor='name' className='text-left'>Patient name</label>
            <input type='text' id='name' className='w-full p-2 rounded border border-slate-500 outline-none' 
            placeholder='Enter patient name' onChange={(e) => {setReport({...report, name: e.target.value})}}/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='eye' className='text-left'>Eye</label>
            <input type='text' id='eye' className='w-full p-2 rounded border border-slate-500 outline-none' 
            placeholder='Enter the eye' onChange={(e) => {setReport({...report, eye: e.target.value})}}/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='date' className='text-left'>Date created</label>
            <input type='text' id='date' className='w-full p-2 rounded border border-slate-500 outline-none' 
            placeholder='Enter date created' onChange={(e) => {setReport({...report, uploaded: e.target.value})}}/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='analysis' className='text-left'>AI analysis</label>
            <input type='text' id='analysis' className='w-full p-2 rounded border border-slate-500 outline-none' 
            placeholder='Enter analysis' onChange={(e) => {setReport({...report, insights: e.target.value})}}/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='detections' className='text-left'>Detections</label>
            <input type='text' id='detections' className='w-full p-2 rounded border border-slate-500 outline-none' 
            placeholder='Enter detections' onChange={(e) => {setReport({...report, Detections: e.target.value.split(',')})}}/>
        </div>
        <button className='w-1/3 rounded mx-auto bg-blue-500 text-white py-2' onClick={handleSubmit}>Upload</button>
    </form>
  )
}

export default AddReport