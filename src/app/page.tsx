"use client";
import {
  AboutCS50x,
  AboutTeacher,
  Courses,
  Faq,
  Footer,
  HamMenu,
  Header,
  ImageSection,
  NavBar,
  SuitableFor,
  TeamAndSponsers,
} from "@/features";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}
