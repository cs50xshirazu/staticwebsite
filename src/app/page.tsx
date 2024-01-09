import {
  AboutCS50x,
  AboutTeacher,
  Courses,
  Faq,
  Footer,
  Header,
  ImageSection,
  NavBar,
  SuitableFor,
  TeamAndSponsers,
} from "@/features";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutCS50x />
      <AboutTeacher />
      <Courses />
      <ImageSection />
      <TeamAndSponsers />
      <SuitableFor />
      <Faq />
      <Footer />
    </>
  );
}
