import { LiaComments, LiaLinkedinIn } from 'react-icons/lia'
import { Card } from '@/components/cards/Card'
import type { ContactProps } from '@/interfaces'
import { Button } from '@/components/ui/Button'

export function Contact({ className = '', ...props }: ContactProps) {
    return (
        <Card className={`overflow-hidden ${className}`}>
            <Card.Pill icon={LiaComments} className="z-10 mb-3">
                Contact me
            </Card.Pill>
            <p className="my-2 text-sm font-medium">
                Available to work.
                Let's talk about your project.
            </p>
            <Button
                btnStyle="bento"
                className="w-full mt-auto"
                href="https://www.linkedin.com/in/jrubenbjrqz/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LiaLinkedinIn className="w-4 h-4 transition stroke-zinc-600x group-active:stroke-zinc-900 group-hover:stroke-zinc-900" />
                LinkedIn
            </Button>
        </Card>
    )
}