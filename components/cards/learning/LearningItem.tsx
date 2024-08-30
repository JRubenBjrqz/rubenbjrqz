import { cn } from '@/lib/utils'
import type { TopicItemProps } from '@/interfaces'
import Link from 'next/link';

export function TopicItem({ topic }: TopicItemProps) {
  return (
    <figure
      className={cn("relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl py-4 px-3 border")}
    >
      <Link 
        href={topic.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-2"
      >
        <div className="flex size-5 items-center justify-center rounded-2xl">
          <span className="text-lg">{topic.img}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg">
            <h5 className="text-xs">{topic.name}</h5>
          </figcaption>
          <p className="text-[10px]">
            {topic.description}
          </p>
        </div>
      </Link>
    </figure>
  );
};