'use client'

import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { AnimatedListProps, AnimatedListItemProps } from '@/interfaces'

export function AnimatedList({ className, children, delay = 3000 }: AnimatedListProps) {
  const [index, setIndex] = useState(0);
  const childrenArray = React.Children.toArray(children)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
    }, delay)

    return () => clearInterval(interval);
  }, [childrenArray.length, delay])

  const itemsToShow = useMemo(
    () => childrenArray.slice(0, index + 1).reverse(),
    [index, childrenArray],
  )

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={(item as ReactElement).key}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  )
}

export function AnimatedListItem({ children }: AnimatedListItemProps) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}
