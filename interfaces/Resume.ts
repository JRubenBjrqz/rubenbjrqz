import type { StaticImageData } from 'next/image'

export interface ResumeDataProps {
    index: number
    company: string
    position: string
    logo: StaticImageData
    startDate: string
    endDate: string
}

export interface ResumeProps {
    className?: string
}