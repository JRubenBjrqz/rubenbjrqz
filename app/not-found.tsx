import { Container } from '@/components/ui/Container'
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <Container className="flex justify-center items-center text-center">
                <div className="mb-5 space-y-1">
                    <h1 className="text-5xl uppercase">404</h1>
                    <h3 className="text-xl font-medium">Page Not Found</h3>
                </div>
                <p className="text-base">Cannot find the page you were looking for.</p>
                <p className="text-base">
                    Go back to the&nbsp;
                    <Link 
                        href="/"
                        className="underline"
                    >
                        Home
                    </Link>
                </p>
            </Container>
        </>
    )
}