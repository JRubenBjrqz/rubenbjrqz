import { Card } from '@/components/cards/Card'
import { ProjectsProps } from '@/interfaces'
import { LiaQuinscape } from 'react-icons/lia'
import { MarqueeDemo } from '@/components/cards/projects/ProjectsMarquee'

export function Projects({ className = '', ...props }: ProjectsProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaQuinscape}>Projects</Card.Pill>
            <MarqueeDemo />
        </Card>
    )
}