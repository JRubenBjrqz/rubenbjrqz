import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export default function ComingSoon() {
    return (
        <>
            <Container className="flex justify-center items-center text-center">
                <div className="mb-5 space-y-1">
                    <h1 className="text-5xl uppercase">Coming Soon</h1>
                    <h3 className="text-xl font-medium">Website Under Construction</h3>
                </div>
                <p className="text-base">I'm working on my portfolio, and I can't wait to share it with you. Please check back soon!</p>
                <Button
                    btnStyle="bento"
                    className="w-1/2 py-3 mt-5"
                    href="/"
                >
                    Home
                </Button>
            </Container>
        </>
    )
}