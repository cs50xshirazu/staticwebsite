import {
  AboutCS50x,
  AboutTeacher,
  Courses,
  Header,
  ImageSection,
  NavBar,
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
    </>
  );
}
