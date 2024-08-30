'use client'

import { Icons } from '@/components/ui/Icons'
import { TechnicalSkillIcon } from '@/components/skills/TechnicalSkillIcon'
import { TechnicalSkillsGrid } from '@/components/skills/TechnicalSkillsGrid'

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
  
