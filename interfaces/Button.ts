import { ReactNode } from 'react'

// TODO: Change boxgen to bento

export interface ButtonProps {
    className?: string
    children: ReactNode
    btnStyle: 'primary' | 'secondary' | 'solid' | 'card' | 'boxgen'
    href: string
    rel?: string
    target?: string
}