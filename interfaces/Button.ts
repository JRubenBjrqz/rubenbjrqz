export interface ButtonProps {
    className?: string
    children: React.ReactNode
    btnStyle: 'primary' | 'secondary' | 'solid' | 'card' | 'bento'
    href: string
    rel?: string
    target?: string
}