import { Container } from '@/components/ui/Container'
import { Avatar } from '@/components/cards/about/Avatar'

export default function Home() {
  const isAvailable = true

  return (
    <>
      <Container className="mt-20 sm:mt-32">
        <div>
          <p>Hello World</p>
          <Avatar size="lg" />
        </div>
      </Container>
    </>
  )
}
