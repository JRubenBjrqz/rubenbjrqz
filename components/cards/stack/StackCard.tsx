import { Card } from '@/components/cards/Card'
import { OrbitingCirclesDemo } from '@/components/cards/stack/StackOrbitingCircles'
import { StackProps } from '@/interfaces'
import { LiaLaptopCodeSolid } from 'react-icons/lia'

export function Stack({ className = '', ...props }: StackProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaLaptopCodeSolid}>Stack</Card.Pill>
            <OrbitingCirclesDemo/>
        </Card>
    )
}