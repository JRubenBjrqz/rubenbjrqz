import type { ResumeDataProps } from '@/interfaces'
import logoSofiaXT from '@/images/logos/sofiaxt.jpeg'
import logoLudens from '@/images/logos/ludens.jpeg'

export const resume: ResumeDataProps[] = [
    {
        index: 1,
        company: 'Sofía XT',
        position: 'Frontend Developer',
        logo: logoSofiaXT,
        startDate: '2024',
        endDate: 'Present'
    },
    {
        index: 2,
        company: 'Ludens Productions',
        position: 'Frontend Developer & UX/UI Designer',
        logo: logoLudens,
        startDate: '2021',
        endDate: '2023'
    }
]