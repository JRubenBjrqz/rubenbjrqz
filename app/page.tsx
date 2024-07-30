import { Container } from '@/components/ui/Container'
import { Avatar } from '@/components/ui/Avatar'

export default function Home() {
  const isAvailable = true

  return (
    <>
      <Container>
        <div className="grid grid-cols-7 grid-rows-9 gap-7 p-5 h-full">
          <div className="col-span-3 row-span-6 border rounded-[32px]">
          </div>
          <div className="col-span-4 row-span-3 border rounded-[32px]">
          </div>
          <div className="col-span-2 row-span-3 border rounded-[32px]">
          </div>
          <div className="col-span-2 row-span-3 border rounded-[32px]">
          </div>
          <div className="col-span-5 row-span-3 border rounded-[32px]">
          </div>
          <div className="col-span-2 row-span-3 border rounded-[32px]">
          </div>
        </div>
      </Container>
    </>
  )
}
