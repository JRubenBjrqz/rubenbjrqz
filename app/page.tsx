import { About } from '@/components/cards/about/AboutCard'
import { Container } from '@/components/ui/Container'

export default function Home() {
  const isAvailable = true

  return (
    <>
      <Container>
        <div className="grid grid-cols-6 gap-7 grid-rows-12 sm:grid-rows-7 md:grid-rows-6 lg:grid-rows-2">
          <div className="relative h-full col-span-6 overflow-hidden sm:col-span-3 md:col-span-3 lg:col-span-3 md:h-80 border border-red-500">
            {/* About */}
          </div>
          <div className="relative col-span-6 gap-2 sm:col-span-3 md:col-span-3 lg:col-span-3 h-80 border border-blue-500">
            {/* Work Experience */}
          </div>
          <div className="relative col-span-6 overflow-hidden sm:col-span-3 md:col-span-3 lg:col-span-2 h-80 border border-orange-500">
            {/* Stack */}
          </div>
          <div className="relative grid col-span-6 grid-rows-3 gap-4 sm:col-span-3 md:col-span-3 lg:col-span-2 h-80 border border-green-500">
            {/* Contact */}
          </div>
          <div className="relative col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 border border-pink-500">
            {/* Projects */}
          </div>
        </div>
      </Container>
    </>
  )
}
