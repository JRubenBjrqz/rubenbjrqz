'use client'

import Image from 'next/image'
import type { JobItemProps } from '@/interfaces'

export function JobItem({ job }: JobItemProps) {
    return (
        <div className="flex w-full items-center gap-3 py-2">
            <Image
                src={job.logo}
                alt={job.company}
                className="w-11 h-11 rounded-lg"
            />
            <div className="flex flex-col flex-wrap gap-x-2 w-full">
                <span className="sr-only">Company and Date</span>
                <div className="md:flex md:items-center md:justify-between w-full">
                    <h1 className="text-lg">
                        {job.company}
                    </h1>
                    <div
                        className="text-sm font-medium"
                        aria-label={`${job.startDate} until ${job.endDate}`}
                    >
                        <time dateTime={job.startDate}>
                            {job.startDate}
                        </time>
                        {' '}
                        <span aria-hidden="true">—</span>
                        {' '}
                        <time dateTime={job.endDate}>
                            {job.endDate}
                        </time>
                    </div>
                </div>
                <span className="sr-only">Position</span>
                <div className="text-sm">{job.position}</div>
            </div>
        </div>
    )

}