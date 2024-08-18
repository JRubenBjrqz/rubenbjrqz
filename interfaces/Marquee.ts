import { ProjectsDataProps } from '@/interfaces'

export interface MarqueeProps {
    className?: string
    reverse?: boolean
    pauseOnHover?: boolean
    children?: React.ReactNode
    vertical?: boolean
    repeat?: number
    [key: string]: any
}

export interface MarqueeCardProps {
    project: ProjectsDataProps,
    index: number
}