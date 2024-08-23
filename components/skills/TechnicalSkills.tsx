'use client'

import { Icons } from '@/components/ui/Icons'
import { cva } from 'class-variance-authority'
import { TechnicalSkillIcon } from '@/components/skills/TechnicalSkillIcon'
import { TechnicalSkillsGrid } from '@/components/skills/TechnicalSkillsGrid';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:box-gen data-[state=on]:text-accent-foreground',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'p-3',
        sm: 'p-2.5',
        lg: 'p-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export function TechnicalSkills() {
    const iconCategories = {
      Frameworks: Object.values(Icons).filter(icon => icon.type === 'Frameworks'),
      'CSS Frameworks': Object.values(Icons).filter(icon => icon.type === 'CSS Frameworks'),
      Tools: Object.values(Icons).filter(icon => icon.type === 'Tools'),
      Languages: Object.values(Icons).filter(icon => icon.type === 'Languages'),
    }
  
    return (
      <>
        <div className="relative z-20 flex items-center justify-start gap-4 px-4 py-2 my-16 rounded-full w-fit box-gen">
          <div className="space-y-20">
            {Object.entries(iconCategories).map(([category, icons], index) => (
              <TechnicalSkillsGrid
                title={category}
                size="three"
                key={category}
              >
                {icons.map((stack, idx) => (
                  <TechnicalSkillIcon
                    title={stack.title}
                    svg={stack.SvgComponent}
                    key={stack.title}
                    index={idx}
                  >
                    {stack.title}
                  </TechnicalSkillIcon>
                ))}
              </TechnicalSkillsGrid>
            ))}
          </div>
        </div>
      </>
    );
  }
  
