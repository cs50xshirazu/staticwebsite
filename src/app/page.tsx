import {
  AboutCS50x,
  AboutTeacher,
  Courses,
  Header,
  ImageSection,
  NavBar,
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
    </>
  );
}
