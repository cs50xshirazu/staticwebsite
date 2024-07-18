import Image from 'next/image'

type Props = {
  imageSrc: string
  variant: 'primary' | 'secondary'
  className?: string
}

const ImageCreator = (props: Props) => {
  const { imageSrc, className, variant } = props

  return (
    <div className='w-full h-fit relative before:absolute before:w-full before:h-full before:imagePrimary'>
      <Image
        src={imageSrc}
        className={`w-full h-full ${className ? className : ''}`}
        alt=''
        width={160}
        height={160}
      />
      <Image
        src={
          variant === 'primary'
            ? './images/imageFrame.webp'
            : './images/imageFrame2.svg'
        }
        className='absolute w-11/12 h-[90%] inset-1/2 translate-x-1/2 -translate-y-1/2 object-fill'
        alt=''
        width={160}
        height={160}
      />
    </div>
  )
}

export { ImageCreator }
