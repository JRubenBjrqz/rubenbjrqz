import { Card } from '@/components/cards/Card'
import type { TechnicalSkillIconProps } from '@/interfaces'


export function TechnicalSkillIcon({ title, svg: Svg, index }: TechnicalSkillIconProps) {
    return (
        <Card 
            as="li" 
            className="flex items-center"
            key={index}
        >
            <div className="size-14 mb-2">
                <Svg/>
            </div>
            <p className="font-semibold">
                {title}
            </p>
        </Card>
    )
}