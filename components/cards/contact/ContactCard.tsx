import { LiaInternetExplorer } from 'react-icons/lia'
import { Card } from '@/components/cards/Card'
import type { ContactProps } from '@/interfaces'
import { Button } from '@/components/ui/Button'

export function Contact({ className = '', ...props }: ContactProps) {
    return (
        <Card className={`overflow-hidden ${className}`}>
            <Card.Pill icon={LiaInternetExplorer} className="z-10 mb-3">
                Contact me
            </Card.Pill>
            <p className="my-2 text-sm body-secondary">
                Available to work.
                Let's talk about your project.
            </p>
            <Button
                btnStyle="boxgen"
                className="w-full"
                href="https://www.linkedin.com/in/jrubenbjrqz/"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
            </Button>
        </Card>
    )
}