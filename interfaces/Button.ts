// TODO: Change boxgen to bento
export interface ButtonProps {
    className?: string
    children: React.ReactNode
    btnStyle: 'primary' | 'secondary' | 'solid' | 'card' | 'boxgen'
    href: string
    rel?: string
    target?: string
}