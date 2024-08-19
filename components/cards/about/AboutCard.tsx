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
                    <Avatar size="xxl" className="mt-3 lg:mt-0"/>
                    <SocialLinks />
                </div>
                <div className="text-center">
                    <h1 className="text-3xl mb-4">Rubén Bojórquez</h1>
                    <p className="text-sm leading-6">
                        I'm Frontend Developer with experience as UX/UI Designer. 
                        Currently working at Sofía XT. Based in Hermosillo, Mexico.
                    </p>
                </div>
            </div>
        </Card>
    )
}


