'use client'
import { AccordionItem } from '@nextui-org/react'
import Image from 'next/image'
import accordionStartIcon from '../../../../public/icons/accordionStart.svg'
import indicatorIcon from '../../../../public/icons/indicator.svg'

export const CustomAccordionItem = () => {
  return (
    <AccordionItem
      key={1}
      aria-label={'props.content'}
      title={'props.content'}
      indicator={
        <Image
          alt='indicator'
          src={indicatorIcon}
          width={20}
          height={20}
        />
      }
      className='!p-0 overflow-hidden font-medium !rounded-none shadow-primary'
      startContent={
        <Image
          src={accordionStartIcon}
          alt='accordionStart'
          width={20}
          height={20}
        />
      }
      classNames={{
        content: 'accordion-content px-10 text-center text-2xl font-normal',
        heading: '!bg-primary w-full px-5 font-medium shadow-primary',
        title: 'text-white',
      }}
    >
      {'props.content'}
    </AccordionItem>
  )
}
