import { cn } from '@/lib/utils'
import { Card } from '@/components/cards/Card'
import { ProjectsProps } from '@/interfaces'
import { LiaTerminalSolid } from 'react-icons/lia'
import { ProjectsMarquee } from '@/components/cards/projects/ProjectsMarquee'

export function Projects({ className = '', ...props }: ProjectsProps) {
    return (
        <Card className={`group px-0 ${className}`}>
            <Card.Pill icon={LiaTerminalSolid} className='ml-4'>Projects</Card.Pill>
            <ProjectsMarquee className="card-mask" />
            <Card.Mask 
                title="Work I've Done"
                description="Designing and developing impactful web applications that solve real-world problems."
                href="/coming-soon"
                btnText="View Projects"
            />
        </Card>
    )
}