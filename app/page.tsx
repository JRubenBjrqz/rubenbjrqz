import { Container } from "../components/ui/Container"

export default function Home() {
  const isAvailable = true

  return (
    <>
      <Container className="mt-20 sm:mt-32">
        <div className=" bg-red-600">
          <p>Hello World</p>
        </div>
      </Container>
    </>
  )
}
