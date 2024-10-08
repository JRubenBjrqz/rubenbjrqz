import { 
    LiaKeyboard,
    LiaDownloadSolid,
    LiaIdCard
} from 'react-icons/lia'
import { Card } from '@/components/cards/Card'
import type { ResumeProps } from '@/interfaces'
import { JobList } from '@/components/cards/resume/JobList'
import { Button } from '@/components/ui/Button'

export function Resume({ className = '' }: ResumeProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaKeyboard}>Work Experience</Card.Pill>
            <JobList />
            <div className="flex flex-row justify-between w-full gap-2">
                <Button
                    href="https://read.cv/rubenbjrqz"
                    btnStyle="bento"
                    className="w-1/2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LiaIdCard className="w-4 h-4 transition stroke-zinc-600 group-active:stroke-zinc-900 group-hover:stroke-zinc-900" />
                    Read.cv
                </Button>
                <Button
                    href="https://drive.google.com/file/d/1LHxK26GtgAjtxsigenGkCj9EEYGKOxlm/view?usp=drive_link"
                    btnStyle="bento"
                    className="w-1/2"
                    target="_blank"
                >
                    <LiaDownloadSolid className="w-4 h-4 transition stroke-zinc-600 group-active:stroke-zinc-900 group-hover:stroke-zinc-900" />
                    Resume
                </Button>
            </div>
        </Card>
    )
}