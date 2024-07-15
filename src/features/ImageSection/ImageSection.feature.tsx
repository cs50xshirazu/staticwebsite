import Image from 'next/image'

const ImageSection = () => {
  return (
    <div className='w-full h-[400px]'>
      <Image
        src='./images/cs50book.webp'
        className='w-full h-full aspect-video object-cover'
        alt='cs50book'
        height={400}
        width={800}
      />
    </div>
  )
}

export default ImageSection
