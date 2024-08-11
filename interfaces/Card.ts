import { AnchorHTMLAttributes, ElementType, ReactNode } from 'react'

export interface CardProps {
    as?: ElementType
    className?: string
    children: ReactNode
}

export interface CardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: ReactNode
}

export interface CardPillProps {
    icon: ElementType
    className?: string
    children: ReactNode
}

export interface CardTitleProps {
    as?: ElementType
    href?: string
    key: string
    target?: string
    rel?: string
    className?: string
    children: ReactNode
}

export interface CardDescriptionProps {
    className?: string
    children: ReactNode
}

export interface CardCTAProps {
    children: ReactNode
}

export interface CardEyebrowProps {
    as?: ElementType
    decorate: boolean
    className?: string
    children: ReactNode
}