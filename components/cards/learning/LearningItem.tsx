import { cn } from '@/lib/utils'
import type { TopicItemProps } from '@/interfaces'

export function TopicItem({ topic }: TopicItemProps) {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
        >
          <span className="text-lg">{topic.img}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm sm:text-lg">{topic.name}</span>
          </figcaption>
          <p className="text-sm font-normal">
            {topic.description}
          </p>
        </div>
      </div>
    </figure>
  );
};