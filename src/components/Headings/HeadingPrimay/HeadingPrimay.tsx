import Image from 'next/image'
import React from 'react'
import lineImage from '../../../../public/images/line.svg'
import { HeadingPrimayText } from '../../HeadingPrimayText/HeadingPrimayText'

type Props = {
  title?: string
  children?: React.ReactNode
  className?: string
}

export const HeadingPrimay = ({ title, children, className }: Props) => {
  return (
    <div className='w-full min-h-10 grid grid-cols-3 gap-4 place-items-center'>
      <Image
        src={lineImage}
        width={480}
        height={34}
        className='w-full h-full'
        alt=''
      />
      <div className='w-full flex justify-center gap-5'>
        {children && children}
        {title && (
          <HeadingPrimayText
            className={className ? className : ''}
            isHeading={true}
            title={title}
          />
        )}
      </div>
      <Image
        src={lineImage}
        width={480}
        height={34}
        className='w-full h-full rotate-180'
        alt=''
      />
    </div>
  )
}
