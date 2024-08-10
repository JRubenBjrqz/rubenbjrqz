import { LiaSpaSolid } from 'react-icons/lia'
import { Card } from '@/components/cards/Card'
import type { AboutProps } from '@/interfaces'
import { Avatar } from '@/components/ui/Avatar'
import { SocialLinks } from '@/components/ui/SocialLinks'

export function About({ className = '' }: AboutProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaSpaSolid}>About me</Card.Pill>
            <Avatar size='lg'></Avatar>
            <div className="flex flex-row justify-between w-full gap-2">
                <SocialLinks/>
            </div>
            <h1>Rubén Bojórquez</h1>
            <p>
                I'm Frontend Developer with experience as UX/UI Designer. 
                Currently working at Sofía XT. Based in Hermosillo, Mexico.
            </p>
        </Card>
    )
}


