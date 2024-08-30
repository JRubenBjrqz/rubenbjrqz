import type { SocialLinkDataProps } from '@/interfaces' 
import { 
    LiaLinkedinIn, 
    LiaGithub, 
    LiaIdCard,
    LiaEnvelope,
} from 'react-icons/lia'

export const socialLinks: SocialLinkDataProps[] = [
    {
        href: 'https://www.linkedin.com/in/jrubenbjrqz',
        label: 'LinkedIn',
        icon: LiaLinkedinIn,
    },
    {
        href: 'mailto:jrubenbjrqz@gmail.com',
        label: 'Email',
        icon: LiaEnvelope,
    },
    {
        href: 'https://read.cv/rubenbjrqz',
        label: 'Read.cv',
        icon: LiaIdCard,
    },
    {
        href: 'https://github.com/JRubenBjrqz',
        label: 'Github',
        icon: LiaGithub,
    },  
]
