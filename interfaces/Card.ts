export interface CardProps {
    as?: React.ElementType
    className?: string
    children: React.ReactNode
}

export interface CardLinkProps {
    href: string
    target?: string
    rel?: string
    className?: string
    children: React.ReactNode
}

export interface CardPillProps {
    icon: React.ElementType
    className?: string
    children: React.ReactNode
}

export interface CardTitleProps {
    as?: React.ElementType
    href?: string
    key: string
    target?: string | undefined
    rel?: string
    className?: string
    children: React.ReactNode
}

export interface CardDescriptionProps {
    className?: string
    children: React.ReactNode
}

export interface CardCTAProps {
    children: React.ReactNode
}

export interface CardEyebrowProps {
    as?: React.ElementType
    decorate: boolean
    className?: string
    children: React.ReactNode
}