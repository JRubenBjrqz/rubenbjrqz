import { About } from '@/components/cards/about/AboutCard'
import { Container } from '@/components/ui/Container'

export default function Home() {
  const isAvailable = true

  return (
    <>
      <Container>
        <div className="grid grid-cols-10 grid-rows-6 gap-7 p-5 min-h-[52rem]">
          <div className="relative col-span-4 row-span-4 border border-red-500">
            {/* About */}
          </div>
          <div className="relative col-span-6 row-span-2 border border-blue-500">
            {/* Work Experience */}
          </div>
          <div className="relative col-span-3 row-span-2 border border-orange-500">
            {/* Stack */}
          </div>
          <div className="relative col-span-3 row-span-2 border border-green-500">
            {/* Contact */}
          </div>
          <div className="relative col-span-7 row-span-2 border border-pink-500">
            {/* Projects */}
          </div>
          <div className="relative col-span-3 row-span-2 border border-yellow-500">
            {/* Learning */}
          </div>
        </div>
      </Container>
    </>
  )
}
