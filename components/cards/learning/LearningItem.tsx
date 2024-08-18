import { cn } from '@/lib/utils'
import type { TopicItemProps } from '@/interfaces'

export function TopicItem({ topic }: TopicItemProps) {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl py-4 px-3",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white border",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-5 items-center justify-center rounded-2xl"
        >
          <span className="text-lg">{topic.img}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm">{topic.name}</span>
          </figcaption>
          <p className="text-xs font-normal">
            {topic.description}
          </p>
        </div>
      </div>
    </figure>
  );
};