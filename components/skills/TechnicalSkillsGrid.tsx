import { TechnicalSkillsGridProps } from '@/interfaces'

export function TechnicalSkillsGrid({ className = '', children, title }: TechnicalSkillsGridProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul 
        role="list" 
        className={`grid grid-cols-1 mt-6 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${className}`}
      >
        {children}
      </ul>
    </section>
  )
}