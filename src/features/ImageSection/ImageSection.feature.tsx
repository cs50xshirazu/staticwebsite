import Image from 'next/image'
import cs50book from '../../../public/images/cs50book.webp'
const ImageSection = () => {
  return (
    <div className='w-full h-[400px]'>
      <Image
        src={cs50book}
        className='w-full h-full aspect-video object-cover'
        alt='cs50book'
        height={400}
        width={800}
      />
    </div>
  )
}

export default ImageSection
