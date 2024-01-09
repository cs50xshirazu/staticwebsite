import { FooterBox } from "@/components";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full h-fit bg-primary py-8 p-page text-white mt-16">
      <img src="/images/footerLine.svg" className="w-full" alt="" />
      <div className="w-full grid grid-cols-3 gap-20 md:grid-cols-1  md:gap-3">
        <div className="w-full flex gap-2 justify-start items-end md:order-3">
          <img src="/icons/cs50xShiraz.svg" alt="" />
          <img src="/icons/shirazu.svg" alt="" />
          <img src="/icons/shirazUniversity.svg" alt="" />
        </div>
        <FooterBox
          title="لینک های مفید:"
          items={[
            { link: "", name: "Cs50" },
            { link: "", name: "Tailwind CSS" },
          ]}
        />
        <FooterBox
          title="ما را در شبکه های اجتماعی دنبال کنید:"
          items={[
            {
              link: "",
              name: "Github",
              icon: <img src="./icons/github.svg" />,
            },
            {
              link: "",
              name: "Discord",
              icon: <img src="./icons/discord.svg" />,
            },
          ]}
        />
      </div>
      <img src="/images/footerLine.svg" className="w-full" alt="" />
    </footer>
  );
};

export { Footer };
