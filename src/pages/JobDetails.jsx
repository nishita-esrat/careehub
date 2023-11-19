
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { CommonHero } from '../component/CommonHero'
import JobSingle from '../component/jobSingle'


const JobDetails = () => {
    const job = useLoaderData()
    
  return (
    <>
    <CommonHero>Job Details</CommonHero>
    <div className=' container pt-5 pb-7 grid grid-cols-1 lg:grid-cols-2 gap-9'>
       <JobSingle item={job}/>
    </div>
    </>
  )
}

export default JobDetails