import type { StaticImageData } from 'next/image'

export interface ProjectsDataProps {
    img: StaticImageData,
    alt: string
}

export interface ProjectsProps {
    className?: string
}