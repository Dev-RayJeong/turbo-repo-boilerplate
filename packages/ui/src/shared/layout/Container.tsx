import { cn } from '@workspace/ui/lib/utils.js'
import clsx from 'clsx'
import React from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: number
  padding?: {
    desktop?: number
    tablet?: number
    mobile?: number
  }
}

function Container({
  children,
  maxWidth = 1440,
  padding,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full flex-col items-center',
        `sm:px-${padding?.mobile || '0'} sm:max-w-full`,
        `md:px-${padding?.mobile || '0'} md:max-w-full`,
        `lg:max-w-${maxWidth}px 1440px lg:px-${padding?.tablet || '0'}`,
        `xl:max-w-${maxWidth}px xl:px-${padding?.desktop || '0'}`,
        `2xl:max-w-${maxWidth}px 2xl:px-${padding?.desktop || '0'} `,
        className,
      )}
      // className={clsx(
      //   `mx-auto w-full flex-col items-center px-${padding?.mobile || '0'} sm:max-w-full md:px-${padding?.mobile || '0'} lg:max-w-1440px md:max-w-full lg:px-${padding?.tablet || '0'} xl:max-w-1440px xl:px-${padding?.desktop || '0'} 2xl:px-${padding?.desktop || '0'} `,
      //   className,
      // )}
    >
      {children}
    </div>
  )
}

export default Container
