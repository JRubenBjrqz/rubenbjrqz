import { cn } from '@/lib/utils'
import { Card } from '@/components/cards/Card'
import { ProjectsProps } from '@/interfaces'
import { LiaTerminalSolid } from 'react-icons/lia'
import { ProjectsMarquee } from '@/components/cards/projects/ProjectsMarquee'

export function Projects({ className = '', ...props }: ProjectsProps) {
    return (
        <Card className={`px-0 ${className}`}>
            <Card.Pill icon={LiaTerminalSolid} className='ml-4'>Projects</Card.Pill>
            <ProjectsMarquee className="[mask-image:linear-gradient(to_top,transparent_15%,#000_100%)]" />
            <figure
                className={cn(
                "absolute bottom-0 left-0 w-2/5 cursor-pointer overflow-hidden rounded-xl p-4",
                )}
            >
                <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                    <h1 className="text-2xl">
                        What I do
                    </h1>
                </div>
                </div>
                <blockquote className="mt-2 text-sm">
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                </blockquote>
            </figure>
        </Card>
    )
}