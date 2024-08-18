export interface TopicsDataProps {
    name: string
    description: string
    img: string
    href: string
}

export interface TopicAnimatedListProps {
    className?: string
}

export interface TopicItemProps {
    topic: TopicsDataProps
    index: number
}
