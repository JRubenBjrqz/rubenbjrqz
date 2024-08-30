'use client'

import { Icons } from '@/components/ui/Icons'
// import { cva } from 'class-variance-authority'
import { TechnicalSkillIcon } from '@/components/skills/TechnicalSkillIcon'
import { TechnicalSkillsGrid } from '@/components/skills/TechnicalSkillsGrid';

// const toggleVariants = cva(
//   'inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:box-gen data-[state=on]:text-accent-foreground',
//   {
//     variants: {
//       variant: {
//         default: 'bg-transparent',
//         outline:
//           'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
//       },
//       size: {
//         default: 'p-3',
//         sm: 'p-2.5',
//         lg: 'p-5',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'default',
//     },
//   }
// )

export function TechnicalSkills() {
    const technicalSkillsCategories = {
      Languages: Object.values(Icons).filter(icon => icon.type === 'Language'),
      Frameworks: Object.values(Icons).filter(icon => icon.type === 'Framework'),
      'CSS Frameworks': Object.values(Icons).filter(icon => icon.type === 'CSS Framework'),
      Tools: Object.values(Icons).filter(icon => icon.type === 'Tool'),
    }
  
    return (
      <>
        <div className="my-16 w-full">
          <div className="space-y-20">
            {Object.entries(technicalSkillsCategories).map(([category, stack]) => (
              <TechnicalSkillsGrid
                title={category}
                key={category}
              >
                {stack.map((skill, index) => (
                  <TechnicalSkillIcon
                    title={skill.title}
                    svg={skill.svg}
                    key={skill.title}
                    index={index}
                  >
                    {skill.title}
                  </TechnicalSkillIcon>
                ))}
              </TechnicalSkillsGrid>
            ))}
          </div>
        </div>
      </>
    );
  }
  
