import { LiaSpaSolid } from 'react-icons/lia'
import { Card } from '@/components/cards/Card'
import type { AboutProps } from '@/interfaces'
import { Avatar } from '@/components/ui/Avatar'

export function About({ className = '' }: AboutProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaSpaSolid}>About me</Card.Pill>
            <Avatar size='lg'></Avatar>
            <div className="flex flex-row justify-between w-full gap-2">
            </div>
        </Card>
    )
}


