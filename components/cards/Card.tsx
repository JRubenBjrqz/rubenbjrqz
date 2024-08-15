import Link from 'next/link'
import type { CardProps, CardLinkProps, CardPillProps, CardTitleProps, CardDescriptionProps, CardCTAProps, CardEyebrowProps } from '@/interfaces'
import { Pill } from '@/components/ui/Pill'

function CardLink({ children, ...props}: CardLinkProps) {
    return (
        <Link {...props}>
            <span className="absolute z-20 block -inset-y-1 -inset-x-1" />
            <span className="relative z-10">{children}</span>
        </Link>
    )
}

function CardPill({ children, className = '', icon, ...props }: CardPillProps) {
    return (
        <Pill icon={icon} className={`mb-1 ${className}`}>
            {children}
        </Pill>
    )
}

function CardTitle({ as: Component = 'h2', children, className = '', href, target, rel, ...props }: CardTitleProps) {
    return (
        <Component
            className={`text-base font-semibold tracking-tight body-primary ${className}`}
            {...props}
        >
            {href ? (
                    <CardLink href={href} target={target} rel={rel}>
                        {children}
                    </CardLink>
                ) : (
                    children
            )}
        </Component>
    )
}

function CardDescription({ children, className = '', ...props }: CardDescriptionProps) {
    return (
        <p
            className={`relative z-10 text-sm body-secondary ${className}`}
            {...props}
        >
            {children}
        </p>
    )
}

function CardCTA({ children }: CardCTAProps) {
    return (
        <div
            aria-hidden="true"
            className="relative z-10 flex items-center text-sm font-medium text-indigo-600"
        >
            {children}
        </div>
    )
}

function CardEyebrow({ as: Component = 'p', children, className = '', decorate = false, ...props}: CardEyebrowProps) {
    return (
        <Component
            className={`relative z-10 flex items-center text-sm body-secondary ${className} ${decorate && 'pl-3.5'}`}
            {...props}
        >
            {decorate && (
                <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                >
                    <span className="h-4 w-0.5 rounded-full bg-neutral-900" />
                </span>
            )}
                {children}
        </Component>
    )
}

export function Card({ as: Component = 'div', children, className = '',  ...props }: CardProps) {
    return (
        <Component
            className={`relative flex flex-col items-start rounded-3xl bento-outline p-4 overflow-hidden ${className}`}
            {...props}
        >
            {children}
        </Component>
    )
}

Card.Link = CardLink
Card.Pill = CardPill
Card.Title = CardTitle
Card.Description = CardDescription
Card.CTA = CardCTA
Card.Eyebrow = CardEyebrow
