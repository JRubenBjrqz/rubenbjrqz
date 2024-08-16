import OrbitingCircles from '@/components/ui/OrbitingCircles'
import { Icons } from '@/components/ui/Icons'

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
            Tools
        </span>
      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.adobeXD />
      </OrbitingCircles>
      {/* <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.notion />
      </OrbitingCircles> */}

      {/* Outer Circles (reverse) */}
      {/* <OrbitingCircles
        className="size-[15px] border-none bg-transparent"
        radius={60}
        duration={20}
        reverse
      >
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[15px] border-none bg-transparent"
        radius={40}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles> */}
    </div>
  );
}

