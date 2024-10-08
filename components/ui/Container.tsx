import type { ContainerProps } from '@/interfaces'

function OuterContainer({ children, className = '', ...props }: ContainerProps) {
    return (
        <div className={`min-h-screen sm:px-8 ${className}`} {...props}>
            <div className="mx-auto max-w-5xl lg:px-8">{children}</div>
        </div>
    )
}

function InnerContainer({ children, className = '', ...props }: ContainerProps) {
    return (
        <div
        className={`relative h-full sm:px-8 lg:px-12 ${className}`}
        {...props}
      >
        <div className="max-w-full mx-auto p-5">{children}</div>
      </div>
    )
}

export function Container({ children, ...props }: ContainerProps) {
    return (
        <OuterContainer {...props}>
            <InnerContainer>{children}</InnerContainer>
        </OuterContainer>
    )
}