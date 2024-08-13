import { Card } from '@/components/cards/Card'
import { OrbitingCirclesDemo } from './StackOrbitingCircles'
import { StackProps } from '@/interfaces'
import { LiaToolsSolid } from 'react-icons/lia'

export function Stack({ className = '', ...props }: StackProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaToolsSolid}>Stack</Card.Pill>
            <OrbitingCirclesDemo/>
        </Card>
    )
}