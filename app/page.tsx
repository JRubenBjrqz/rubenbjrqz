import { About } from '@/components/cards/about/AboutCard'
import { Resume } from '@/components/cards/resume/ResumeCard'
import { Contact } from '@/components/cards/contact/ContactCard'
import { Container } from '@/components/ui/Container'

export default function Home() {
  const isAvailable = true

  return (
    <>
      <Container>
        <div className="grid grid-cols-10 grid-rows-6 gap-7 p-5 lg:min-h-[52rem]">
          <About className="relative col-span-10 h-44 border border-red-500 md:h-56 md:col-span-5 lg:h-auto lg:col-span-4 lg:row-span-4">
            {/* About */}
          </About>
          <Resume className="relative col-span-10 border border-blue-500 md:col-span-5 lg:col-span-6 lg:row-span-2">
            {/* Work Experience */}
          </Resume>
          <div className="relative col-span-10 border border-orange-500 md:col-span-5 lg:col-span-3 lg:row-span-2">
            {/* Stack */}
          </div>
          <Contact className="relative col-span-10 border border-green-500 md:col-span-5 lg:col-span-3 lg:row-span-2">
            {/* Contact */}
          </Contact>
          <div className="relative col-span-10 border border-pink-500 md:col-span-5 lg:col-span-7 lg:row-span-2">
            {/* Projects */}
          </div>
          <div className="relative col-span-10 border border-yellow-500 md:col-span-5 lg:col-span-3 lg:row-span-2">
            {/* Learning */}
          </div>
        </div>
      </Container>
    </>
  )
}
