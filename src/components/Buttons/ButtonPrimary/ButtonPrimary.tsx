import { IClickableElem } from '@/interfaces'
import Image from 'next/image'
import buttonBg from '../../../../public/images/buttonBg.webp'

type Props = {
  title: string
  className?: string
} & Partial<IClickableElem>

export const ButtonPrimary = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`relative grid place-items-center w-40 h-10 text-sm font-extrabold text-quaternary ${
        props.className ? props.className : ''
      }`}
    >
      <Image
        src={buttonBg}
        className='w-full h-full absolute inset-0 object-cover object-center'
        alt='button-bg'
        width={160}
        height={39}
      />
      <span className='z-10'>{props.title}</span>
    </button>
  )
}
