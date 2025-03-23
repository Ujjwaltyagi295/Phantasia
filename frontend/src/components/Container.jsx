import { cn } from '@/lib/utils'
import React from 'react'

export const Container = ({children,classNames}) => {
  return (
    <div className={cn('max-w-[120rem] mx-auto',classNames)}>{children}</div>
  )
}
