export interface TechnicalSkillIconProps {
    title: string
    index: number
    svg: React.FC
    children: React.ReactNode
}

export interface TechnicalSkillsGridProps {
    className?: string
    title: string
    size: 'default' | 'two' | 'three'
    children: React.ReactNode
}
