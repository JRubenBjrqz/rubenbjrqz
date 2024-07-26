import { AnchorHTMLAttributes } from 'react';

export interface AvatarProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string
    size?: 'default' | 'sm' | 'lg'
    nav?: boolean
}