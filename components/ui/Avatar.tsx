import Image from 'next/image'
import Link from 'next/link'
import avatarImage from '@/images/avatar.jpeg'
import { cva } from 'class-variance-authority'
import type { AvatarProps } from '@/interfaces'

const avatarVariants = cva(
    'object-cover',
    {
        variants: {
            size: {
                default: 'w-10',
                sm: 'w-6',
                lg: 'w-16',
                xxl: 'w-44',
                about: 'max-w-96'
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
            href="/about"
            aria-label="About"
            className={avatarVariants({ size, className })}
            {...props}
        >
            <Image
                src={avatarImage}
                alt="Rubén Bojórquez"
                placeholder="blur"
                className={`rounded-full ${avatarVariants({ size, className })}`}
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
                alt="Rubén Bojórquez"
                placeholder="blur"
                className={`rounded-full ${avatarVariants({ size, className })}`}
                priority
            />
        </div>
    )
}

export function ImgAvatarAbout({ className = '', size, ...props }: AvatarProps) {
    return (
        <Image
            src={avatarImage}
            alt="Rubén Bojórquez"
            placeholder="blur"
            className={`rounded-2xl ${avatarVariants({ size, className })}`}
            priority
        />
    )
}
