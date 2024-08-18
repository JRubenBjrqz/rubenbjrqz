'use client'

import { cn } from '@/lib/utils'
import { AnimatedList } from '@/components/ui/AnimatedList'
import { Topics } from '@/data/topics'
import { TopicItem } from '@/components/cards/learning/LearningItem'
import type { TopicAnimatedListProps } from '@/interfaces'

export function TopicAnimatedList({ className = '' }: TopicAnimatedListProps) {
  return (
    <div
      className={cn(
        "relative flex h-[150px] w-full flex-col overflow-hidden rounded-lg mt-2",
        className,
      )}
    >
      <AnimatedList>
        {Topics.map((topic, index) => (
          <TopicItem 
            key={index}
            index={index}
            topic={topic}
          />
        ))}
      </AnimatedList>
    </div>
  )
}
