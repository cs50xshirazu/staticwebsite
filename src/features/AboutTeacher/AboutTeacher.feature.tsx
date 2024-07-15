import { AboutTeacherTexts } from '@/components'
import Image from 'next/image'
import CertificateImage from '../../../public/images/certificate.webp'

export const AboutTeacher = () => {
  return (
    <section
      id='educator'
      className='w-full grid grid-cols-2 gap-20 bg-primary p-page py-7 lg:grid-cols-1 md:gap-10'
    >
      <AboutTeacherTexts />
      <Image
        src={CertificateImage}
        className='w-full h-full'
        alt='certificate'
      />
    </section>
  )
}
