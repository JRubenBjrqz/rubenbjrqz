import { About } from '@/components/cards/about/AboutCard'
import { Resume } from '@/components/cards/resume/ResumeCard'
import { Contact } from '@/components/cards/contact/ContactCard'
import { Container } from '@/components/ui/Container'
import { Stack } from '@/components/cards/stack/StackCard'
import { Projects } from '@/components/cards/projects/ProjectsCard'
import { Learning } from '@/components/cards/learning/LearningCard'

export default function Home() {
  return (
    <>
      <Container>
        <div className="grid grid-cols-10 lg:grid-rows-6 gap-7 p-5 lg:min-h-[52rem]">
          <About className="relative col-span-10 h-full md:col-span-10 lg:h-auto lg:col-span-4 lg:row-span-4" />
          <Resume className="relative col-span-10 md:col-span-10 lg:col-span-6 lg:row-span-2" />
          <Stack className="relative col-span-10 h-60 lg:h-full md:col-span-5 lg:col-span-3 lg:row-span-2" />
          <Contact className="relative col-span-10 md:col-span-5 lg:col-span-3 lg:row-span-2" />
          <Projects className="relative col-span-10 md:col-span-5 lg:col-span-7 lg:row-span-2" />
          <Learning className="relative col-span-10 md:col-span-5 lg:col-span-3 lg:row-span-2" />
        </div>
      </Container>
    </>
  )
}
