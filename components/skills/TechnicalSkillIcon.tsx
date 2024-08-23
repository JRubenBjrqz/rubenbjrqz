import { Card } from '@/components/cards/Card'
import Image from 'next/image'
import type { TechnicalSkillIconProps } from '@/interfaces'


export function TechnicalSkillIcon({ title, svg: SvgComponent, index, children }) {
    return (
        <Card as="li" className="relative z-10">
            <div className="size-16">
            <SvgComponent/>
            </div>
            {children}
        </Card>
    )
}