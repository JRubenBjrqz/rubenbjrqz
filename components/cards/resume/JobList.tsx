'use client'

import { resume } from '@/data/resume'
import { JobItem } from '@/components/cards/resume/JobItem'

export function JobList() {
    return (
       <section
            className='relative h-full'
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