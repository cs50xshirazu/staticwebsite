import certificateIcon from '../../../public/icons/certificate.svg'
import educationIcon from '../../../public/icons/education.svg'
import supportIcon from '../../../public/icons/support.svg'
import tajrobeIcon from '../../../public/icons/tajrobe.svg'
import { CourseFeaturesItem } from './CourseFeaturesItem/CourseFeaturesItem'

export const CourseFeatures = () => {
  return (
    <div className='w-full mt-8 flex flex-col gap-10'>
      <h2 className='text-black text-2xl font-semibold sm:font-medium sm:text-xl text-center lg:text-justify px-5'>
        در این دوره به سبکی متفاوت و جذاب هنر برنامه نویسی را از پایه، اصولی و
        مطابق استانداردهای دانشگاه هاروارد فرا خواهید گرفت.
      </h2>
      <div className='w-full grid grid-cols-4 gap-8 md:grid-cols-2 sm:!grid-cols-1 md:place-items-start md:gap-4'>
        <CourseFeaturesItem
          icon={supportIcon}
          title='پشتیبانی تا پایان دوره'
        />
        <CourseFeaturesItem
          icon={educationIcon}
          title='برگزاری office hours در هر هفته'
        />
        <CourseFeaturesItem
          icon={certificateIcon}
          title='ارائه گواهی حضور از دانشگاه شیراز'
        />
        <CourseFeaturesItem
          icon={tajrobeIcon}
          title='تجربه یادگیری علوم کامپیوتر به سبک دانشگاه هاروارد'
        />
      </div>
    </div>
  )
}
