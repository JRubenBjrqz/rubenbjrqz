import { SimpleLayout } from "@/components/ui/SimpleLayout"

export const metadata = {
    title: 'Stack',
    description: 'Rubén Bojórquez',
    keywords: [
        'frontend',
    ],
}

export default function Stack() {
    return (
        <SimpleLayout
            title="Lorem ipsum dolor sit amet, consectetur."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices tortor nunc, quis maximus neque imperdiet quis. Praesent congue bibendum felis sodales egestas. "
        >
            Hello World
        </SimpleLayout>
    )
}