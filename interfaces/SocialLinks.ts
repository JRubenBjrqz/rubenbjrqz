import { ElementType } from 'react'

export interface SocialLinkDataProps {
    href: string
    icon: ElementType
    label: string
}

export interface SocialLinksProps { 
    href: string
    rel?: string
    target?: string
    ariaLabel: string
    className?: string
    icon: ElementType
}