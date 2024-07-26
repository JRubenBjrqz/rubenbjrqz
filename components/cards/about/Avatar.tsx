import Image from 'next/image'
import Link from 'next/link'
import avatarImage from '@/images/avatar.jpeg'
import { cva } from 'class-variance-authority'
import type { AvatarProps } from '@/interfaces'

const avatarVariants = cva(
  'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 ',
  {
    variants: {
      size: {
        default: 'w-10',
        sm: 'w-6',
        lg: 'w-16',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export function ImgAvatar({ className = '', size, ...props }: AvatarProps) {
    return (
        <Link
            href="/"
            aria-label="Home"
            className={`block pointer-events-auto group rounded-full p-0.5 box-gen ${avatarVariants({ size, className })}`}
            {...props}
        >
            <Image
                src={avatarImage}
                alt="Avatar Rubén Bojórquez"
                placeholder="blur"
                className={avatarVariants({ size, className })}
                priority
            />
        </Link>
    )
}

export function ImgAvatarNav({ className = '', size, ...props }: AvatarProps) {
    return (
        <div className="group">
            <Image
                src={avatarImage}
                alt="Avatar Rubén Bojórquez"
                placeholder="blur"
                className={avatarVariants({ size, className })}
                priority
            />
        </div>
    )
}

export function Avatar({ className, size, nav, ...props }: AvatarProps) {
    return (
        <>
            {nav ? (
                <ImgAvatarNav
                    className={avatarVariants({ size, className })}
                    {...props}
                />
                ) : (
                <ImgAvatar
                    className={avatarVariants({ size, className })}
                    {...props}
                />
            )}
        </>
    )
}
