import { Container } from '@/components/ui/Container'
import type { SimpleLayoutProps } from "@/interfaces"

export function SimpleLayout({ title, description, children }: SimpleLayoutProps) {
    return(
        <Container>
            <header>
                <h1 className="text-4xl text-pretty">
                    {title}
                </h1>
                <p className="mt-3 text-base">
                    {description}
                </p>
            </header>
            <div className="mt-7 md:mt-14">
                {children}
            </div>
        </Container>
    )
}