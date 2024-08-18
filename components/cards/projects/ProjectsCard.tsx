import { Card } from '@/components/cards/Card'
import { ProjectsProps } from '@/interfaces'
import { LiaTerminalSolid } from 'react-icons/lia'
import { ProjectsMarquee } from '@/components/cards/projects/ProjectsMarquee'

export function Projects({ className = '', ...props }: ProjectsProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaTerminalSolid}>Projects</Card.Pill>
            <ProjectsMarquee />
        </Card>
    )
}