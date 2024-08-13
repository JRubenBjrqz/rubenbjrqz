export interface SocialLinkDataProps {
    href: string
    icon: React.ElementType
    label: string
}

export interface SocialLinksProps { 
    href: string
    rel?: string
    target?: string
    ariaLabel: string
    className?: string
    icon: React.ElementType
}