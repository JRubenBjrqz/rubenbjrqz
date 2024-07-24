import { forwardRef, ForwardRefExoticComponent } from 'react'
import type { ContainerProps } from '@/interfaces';


const OuterContainer = forwardRef<HTMLDivElement, ContainerProps>(function OuterContainer(
    {   
        className = '', 
        children, 
        ...props
    },
    ref
) {
    return (
        <div ref={ref} className={`sm:px-8 ${className}`} {...props}>
            <div className="mx-auto max-w-5xl lg:px-8">{children}</div>
        </div>
    )
})

const InnerContainer = forwardRef<HTMLDivElement, ContainerProps>(function InnerContainer(
    { 
        className = '', 
        children, 
        ...props 
    },
    ref
) {
    return (
      <div
        ref={ref}
        className={`relative px-4 sm:px-8 lg:px-12 ${className}`}
        {...props}
      >
        <div className="max-w-full mx-auto">{children}</div>
      </div>
    )
})
  
export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
    { 
        children, 
        ...props 
    },
    ref
) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    )
}) as ForwardRefExoticComponent<ContainerProps> & {
    Outer: typeof OuterContainer
    Inner: typeof InnerContainer
}
  
Container.Outer = OuterContainer
Container.Inner = InnerContainer