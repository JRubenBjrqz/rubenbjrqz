'use client'

import { resume } from '@/data/resume'
import { JobItem } from '@/components/cards/resume/JobItem'

export function JobList() {
    return (

       <section
            className="relative w-full lg:space-y-5 content-around"
       >
            {resume.map((job, index) => (
                <JobItem
                    key={index}
                    index={index}
                    job={job}
                />
            ))}
       </section> 
    )
}