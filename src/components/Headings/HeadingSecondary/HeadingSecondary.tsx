import Image from 'next/image'
import HeadingImage from '../../../../public/images/HeadingSecondary.webp'
export const HeadingSecondary = () => {
  return (
    <div className='w-full h-10'>
      <Image
        src={HeadingImage}
        className='w-full h-full object-cover lg:object-contain'
        alt='HeadingImage'
      />
    </div>
  )
}
