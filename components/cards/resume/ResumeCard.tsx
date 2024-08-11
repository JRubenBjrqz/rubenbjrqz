import { 
    LiaBriefcaseSolid,
    LiaDownloadSolid,
    LiaScrollSolid
} from 'react-icons/lia'
import { Card } from '@/components/cards/Card'
import type { ResumeProps } from '@/interfaces'
import { JobList } from '@/components/cards/resume/JobList'
import { Button } from '@/components/ui/Button'

export function Resume({ className = '' }: ResumeProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaBriefcaseSolid}>Work Experience</Card.Pill>
            <JobList />
            <div className="flex flex-row justify-between w-full gap-2">
                <Button
                    href="https://read.cv/rubenbjrqz"
                    btnStyle="boxgen"
                    className="w-1/2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LiaScrollSolid className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
                    Read.cv
                </Button>
                <Button
                    href="https://read.cv/rubenbjrqz"
                    btnStyle="boxgen"
                    className="w-1/2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LiaDownloadSolid className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
                    Descargar cv
                </Button>
            </div>
        </Card>
    )
}