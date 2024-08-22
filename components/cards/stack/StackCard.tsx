import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/cards/Card'
import { StackOrbitingCircles } from '@/components/cards/stack/StackOrbitingCircles'
import { StackProps } from '@/interfaces'
import { LiaLaptopCodeSolid } from 'react-icons/lia'

export function Stack({ className = '', ...props }: StackProps) {
    return (
        <Card className={`group ${className}`}>
            <Card.Pill icon={LiaLaptopCodeSolid}>Stack</Card.Pill>
            <StackOrbitingCircles className="card-mask"/>
            <Card.Mask 
                title="Stack"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                href="/stack"
                btnText="View Stack"
            />
        </Card>
    )
}