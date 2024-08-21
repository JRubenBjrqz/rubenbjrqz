'use client'

import Link from 'next/link'
import { socialLinks } from '@/data/links'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import type { SocialLinksProps, TextSocialLinksProps } from '@/interfaces'

function SocialLink({ icon: Icon, ...props }: SocialLinksProps) {
  return (
    <Link className="p-1" {...props}>
      <Icon className="w-6 h-6 transition fill-black group-hover:fill-black" />
    </Link>
  )
}

export function SocialLinks({}) {
  return (
    <div className="flex items-center justify-start gap-4 mt-5">
      {socialLinks.map((social, index) => (
        <div className="relative group hover:bg-black hover:rounded-full p-2" key={index}>
          <div className="transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100">
            <div className="relative flex items-center group">
              <LiaExternalLinkAltSolid className="absolute w-4 h-4 transition-all group-hover:translate-x-1 fill-white" />
            </div>
          </div>
          <SocialLink
            href={social.href}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={social.label}
            className="transition-all group-hover:opacity-0"
            icon={social.icon}
          />
        </div>
      ))}
    </div>
  )
}

// Queria usar de ejemplo las fotos de google maps y el ejemplo era yo

export function TextSocialLink({ className = '', href, children, icon: Icon }: TextSocialLinksProps) {
  return (
    <li className={`flex w-full rounded-xl btn-bento  ${className}`}>
      <Link 
        href={href} 
        rel="noopener noreferrer" 
        target="_blank"
        className="mx-auto"
      >
        <div className="relative group">
          <div className="flex text-base w-full p-4 space-x-1.5 transition-all group">
            <Icon className="w-6 h-6 transition fill-black group-hover:fill-black"/>
            <span>
              {children}
            </span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export function GridSocialLinks({}) {
  return (
    <div className="mx-auto">
      <ul role="list" className="grid grid-cols-2 gap-x-10 gap-y-5">
        {socialLinks.map((link, index) => (
          <TextSocialLink
            href={link.href}
            icon={link.icon}
            key={index}
          >
            {link.label}
          </TextSocialLink>
        ))}
      </ul>
    </div>
  )
}
