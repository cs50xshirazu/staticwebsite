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
  Ios,
  NavBar,
  SuitableFor,
  TeamAndSponsers,
} from "@/features";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const [Os, setOs] = useState("");
  useEffect(() => {
    function getOS() {
      const userAgent = navigator.userAgent,
        platform = navigator?.platform || navigator.platform,
        macosPlatforms = ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"];
      let os = "";

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = "Mac OS";
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "iOS";
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "Windows";
      } else if (/Android/.test(userAgent)) {
        os = "Android";
      } else if (/Linux/.test(platform)) {
        os = "Linux";
      }

      return os;
    }
    setOs(getOS());
  }, []);
  function isIos() {
    if (Os == "iOS") {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isIos() ? (
            <>
              <NavBar />
              <Header />
              <Ios />
              <Footer />
            </>
          ) : (
            <>
              <NavBar />
              <Header />
              <AboutCS50x />
              <AboutTeacher />
              {/* <TeamAndSponsers renderSecondary={false} /> */}
              <SuitableFor />
              <Faq />
              <Footer />
            </>
          )}
        </>
      )}
    </>
  );
}
