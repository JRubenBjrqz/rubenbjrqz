export interface SocialLinkDataProps {
    href: string
    icon: React.ElementType
    label: string
}

export interface SocialLinksProps { 
    href: string
    rel?: string
    target?: string
    'aria-label': string
    className?: string
    icon: React.ElementType
}

export interface TextSocialLinksProps {
    className?: string
    href: string
    children: React.ReactNode
    icon: React.ElementType
}