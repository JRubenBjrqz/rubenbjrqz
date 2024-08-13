export interface AnimatedListProps {
    className?: string
    children: React.ReactNode
    delay?: number
}

export interface AnimatedListItemProps {
    name: string
    description: string
    icon: string
    color: string
    time: string
}