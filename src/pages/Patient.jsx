import React from 'react'
import PatientDetails from '../components/patientDetails'

const Patient = () => {
  return (
    <div className='min-h-screen p-16'>
              <PatientDetails/>

        <button className='mt-10 text-xl font-semibold p-2 rounded-lg bg-blue-700 text-white'>Summarize</button>


    </div>
  )
}

export default Patient