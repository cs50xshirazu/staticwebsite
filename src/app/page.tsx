'use client'

import {
  AboutCS50x,
  AboutTeacher,
  Faq,
  Footer,
  Header,
  Ios,
  NavBar,
  SuitableFor,
} from '@/features'
import { CustomView, isIOS } from 'react-device-detect'

export default function Home() {
  return (
    <>
      <CustomView condition={isIOS}>
        <NavBar />
        <Header />
        <Ios />
        <Footer />
      </CustomView>
      <NavBar />
      <Header />
      <AboutCS50x />
      <AboutTeacher />
      <SuitableFor />
      <Faq />
      <Footer />
    </>
  )
}
