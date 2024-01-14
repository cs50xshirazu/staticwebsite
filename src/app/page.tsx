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
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
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
