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
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <NextUIProvider>
          <NavBar />
          <Header />
          <AboutCS50x />
          <AboutTeacher />
          <Courses />
          <ImageSection />
          {/* <TeamAndSponsers /> */}
          <SuitableFor />
          <Faq />
          <Footer />
        </NextUIProvider>
      )}
    </>
  );
}
