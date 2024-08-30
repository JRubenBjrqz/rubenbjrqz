import { cn } from '@/lib/utils'
import Image from 'next/image'
import type { MarqueeCardProps } from '@/interfaces'

export function ProjectsMarqueeCard({ project }: MarqueeCardProps) {
    return (
        <figure
            className={cn("relative w-64 overflow-hidden rounded-xl border")}
        >
            <Image
                src={project.img}
                alt={project.alt}
                priority
            />
        </figure>
    )
}