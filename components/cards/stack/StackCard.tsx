import { cn } from '@/lib/utils'
import { Card } from '@/components/cards/Card'
import { StackOrbitingCircles } from '@/components/cards/stack/StackOrbitingCircles'
import { StackProps } from '@/interfaces'
import { LiaLaptopCodeSolid } from 'react-icons/lia'

export function Stack({ className = '', ...props }: StackProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaLaptopCodeSolid}>Stack</Card.Pill>
            <StackOrbitingCircles className="[mask-image:linear-gradient(to_top,transparent_15%,#000_100%)]"/>
            {/* TODO: Create an ui component */}
            <figure
                className={cn(
                "absolute bottom-0 left-0 cursor-pointer overflow-hidden rounded-xl p-4",
                )}
            >
                <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                    <h1 className="text-2xl">
                        Stack
                    </h1>
                </div>
                </div>
                <blockquote className="mt-2 text-sm">
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                </blockquote>
            </figure>
        </Card>
    )
}