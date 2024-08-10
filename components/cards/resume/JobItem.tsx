'use client'

import Image from 'next/image'
import type { JobItemProps } from '@/interfaces'

export function JobItem({ job, index }: JobItemProps) {
    return (
        <>
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                    src={job.logo}
                    alt={job.company}
                    className="w-10 h-10"
                    priority={index <= 1}
                />
            </div>
            <div className="flex flex-wrap flex-auto gap-x-2">
                <div className="sr-only">Empresa y Fecha</div>
                <div className="flex-none w-full text-sm font-medium body-primary">
                {job.company}&nbsp;-&nbsp;
                <div
                    className="inline text-xs body-secondary"
                    aria-label={`${job.startDate} until ${
                        job.endDate
                    }`}
                >
                    <time dateTime={job.startDate}>
                    {job.startDate}
                    </time>{' '}
                    <span aria-hidden="true">—</span>{' '}
                    <time dateTime={job.endDate}>
                    {job.endDate}
                    </time>
                </div>
                </div>

                <div className="sr-only">Rol</div>
                <div className="text-xs body-secondary">{job.position}</div>
            </div>
        </>
    )

}