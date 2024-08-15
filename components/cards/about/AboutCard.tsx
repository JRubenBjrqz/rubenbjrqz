import { LiaHeadsetSolid } from 'react-icons/lia'
import { Card } from '@/components/cards/Card'
import type { AboutProps } from '@/interfaces'
import { Avatar } from '@/components/ui/Avatar'
import { SocialLinks } from '@/components/ui/SocialLinks'

export function About({ className = '' }: AboutProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaHeadsetSolid}>About me</Card.Pill>
            <div className="mt-auto">
                <div className="flex flex-col items-center mb-6">
                    <Avatar size="xxl"/>
                    <SocialLinks />
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-semibold mb-2">Rubén Bojórquez</h1>
                    <p className="text-[15px] font-light">
                        I'm Frontend Developer with experience as UX/UI Designer. 
                        Currently working at Sofía XT. Based in Hermosillo, Mexico.
                    </p>
                </div>
            </div>
        </Card>
    )
}


