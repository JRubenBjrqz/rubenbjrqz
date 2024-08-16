import OrbitingCircle from '@/components/ui/OrbitingCircle'
import { Icons } from '@/components/ui/Icons'
import type { OrbitingIconsProps } from '@/interfaces'

const iconList: OrbitingIconsProps[] = Object.values(Icons).map((IconComponent, index) => (
  <IconComponent key={index} />
))

const getRandomIcons = (iconList: OrbitingIconsProps[], count: number): OrbitingIconsProps[] => {
  const shuffled = iconList.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const getRandomDuration = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomReverse = () => {
  return Math.random() > 0.5
}

export function OrbitingCirclesDemo() {
  const randomIcons = getRandomIcons(iconList, 5)
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      {randomIcons.map((icon, index) => (
        <OrbitingCircle
          key={index}
          className="size-[25px] border-none bg-transparent"
          duration={getRandomDuration(20, 30)}
          delay={index * 10}
          radius={80 - index * 15}
          reverse={getRandomReverse()}
        >
          {icon}
        </OrbitingCircle>
      ))}
    </div>
  )
}