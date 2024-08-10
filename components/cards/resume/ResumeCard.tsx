import { 
    LiaBriefcaseSolid,
    LiaDownloadSolid,
    LiaScrollSolid
} from 'react-icons/lia'
import { Card } from '@/components/cards/Card'
import type { ResumeProps } from '@/interfaces'

export function Resume({ className = '' }: ResumeProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaBriefcaseSolid}>Work Experience</Card.Pill>
        </Card>
    )
}