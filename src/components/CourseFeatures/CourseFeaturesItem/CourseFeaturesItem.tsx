import Image from 'next/image'

type Props = {
  title: string
  icon: string
}

export const CourseFeaturesItem = ({ title, icon }: Props) => {
  return (
    <div className='w-full h-20 flex justify-center items-center gap-1 md:justify-start'>
      <Image
        width={20}
        height={20}
        src={icon}
        className='size-20'
        alt=''
      />
      <span className='font-semibold text-base'>{title}</span>
    </div>
  )
}
