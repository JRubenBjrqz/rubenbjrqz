import { Card } from '@/components/cards/Card'
import { LiaProjectDiagramSolid } from 'react-icons/lia'
import type { LearningProps } from '@/interfaces'
import { AnimatedListDemo } from '@/components/cards/learning/LearningAnimatedList'

export function Learning({ className = '', ...props }: LearningProps) {
    return (
        <Card className={className}>
            <Card.Pill icon={LiaProjectDiagramSolid}>Learning</Card.Pill>
            <AnimatedListDemo />
        </Card>
    )
}