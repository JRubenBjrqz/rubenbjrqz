import Marquee from '@/components/ui/Marquee'
import { projects } from '@/data/projects'
import { ProjectsMarqueeCard } from '@/components/cards/projects/ProjectsMarqueeCard'
import type { ProjectsMarqueeProps } from '@/interfaces'

export function ProjectsMarquee({ className = '' }: ProjectsMarqueeProps) {
  return (
    <div className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg ${className}`}>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
          {projects.map((project, index) => (
            <ProjectsMarqueeCard 
              key={index}
              index={index}
              project={project}
            />
          ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white/25"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white/25"></div>
    </div>
  )
}
